import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/cartSlice";
import { gsap } from "gsap";


const TotalOnBoard = () => {

    gsap.config({
        nullTargetWarn: false,
    });
    gsap.fromTo(".amount", {opacity: 0, y: -50}, {duration: .7, opacity: 1, y: 0, ease: "bounce"})

    const totalOnBoard = useSelector(getTotalPrice);

    return (
        <div>
            <p className='m-0 p-0 text-center headerChalkTotalAmount'>
                Total: $ <span className="amount">{totalOnBoard}</span>
            </p>
            
        </div>
    )
}
export default TotalOnBoard;