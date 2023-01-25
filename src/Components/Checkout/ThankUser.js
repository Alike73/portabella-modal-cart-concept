import basket from "../../Assets/Cart-icon.png";
import chefLogo from "../../Assets/chef-hand-up.png";
import door from "../../Assets/door.png";
import { gsap } from "gsap";
import Checkout from "./Checkout";

const ThankUser = () => {

    gsap.config({
        nullTargetWarn: false,
    });

    const thankChefAndCat = () => {
        let tl = gsap.timeline();
        tl.fromTo(".ThankText", {opacity: 0, y: 50}, {delay: .3, stagger: .3, opacity: 1, y: 0})
        tl.fromTo(".Door", {opacity: 0, y: "-100%"}, {duration: .9, opacity: 1, y: "0%"})
        tl.fromTo(".thankChef", {opacity: 0, x: "-100%"}, {duration: .5, opacity: 1, x: "0%"})
        tl.fromTo(".thankCat", {opacity: 0, x: "-100%"}, {duration: .5 , opacity: 1, x: "0%"})
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header ThankHeader">
                        <img className="thankCat" src={basket} alt="catLogo" />
                        <img className="thankChef" src={chefLogo} alt="chefLogo" />
                        <img className="Door" src={door} alt="DoorImage" />
                        <h1 className="modal-title fs-3 mx-auto text-light ps-3 ThankText" id="exampleModalLabel">
                            Thank you!
                        </h1>
                        <i className="bi bi-x-circle btn ms-auto fs-2 text-light" data-bs-dismiss="modal"></i>
                    </div>
                    <div className="modal-body ThankBody">
                        <h3 className="text-center text-success fs-1 ThankText py-5">Your order will be delivered right to your door!</h3>
                    </div>
                    <div className="modal-footer ThankFooter">
                        <button type="button" className="btn btn-warning checkoutHomeBtn" data-bs-dismiss="modal"><i className="bi bi-house"></i> Home</button>
                    </div>
                    </div>
                </div>
            </div>
            <Checkout thankChefAndCat = {thankChefAndCat} />
        </div>
    )
}
export default ThankUser;