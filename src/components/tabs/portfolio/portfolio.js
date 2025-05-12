import "./portfolio.css"
import Cards, { LazyCards } from "../../cards/cards";
import SearchBar from "../../searchBar/searchbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Portfolio(props) {
  let response = {
    "Status": "ok",
    "warning": "None",
    "Data": [

      {
        "id": "8",
        "userName": "bikalthapa",
        "repoName": "ssbss_official",
        "title": "Full Stack SSBSS website with online results.",
        "description": "",
        "thumbnail": require("../../../Images/project_img/ssbss_official.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "1",
        "userName": "bikalthapa",
        "repoName": "chess-game",
        "title": "Chess Empire game in react js.",
        "description": "",
        "thumbnail": require("../../../Images/project_img/chess_game.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "2",
        "userName": "bikalthapa",
        "repoName": "quiz_app_react",
        "title": "Quiz Game in react js.",
        "description": "",
        "thumbnail": require("../../../Images/project_img/quiz-app-react.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "3",
        "userName": "bikalthapa",
        "repoName": "tic-tac-toe",
        "title": "Tic Tac Toe Game",
        "description": "",
        "thumbnail": require("../../../Images/project_img/tic-tac-toe.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "4",
        "userName": "bikalthapa",
        "repoName": "analog-clock",
        "title": "Real Time Analog Clock in JS.",
        "description": "",
        "thumbnail": require("../../../Images/project_img/analog_clock.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "5",
        "userName": "bikalthapa",
        "repoName": "css-heart",
        "title": "CSS heartbeat animation using keyframes.",
        "description": "",
        "thumbnail": require("../../../Images/project_img/heart_beat_animation.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "6",
        "userName": "bikalthapa",
        "repoName": "scientific-calculator",
        "title": "Scientific Calculator using HTML",
        "description": "",
        "thumbnail": require("../../../Images/project_img/scientific_calculator.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      },
      {
        "id": "7",
        "userName": "bikalthapa",
        "repoName": "temperature-converter",
        "title": "Temperature Converter into three units.",
        "description": "",
        "thumbnail": require("../../../Images/project_img/temperature_converter.png"),
        "uploadDate": "2024-2-3",
        "demoLink": "",
        "srcLink": ""
      }
    ]
  };
  const [Portfolio, setPortfolio] = useState(response);
  const [loading, setLoading] = useState(false); // Initialize as true


  // function orderASC() {
  //   setOrder("ASC");
  // };
  // function orderDESC() {
  //   setOrder("DESC");
  // };
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`http://thapabikal.free.nf/backend/?sortBy=${order}&q=${query}&slimit=${sLimit}&elimit=${eLimit}`);
  //     const data = await response.json();
  //     setPortfolio(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //       setLoading(false); // Set loading to false regardless of success or failure
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [order, query, sLimit, eLimit]);

  // const handelInfiniteScroll = async () => {
  //   setLoading(true);
  //   try {
  //     if (
  //       window.innerHeight + document.documentElement.scrollTop + 1 >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       setELimit(eLimit+4);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }finally{
  //     setLoading(false);
  //   }
  // };

  // useEffect(()=>{
  //   if (props.pagination === true) {
  //     window.addEventListener("scroll", (e) => {
  //       handelInfiniteScroll();
  //     });
  //   }
  // }, [props.pagination,sLimit, eLimit]);


  return (
    <>
      <div className="container">
        <p className="display-6 text-center tabTitle">My Portfolio</p>
        <SearchBar /><br />
        <>
          <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
            {
              Portfolio.Status === "ok" &&
              Portfolio.Data.map(data => (
                <div key={data.id} className="col">
                  <Cards data={data} />
                </div>
              ))
            }
          </div><br />
          {loading &&
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <LazyCards />
              <LazyCards />
              <LazyCards />
              <LazyCards />
            </div>
          }<br />

          {!props.pagination && <div className="container d-flex justify-content-center align-items-center">
            <NavLink className="btn btn-primary browseMoreBtn" to="/portfolio">Browse More +</NavLink>
          </div>}
        </>
      </div >
    </>
  );
}
export default Portfolio;