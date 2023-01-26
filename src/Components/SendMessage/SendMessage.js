import portabella from "../../Assets/3D1.png";
import SendBtn from "./SendBtn/SendBtn";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { gsap } from "gsap";
import SendMessageBtn from "./SendMessageBtn";

const SendMessage = () => {

    const SendMessagePagePlay = () => {
        gsap.config({
            nullTargetWarn: false,
        });
        let tl = gsap.timeline();
        tl.fromTo(".Portabella", {opacity: 0, x: "-100%"}, {delay: .3, duration: .6, opacity: 1, x: "0%"})
        tl.fromTo(".SendMessageText", {opacity: 0, y: -50}, {duration: .5, opacity: 1, y: 0})
        tl.fromTo(".SendPlane", {opacity: 0, y: 100, x: -150,}, {duration: .7, opacity: 1, y: 0, x: 0})
    }

    const warningMessage = () => {
        gsap.config({
            nullTargetWarn: false,
        });
        gsap.fromTo(".WarningText", {opacity: 0, x: "-100%"}, {duration: .5, opacity: 1, x: "0%", ease: "bounce"})
    }

    // 👇️ store inputs's value in state
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    const handleChangeUserName = event => {
        setUserName(event.target.value);
    };
    const handleChangeUserEmail = event => {
        setUserEmail(event.target.value);
    };
    const handleChangeUserMessage = event => {
        setUserMessage(event.target.value);
    };
    
    const handleClick = () => {
    // 👇️ clear input value of all input fields
    setUserName('');
    setUserEmail('');
    setUserMessage('');

    };

    return (
        <div>
        <SendMessageBtn SendMessagePagePlay = {SendMessagePagePlay} />
            <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header SendMessageHeader">
                        <img className="Portabella" src={portabella} alt="3d-character" />
                        <h1 className="modal-title fs-3 text-light SendMessageTitle" id="exampleModalLabel5">
                            <span className="SendMessageText me-3">Send us a message</span> <span className="SendPlane"><FaPaperPlane /></span>
                        </h1>
                        <i className="bi bi-x-circle ms-auto fs-2 text-light" data-bs-dismiss="modal"></i>
                    </div>
                    <div className="separator w-100"></div>
                    <div className="modal-body SendMessageBody">

                        <form>
                            <figure>
                                <div className="outerBevel">
                                    <div className="flatSurface">
                                        <div className="innerBevel">
                                            <div className="p-1 SendMessageFieldBg">
                                                <input onChange={handleChangeUserName} value={userName} type="text" className="form-control" id="firstName" placeholder="Full name ..." required="required" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure>
                                <div className="outerBevel">
                                    <div className="flatSurface">
                                        <div className="innerBevel">
                                            <div className="p-1 SendMessageFieldBg">
                                                <input onChange={handleChangeUserEmail} value={userEmail} type="email" className="form-control" id="email" placeholder="you@example.com ..." required="required" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                            <figure>
                                <div className="outerBevel">
                                    <div className="flatSurface">
                                        <div className="innerBevel">
                                            <div className="p-1 SendMessageFieldBg">
                                            <textarea onChange={handleChangeUserMessage} value={userMessage} className="form-control" id="address" placeholder="type your message ..." rows="5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        </form>

                    </div>
                    <div className="separator w-100"></div>
                    <div className="modal-footer SendMessageFooter">
                        <p className="me-auto text-danger fs-5 WarningText">Start typing your message first!</p>
                        <span type ="button" onClick={handleClick}>
                            <SendBtn userName = {userName} warningMessage = {warningMessage} />
                        </span>
                        <button type="button" className="btn btn-warning SendMessageHomeBtn fs-5" data-bs-dismiss="modal"><i className="bi bi-house"></i> Home</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SendMessage;