import "./blog.css";
import SearchBar from "../../searchBar/searchbar";
import { LazyCards } from "../../cards/cards";
function Blog() {
    let i = 0;
    return (
        <div className="container">
            <p className="display-6 text-center">My Blogs</p>
            <SearchBar /><br />
            <p className="fs-3 text-center">Comming Soon</p>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <LazyCards></LazyCards>
                <LazyCards></LazyCards>
                <LazyCards></LazyCards>
                <LazyCards></LazyCards>
            </div>
            <br/>
        </div>
    );
}
export default Blog;