import "./searchbar.css";
function SearchBar(props) {
    function search(e){
        props.setQ(e.target.value);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-1">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle filterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                            </svg>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item fw-bolder" type="button">Order By</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type="button">Newest First</button></li>
                            <li><button className="dropdown-item" type="button">Oldest First</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item fw-bolder" type="button">Category</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" type="button">Web Application</button></li>
                            <li><button className="dropdown-item" type="button">Games</button></li>
                        </ul>
                    </div>
                </div>
                <div className="col-11 position-relative">
                    <form className="searchContainer">
                        <input className="searchBar" placeholder="Type here to Search..."/>
                        <button className="searchIcon" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;