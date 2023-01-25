
import logoRestaurant from "../../Assets/logo1.png";
import catInCart from "../../Assets/Cart-icon.png";
import myLogo from "../../Assets/My-new-Logo.png";
import { getCartItems } from "../../redux/cartSlice";
import CheckoutItems from "./CheckoutItems";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";
import { useState } from "react";


const Checkout = ({thankChefAndCat}) => {

    const year = new Date().getFullYear();
    const totalPrice = useSelector(getTotalPrice);
    const cartItems = useSelector(getCartItems);
    const [message, setMessage] = useState("");
    
    
    return (
        <div>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                    <div className="modal-header CartHeader">
                        <h2 className='headerTitle text-center'>
                            <span className='FlagGreen flag'>IT</span><span className='FlagWhite flag'>ALI</span><span className='FlagRed flag'>AN</span>
                            <img className='LogoRestaurant ms-2' src={logoRestaurant} alt="LogoRestaurant" />
                        </h2>
                        <i className="bi bi-x-circle btn ms-auto fs-2 text-light" data-bs-dismiss="modal"></i>
                    </div>
                    <div className="modal-body checkoutBackground">
                    <div className="container">
                        <main>
                            <div className="py-5 text-center">
                            
                            <figure className="col-sm-2 mx-auto CatFrame">
                                <div className="outerBevel">
                                    <div className="flatSurface">
                                        <div className="innerBevel checkoutCatBG">
                                            <i className="bi bi-check-circle fs-2 text-light"></i>
                                            <img className="d-block checkoutCat" src={catInCart} alt="" width="72" />
                                        </div>
                                    </div>
                                </div>
                            </figure>

                                <h2 className="text-success fs-1 mb-5 checkoutFormTitle payment">Checkout form</h2>
                            </div>
                            {/* ----------------------------------------CART-ITEMS-------------------------------- */}
                            <div className="row g-5">
                            <div className="col-md-5 col-lg-4 order-md-last">
                                <h4 id="cartTitle" className="d-flex justify-content-between align-items-center mb-3 py-3 px-5">
                                    <span className="text-light fs-4" id="cartTitleText">Cart<i className="bi bi-caret-right"></i></span>
                                    <span className="badge bg-success rounded-pill px-3 py-3" id="cartQuantity">Total: ${totalPrice}</span>
                                </h4>
                                {cartItems.map((cartItem, index) => <CheckoutItems cartItem = {cartItem} key = {index} />)}
                            </div>
                            <div className="col-md-7 col-lg-8 CheckoutFormMain">
                            <h4 className="mb-3 text-light text-center mt-3 fs-3 billingAddress">Billing address</h4>
                            <form className="needs-validation">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input onChange={event => setMessage(event.target.value)} type="text" className="form-control" id="firstName" placeholder="Full name" required="required" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control" id="email" placeholder="you@example.com" required="required" />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St..." required="required" />
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <select className="form-select" id="country" required="required">
                                            <option value="">Country...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select" id="state" required="required">
                                            <option value="">State...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="zip" placeholder="Zip..." required="required" />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4 dividerLine" />

                                <div className="form-check">
                                    <label className="checkbox form-check-label" htmlFor="same-address">
                                        <input id="same-address" type="checkbox" />
                                        <span className="ms-3 payment">Shipping address is the same as my billing address</span>
                                    </label>
                                </div>
                                
                                <hr className="my-4 dividerLine" />
                                <h4 className="mb-3 text-light text-center fs-3 payment">Payment</h4>

                                <div className="my-3">
                                <div className="form-check mb-3">
                                    <label htmlFor="credit" className="btn-radio">
                                    <input type="radio" id="credit" name="paymentMethod" required="" />
                                    <svg width="25px" height="25px" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="9"></circle>
                                        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                                        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                    </svg>
                                    <span className="ms-3 payment">Credit card</span>
                                    </label>
                                </div>
                                
                                <div className="form-check mb-3">
                                    <label htmlFor="debit" className="btn-radio">
                                    <input type="radio" id="debit" name="paymentMethod" required="" />
                                    <svg width="25px" height="25px" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="9"></circle>
                                        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                                        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                    </svg>
                                    <span className="ms-3 payment">Debit card</span>
                                    </label>
                                </div>

                                <div className="form-check mb-3">
                                    <label htmlFor="paypal" className="btn-radio">
                                    <input type="radio" id="paypal" name="paymentMethod" required="" />
                                    <svg width="25px" height="25px" viewBox="0 0 20 20">
                                        <circle cx="10" cy="10" r="9"></circle>
                                        <path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" className="inner"></path>
                                        <path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" className="outer"></path>
                                    </svg>
                                    <span className="ms-3 payment">PayPal</span>
                                    </label>
                                </div>
                                </div>

                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="cc-name" placeholder="Name on card..." required="required" />
                                        <small className="text-light payment">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="cc-number" placeholder="Credit card number" required="required" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="Expiration" required="required" />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="CVV" required="" />
                                        <div className="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <button id="formBtn" disabled={!message} onClick={thankChefAndCat} className="w-100 btn btn-lg" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                    Place your order
                                </button>
                            </form>
                                <p className="text-danger text-center fs-5 mt-3">Start typing your information to place your order!</p>
                                </div>
                            </div>
                        </main>
                    </div>
                    
                    </div>
                    <div className="modal-footer CartFooter">
                        <footer className="mx-auto text-muted text-center text-small">
                            <p className="mb-1 text-light">© {year} Created with <i className="bi bi-heart-fill"></i> by</p>
                                <ul className="list-inline">
                                    <li className="list-inline-item"><img className="myLogo" src={myLogo} alt="myLogo" /></li>
                                </ul>
                            <p className="mb-1 text-light">All images were taken from open-sources and are used for educational purposes only.</p>
                        </footer>
                        <button type="button" className="btn btn-warning checkoutHomeBtn" data-bs-dismiss="modal"><i className="bi bi-house"></i> Home</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;