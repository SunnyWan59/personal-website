import './App.css';
import { FaGithub} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div class="topnav">

        <a href="#about">ABOUT</a>
        <a href="#contact">PORTFOLIO</a>
        <a href="#contact">BLOG</a>
        <a href="#contact">RESUME</a>
      </div>
      <div className='body'>
        <div className='text'>
            <h1>Sunny Wan</h1>
            <br></br>
            <p>Mathematics and Computer Science Student at University of Toronto</p>
            <br></br>
            <a href="https://github.com/SunnyWan59" className='github'><FaGithub/></a>
        </div>
        <div className = 'picture'>
          <img src={require('./pfp2.jpg')} alt ='profile picture' width="400" height="350"></img>
        </div>


      </div>
    </div>
  );
}

export default App;
