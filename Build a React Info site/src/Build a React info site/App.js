import "./style.css"
import Navbar from "./Navbar";
import Main from "./Main";
/*const page = (
<div className="container">
  <nav className="head">
    <div className="firstpart">
      <img src={image} />
      <h3>ReactFacts</h3>
    </div>
    <h4>React Course - Project 1</h4>
  </nav>
  <h1>Fun facts about React</h1>
  <ul>
    <li><span>Was first released in 2013</span></li>
    <li><span>Was first released in 2013</span></li>
    <li><span>Was first released in 2013</span></li>
    <li><span>Was first released in 2013</span></li>
    <li><span>Was first released in 2013</span></li>  
  </ul>
</div>

)*/


function App() {
  return ( 
    <div className="container">
        <Navbar />
        <Main />
    </div>
  )
}
export default App;


