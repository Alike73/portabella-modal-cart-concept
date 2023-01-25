
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/dishesSlice";



const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div>
            <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? "categoryButtonSelected categoryButton text-light" : "categoryButton text-light"}>{category}</p>
        </div>
    )
}
export default Filter;