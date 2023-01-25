import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import basket from "../../Assets/Cart-icon.png";
import { gsap } from "gsap";


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    gsap.config({
        nullTargetWarn: false,
    });
    let tl = gsap.timeline();
    tl.fromTo(".totalValue", {rotation: 0}, {delay: .3, duration: .5, rotation: 360})
    tl.fromTo(".CartItemsTitle", {opacity: 0, y: 30}, {duration: .5, opacity: 1, y: 0})
    tl.fromTo(".CartIcon", {opacity: 0, x: "-100%"}, {duration: .8, opacity: 1, x: "0%"})
    

    

    return (
        <div className="">
            {/* Modal-Cart-Body */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header CartHeader">
                            <img className='CartIcon me-auto' src={basket} alt="BasketImage" />
                            <h2 className="modal-title text-light fs-2 ps-3 CartItemsTitle" id="exampleModalLabel">ITEMS IN YOUR CART</h2>
                            <i className="bi bi-x-circle btn ms-auto fs-2 text-light" data-bs-dismiss="modal"></i>
                        </div>
                        <div className="separator w-100"></div>
                        <div className="modal-body CartBody">
                            {cartItems.map((cartItem, index) => <CartItem cartItem = {cartItem} key = {index} />)}
                        </div>
                        <div className="modal-footer CartFooter">
                            <h3 className="text-light">Total: <span className="totalValue fs-1"><i className="bi bi-currency-dollar fs-4"></i>{totalPrice}</span></h3>
                            <button type="button" className="btn btn-success mx-auto CheckoutBtn"data-bs-toggle="modal" data-bs-target="#exampleModal1"><i className="bi bi-bank"></i> Checkout</button>
                            <button type="button" className="btn btn-primary HomeBtn" data-bs-dismiss="modal"><i className="bi bi-house-door"></i> Home</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------- */}
        </div>
    )
}
export default Cart;