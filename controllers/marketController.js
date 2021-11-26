const CoinMarketCap = require("coinmarketcap-api");

const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const apiKey = process.env.coinMarketApiKey;
const client = new CoinMarketCap(apiKey);

// const getCircularReplacer = () => {
//     const seen = new WeakSet();
//     return (key, value) => {
//         if (typeof value === "object" && value != null) {
//             if (seen.has(value)) {
//                 return;
//             }
//             seen.add(value);
//         }
//         return value;
//     }
// }
exports.fetchData = catchAsync(async (req, res, next) => {
    const data = await client.getTickers({ limit: 100 });
    if (data) {
        // console.log(data);
    }

    if (!data) {
        return next(new AppError("something went wrong", 404))
    }
    res.status(200).json({
        status: "success",
        data
    })
});
