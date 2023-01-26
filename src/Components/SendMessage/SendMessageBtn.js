import { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";

const SendMessageBtn = ({SendMessagePagePlay}) => {
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setShowMessage(true);
            } else {
                setShowMessage(false);
            }
        });
    }, []);
    
    return (
        <div className="sendMessage">
            {" "}
            {showMessage && (
                <FaRegCommentDots onClick={SendMessagePagePlay} data-bs-toggle="modal" data-bs-target="#exampleModal5" className="messageBox-position messageBox-style" />
            )}{" "}
        </div>
    );
};
export default SendMessageBtn;