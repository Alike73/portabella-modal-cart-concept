import dataDishes from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";



const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="d-flex justify-content-center align-items-center flex-wrap px-2">
            {dataDishes
            .filter(dish => {
                if(selectedCategory === "ALL") return true;
                return selectedCategory === dish.category;
            })
            .map((dish, index) => <Dish dish = {dish} key = {index} />)}
        </div>
    )
}
export default Dishes;