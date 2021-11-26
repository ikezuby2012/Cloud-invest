import React from 'react';


const Popup = ({ content, handleClose }) => {

    // const handleClose = () => {
    //     // const { history } = props;
    //     // history.replace("/signup");
    //     // window.location.reload();
    // }
    return (
        <div className={"popup-flex popup-box"}>
            <div className="popup-center popup--animate">
                <span className="text">{content}</span>
                <button onClick={handleClose} className={"popup-button"}>&times;</button>
            </div>
        </div>
    );
}
export default Popup;