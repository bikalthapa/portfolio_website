import "./portfolio.css"
import Cards, { LazyCards } from "../../cards/cards";
import SearchBar from "../../searchBar/searchbar";
import Pagination from "../../pagination/pagination";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Portfolio(props) {
  // let projectData = [
  //   {
  //     id: "1",
  //     thumbnail: "./project1.png",
  //     title: "Multi Player Chess Game | HTML, CSS and JS"
  //   },
  //   {
  //     id: "2",
  //     thumbnail: "./project2.png",
  //     title: "First Quiz App In React. All rights reserved. Computer Category. Favourite projects"
  //   },
  //   {
  //     id: "3",
  //     thumbnail: "./project1.png",
  //     title: "Multi Player Chess Game | HTML, CSS and JS"
  //   },
  //   {
  //     id: "4",
  //     thumbnail: "./project2.png",
  //     title: "First Quiz App In React. All rights reserved. Computer Category. Favourite projects"
  //   },
  //   {
  //     id: "5",
  //     thumbnail: "./project1.png",
  //     title: "Multi Player Chess Game | HTML, CSS and JS"
  //   },
  //   {
  //     id: "6",
  //     thumbnail: "./project2.png",
  //     title: "First Quiz App In React. All rights reserved. Computer Category. Favourite projects"
  //   },
  //   {
  //     id: "7",
  //     thumbnail: "./project1.png",
  //     title: "Multi Player Chess Game | HTML, CSS and JS"
  //   },
  //   {
  //     id: "8",
  //     thumbnail: "./project2.png",
  //     title: "First Quiz App In React. All rights reserved. Computer Category. Favourite projects"
  //   }
  // ];
  const [Portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as true
  const [order, setOrder] = useState("DESC");
  const [query, setQuery] = useState("");
  const [sLimit, setSLimit] = useState(1);
  const [eLimit, setELimit] = useState(12);


  function orderASC() {
    setOrder("ASC");
  };
  function orderDESC() {
    setOrder("DESC");
  };
  const fetchData = async () => {
    try {
      const response = await fetch(`http://thapabikal.free.nf/backend/?sortBy=${order}&q=${query}&slimit=${sLimit}&elimit=${eLimit}`);
      const data = await response.json();
      setPortfolio(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
        setLoading(false); // Set loading to false regardless of success or failure
    }
  };
  useEffect(() => {
    fetchData();
  }, [order, query, sLimit, eLimit]);

  const handelInfiniteScroll = async () => {
    setLoading(true);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setELimit(eLimit+4);
      }
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    if (props.pagination === true) {
      window.addEventListener("scroll", (e) => {
        handelInfiniteScroll();
      });
    }
  }, [props.pagination,sLimit, eLimit]);


  return (
    <>
      <div className="container">
        <p className="display-6 text-center tabTitle">My Portfolio</p>
        <SearchBar sortASC={orderASC} sortDESC={orderDESC} setQ={setQuery} /><br />
        <>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {
              Portfolio.Status === "ok" &&
              Portfolio.Data.map(data => (
                <div key={data.id} className="col">
                  <Cards data={data} />
                </div>
              ))
            }
          </div><br/>
          {loading&&
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <LazyCards />
              <LazyCards />
              <LazyCards />
              <LazyCards />
            </div>
          }<br/>

          {!props.pagination && <div className="container d-flex justify-content-center align-items-center">
            <NavLink className="btn btn-primary browseMoreBtn" to="/portfolio">Browse More +</NavLink>
          </div>}
        </>
      </div >
    </>
  );
}
export default Portfolio;