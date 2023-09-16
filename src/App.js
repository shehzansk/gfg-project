import DarkMode from "./DarkMode"
import icon1 from './icon1.png';
import domain1 from './domain1.png';
import domain2 from './domain2.png';
import domain3 from './domain3.png';
import domain4 from './domain4.png';
import imagetext1 from './image-text1.png';
import imagetext2 from './image-text2.gif';
import imagetext3 from './image-text3.png';
import tele from './tele.png';
import insta from './insta.png';
import linkedIn from './linkedIn.png';


import './App.css';

function App() {
  return (
  <div className='dark'>
  <div className="navBar">
    <div id="logo">
    <a href="/"><img id="icon1" src = {icon1}></img></a>
    </div>
    <div className="Links">
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Contact</a></li>
          </ul>  
      </nav>
      <div> <DarkMode /> </div>    
    </div>
  </div>
  

  <div id="flexpeople">
    <div>
  <h1 id="people-1">GEEKS FOR GEEKS</h1>
  <h2 id="people-2">RCOEM STUDENT CHAPTER</h2>
  <h2 id="people-3">A Community for <br ></br>RCOEM Students</h2>
  </div>
  </div>

  <div id="animatedBox">
    <h1>We Power Dreams<br></br>
    that help you develop </h1>
    <p class="animated">
      <div class="text1">Experience</div>
      <div class="text1">Skills</div>
      <div class="text1">Memories</div>
      <div class="text1">Experience</div>
    </p>
  </div>
  <div id="animatedDis">
  GeeksforGeeks Student Chapter RCOEM is a 
  university-based community chapters creating
   a coding culture for students interested in
    Computer Science and other core technical competencies
  </div>

  <div id="flexBox">
    <p id="getus">OUR DOMAIN</p>
  </div>
<div id="domain">
  <div id="flexBox">
    <img src={domain1}></img>
    <img src={domain2}></img>
  </div>

  <div id="flexBox">
    <img src={domain3}></img>
    <img src={domain4}></img>
  </div>
  </div>

  <div id="flexBox">
    <p id="getus">OUR IDEOLOGIES</p>
  </div>
  
  <div id="image-text-container1">
      <div>
        <p id="image-text-container1-p1">We believe that providing exposure to the students would help them to know new tech related innovations and help them to meet new tech enthusiast that would benefit them by gaining knowledge.</p>
      </div>
      <img id="image-text2" src = {imagetext2}></img>
  </div>

  <div id="image-text-container1">
      <img id="image-text1" src = {imagetext1}></img>
      <div id="image-text-container1-para">
        <p>In the GFG Students chapter our primary goal is to impart knowledge and build a large network of passionate developers, programmers, coders and learners in the field of computer science and we aim to achieve the same by providing a platform to students to learn, build and enhance their skills.</p>
      </div>
  </div>
  
  <div id="image-text-container1">
      <div>
        <p id="image-text-container1-p1">We aim to help students develop fine coding skills and reach the best of their potential. Grow students’ knowledge in the field in a peer-peer learning environment. Facilitate guidance and resources for internships, placement, and competitive exam preparation.</p>
      </div>
      <img id="image-text3" src = {imagetext3}></img>
  </div>


    <footer className="footer">
      <div id="footer-left">

        <div id="footer-flex">
          <div id="social">
            FOLLOW GFG RCOEM<br></br>
           <div> <a href="https://instagram.com/gfg_rcoem_chapter?igshid=YmMyMTA2M2Y=" target="_blank"><img src={insta}></img></a>
           <a href="https://www.linkedin.com/in/geeksforgeeks-rcoem-chapter-b6b4121bb/" target="_blank"><img src={linkedIn}></img></a>
           <a href="https://t.me/+e13Dtsr5kp1kMDll" target="_blank"><img src={tele}></img></a>
           </div>
          </div>
          <div>
          <hr color="black"></hr>
          </div>
          <div>
            Contact Us<br></br>
            <a href="https://www.gmail.com">gfgrcoem@rknec.edu</a>
          </div>
        </div>

        <hr color="black"></hr>

        <div id="flexBox">
        #GROWING-TOGETHER<br></br>
        &copy; All rights reserved by GFG, RCOEM
        </div>

      </div>

      <div className="footer-right">
        <hr color="white"/>
        Made with &#10084; by Shehzan Sk
      </div>
    </footer>
  </div>
  );
}

export default App;
