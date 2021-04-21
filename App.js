import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import ProfilePage from './ProfilePage'
import HomePage from './HomePage'


const App = () =>(
  <BrowserRouter>
    <Switch>
    <Route path = "/profile">
      <ProfilePage />
      </Route>
      <Route path = "/">
        <HomePage />
      </Route>


    </Switch>
  </BrowserRouter>
)

export default App
