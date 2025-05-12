import "./pagination.css";
function Pagination(props){
    function previous(){
        if(props.s.limit>3){
            props.s.set(props.s.limit-3);
        }else if(props.s.limit>1){
            props.s.set(props.s.limit-1);
        }
    }

    function next(){
        if(props.e.limit<(props.e.limit-3)){
            props.e.set(props.s.limit+3);
        }
    }
    return (
        <>
            <nav className="w-100 d-flex justify-content-center align-items-center m-3">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" aria-label="Previous" onClick={previous}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link">{props.s.limit}</a></li>
                    <li className="page-item"><a className="page-link">{props.s.limit+1}</a></li>
                    <li className="page-item"><a className="page-link">{props.s.limit+2}</a></li>
                    <li className="page-item">
                        <a className="page-link" aria-label="Next" onClick={next}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Pagination;