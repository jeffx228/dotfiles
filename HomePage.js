import Tabs from "./components/Tabs"
import Sidebar from "./Sidebar"
import './App.css'
import TextFileReader from "./react-text-file-reader.js"

function HomePage() {

  var myTxt = require("./content.txt")
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>
          Welcome to Mission Mentor!
        </h1>
        <img src = {require('./LogoMM-Jan2021.jpg')} alt = "Logo"/>
      <div id="App">
      <Sidebar />
      <div id="page-wrap">
        <p>Check out the sidebar to navigate</p>
      </div>
    </div>
      </header>
      <h1>Tabs Demo</h1>
     <Tabs> 
       <div label="Learn"> 
	      <TextFileReader
		    txt={myTxt}
	      />
         See ya later, <em>Alligator</em>! 
       </div> 
       <div label="Compete"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Summer"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Scholarships"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default HomePage
