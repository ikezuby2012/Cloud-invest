const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "user must have a name!"]
    },
    email: {
        type: String,
        required: [true, "please provide an email address!"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    },
    password: {
        type: String,
        required: [true, "please provide a password!"],
        minLength: [8, "password must have 8 or more characters"],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "please confirm your password!"],
        minLength: [8, "password must have 8 or more characters"],
        validate: {
            validator: function (el) {
                //this works on save()
                return el === this.password;
            },
            message: "passwords does not match!"
        }
    },
    role: {
        type: String,
        enum: {
            values: ["user", "moderator", "admin"],
            message: "role is either user, moderator, admin"
        },
        default: "user"
    },
    phoneNumber: {
        type: String,
        // validate: [validator.isNumeric, "please provide a valid phone number"]
    },
    ethereum: {
        type: String,
        validate: [validator.isEthereumAddress, "please provide a valid ethereum address"]
    },
    bitcoin: {
        type: String,
        validate: [validator.isBtcAddress, "please provide a valid bitcoin address"]
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

userSchema.pre("save", async function (next) {
    // only run this function if password is not modified
    if (!this.isModified('password')) return next();
    //hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    //delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password") || this.isNew) return next();

    this.passwordChangedAt = Date.now - 1000; // token may be created before timeStamp so we subtract 1s
    next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePassword = function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changeTS = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
        console.log(changeTS, JWTTimestamp)

        return JWTTimestamp < changeTS;
    }
    // false means not changed
    return false;
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

const User = model("User", userSchema);
module.exports = User;