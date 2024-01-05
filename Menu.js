import { Link } from "react-router-dom";
function Menu()
{
    return(
        <>
        <h1 style={{textAlign:"center"}}>
            <Link to="Category/">Category</Link> | <Link to="Subcategory/">Subcategory</Link> |
            <Link to="Products/">Products</Link> 
        </h1>
        </>
    )
}
export default Menu;