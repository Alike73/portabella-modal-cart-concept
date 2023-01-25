import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";
import { gsap } from "gsap";

import CatInCart from "../../Assets/Cart-icon.png";
import Chef from "../../Assets/chef-hand-up2.png";



const TotalCart = () => {

    gsap.config({
        nullTargetWarn: false,
    });
    gsap.fromTo(".CartTotalFieldNumber", {rotation: 0}, {duration: .5, rotation: 360})

    const playPrice = () => {
        gsap.fromTo(".CartTotalFieldNumber", {rotation: 0}, {duration: .5, rotation: 360})
    }

    const totalInCart = useSelector(getTotalPrice);

    return (
        <div className="">
            <button onMouseOver={playPrice} type="button" className="btn HeaderCartIconBox me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className='CartTotalField'>
                    <span className="CartTotalFieldNumber">
                        <i className="bi bi-currency-dollar"></i> 
                        {totalInCart}
                    </span>
                </span>
                <img className='CartIcon' src={CatInCart} alt="CatInCart" />
                <img className='ChefIcon' src={Chef} alt="Chef" />
                <svg className="CircleText" viewBox="-126 -126 252 252" xmlns="http://www.w3.org/2000/svg">
                    <path id="path" d="M-125 0a125 125 0 10250 0 125 125 0 10-250 0" fill="none" />
                    <text y="40">
                        <textPath href="#path" startOffset="20">
                            TOTAL IN YOUR CART .
                            TOTAL IN YOUR CART ~~~~~~~~
                        </textPath>
                    </text>
                </svg>
            </button>
        </div>
    )
}
export default TotalCart;