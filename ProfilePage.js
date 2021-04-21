import Sidebar from "./Sidebar"
import './App.css'

function ProfilePage() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>
          Here is your profile!
        </h1>
        <img src = {require('./Jeffpfp.JPG')} alt = "Profile"/>
        <ul> <li>Name: Jeffrey</li> <li>Grade: 11</li> <li>Academic Areas of Interest: Science and Math</li> 
        <li>Current Modules in Focus: Extracurricular Opportunities for Science, Math Competitions</li>
        </ul>
      <div id="App">
      <Sidebar />
      <div id="page-wrap">
        <p>Check out the sidebar to navigate</p>
      </div>
    </div>
      </header>
    </div>
  );
}

export default ProfilePage
