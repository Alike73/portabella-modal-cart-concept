
const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }


    return (
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={removeQuantity} type="button" className="btn btn-outline-secondary py-1 changeQuantityBtn"><i className="bi bi-patch-minus"></i></button>
                <span className="btn btn-outline-secondary px-3 py-1 changeQuantityBtn">
                    {quantity}
                </span>
            <button onClick={addQuantity} type="button" className="btn btn-outline-secondary py-1 changeQuantityBtn"><i className="bi bi-patch-plus"></i></button>
        </div>
    )
}
export default ChangeQuantity; 