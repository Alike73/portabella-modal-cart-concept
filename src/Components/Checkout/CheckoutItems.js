

import dataDishes from "../../data/dataDishes";

const CheckoutItems = ({cartItem}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId);

    return (
        <div>
            <ul id="cartList" className="list-group mb-3 CheckoutFormMain">
                <li className="list-group-item d-flex justify-content-center lh-sm">
                    <h6 className="my-0 itemName fs-3"><i className="bi bi-check-circle"></i> {dishes.name}</h6>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0 itemName">Price/portion:</h6>
                    </div>
                    <span id="itemPrice"><i className="bi bi-currency-dollar fs-5"></i><span className="fw-bold">{dishes.price}</span></span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm ">
                    <div>
                        <h6 className="my-0 itemName">Quantity:</h6>
                    </div>
                    <span id="itemPrice"><span className="fw-bold">{cartItem.quantity} (pcs)</span></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <div className="text-success">
                        <h6 className="my-0 itemName">Price:</h6>
                    </div>
                    <div>
                        <i className="bi bi-currency-dollar fs-5 text-light"></i>
                        <span id="itemPrice">
                            <span className="fw-bold">
                                {dishes.price * cartItem.quantity}
                            </span>
                        </span>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}
export default CheckoutItems;