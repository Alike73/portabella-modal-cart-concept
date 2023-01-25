import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h3 className="mb-3 text-light"><span className="border-bottom py-1">OUR MENU</span></h3>
            {["ITALIAN", "SEAFOOD", "APPETIZERS", "SALADS", "ALL"].map((category, index) => <Filter category = {category} key = {index} />)}
        </div>
    )
}
export default AllCategories;