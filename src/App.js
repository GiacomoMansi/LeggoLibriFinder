 import "./App.css";
 import leggoLibri from "../src/img/LEGGO LIBRI.png";
 import bloccoLego from "../src/img/lego.png";
 import superHero from "../src/img/superHero.png";
 import FinderApp from "./FinderApp";



  function App() {
   return (
    
     <>
       <div className="main_part">
         <img className="logo" src={leggoLibri} alt="logo"></img>
        
         <img className="lego_build" src={bloccoLego} alt=""></img>
       </div>

       

       <div className="second_part">
       <img className="super_hero" src={superHero} alt="SuperHeroes"></img>
       <FinderApp></FinderApp>

       </div>
       <div className="curve" style={{ height: "150px", overFlow: "hidden" }}>
         <svg
           viewBox="0 0 500 150"
           preserveAspectRatio="none"
           style={{ height: "100%", width: "100%" }}
         >
           <path
             d="M0.00,49.98 C149.99, 150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
             style={{ stroke: "none", fill: "#d00000" }}
           ></path>
         </svg>
       </div>
       <div className="footer">
         Developed by{" "}
         <a
           rel="noreferrer"
           target="_blank"
           href="https:giacomomansi.github.io"
         >
           Giacomo Mansi
         </a>
         with Google API
       </div>
     </>
   );
 }

 export default App;
