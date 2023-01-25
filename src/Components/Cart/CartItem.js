import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { gsap } from "gsap";


const CartItem = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();

    gsap.config({
        nullTargetWarn: false,
    });

    gsap.fromTo(".dishImgModal", {opacity: 0, x: "-100%"}, {delay: 1.7, stagger: .3, opacity: 1, x: "0%"})
    gsap.fromTo(".CartItemsText", {opacity: 0, y: 30}, {delay: .9, opacity: 1, stagger: .1, y: 0})

    return (
        <div className="">
            <div className="modal-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3 className="fs-3 text-center CartItemsText">{dishes.name}</h3>
                                    <figure className="dishImgModal">
                                        <div className="outerBevel">
                                            <div className="flatSurface">
                                                <div className="innerBevel">
                                                    <img className="img-fluid" src={`${dishes.img}.jpg`} alt="DishImage" />
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                                <div className="col-sm-8 d-flex flex-column justify-content-evenly">
                                    <div className="itemValue">
                                        <p className="fs-3 CartItemsText">
                                            Quantity: {cartItem.quantity}portion(s)
                                        </p>
                                        <p className="fs-3 CartItemsText">
                                            Price: <i className="bi bi-currency-dollar fs-5"></i>
                                            {dishes.price * cartItem.quantity}
                                        </p>
                                    </div>
                                    <div className="trashBox w-100 d-flex justify-content-center mb-3">
                                        <span className="trashBox" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                                            <i className="bi bi-trash3"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator w-100"></div>
                </div>
            </div>
        </div>
    )
}
export default CartItem; 
