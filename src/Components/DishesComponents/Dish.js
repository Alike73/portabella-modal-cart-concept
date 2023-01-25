import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, getTotalPrice } from "../../redux/cartSlice";
import dataDishes from "../../data/dataDishes";

const Dish = ({dish}) => {
    

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const totalPriceOnCard = useSelector(getTotalPrice);


    const [showMore, setShowMore] = useState(false);
    const showText = (dataDishes) => {
        dataDishes.showMore = !dataDishes.showMore;
        setShowMore(!showMore);
    }

    const btnText = showMore ? "less" : "more";

    return (
            <figure className="MenuFrame col-lg-4">
            <div className="outerBevel">
                <div className="flatSurface">
                    <div className="innerBevel">
                        <div className="col CardMainBox">
                            <div className="card pt-0 CardBody">

                                <figure className="caption-shadow DishFrame">
                                    <img src={`${dish.img}.jpg`} className=" ItemImage img-fluid" alt ="ItemImage" />
                                    <figcaption >
                                        {dish.name}
                                    </figcaption>
                                </figure>

                                <div className="card-body">
                                    <div className="col-lg-12 d-flex ">
                                        <p className="card-text col-lg-8">
                                            {showMore ? dish.description : dish.description.substring(0, 70) + "...."}
                                            <span className='whiteSpace'></span>
                                            <button className='SeeMoreBtn' onClick={() => showText(dataDishes)}>
                                                {btnText}
                                                <svg viewBox="0 0 70 36">
                                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                                </svg>
                                            </button>
                                            
                                        </p>
                                        <div className="TotalInCartBox col-lg-4 d-flex flex-column justify-content-center align-items-end">
                                            <p className="p-0 m-0 TotalTextOnCard">Total</p>
                                            
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="CartBtn">
                                                <span className="TotalOnCard">${totalPriceOnCard}</span>
                                                <i className="bi bi-cart4"></i>
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity} />
                                        <div className="price text-center">
                                        <span className="Price"><i className="bi bi-currency-dollar"></i></span>
                                        {dish.price}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}} data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="btn btn-lg py-2 addToCartBtn">
                                <i className="bi bi-cart-plus"></i> Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    )
}
export default Dish;