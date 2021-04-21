import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App';
import MainPage from './components/MainPage';
import ProfilePage from './ProfilePage';
import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

 function routes(){
   return(
    <Route exact path="/" component={App}>
    {/* <IndexRoute component={MainPage} /> */}
    <Route path="/profile" component={ProfilePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
    </Route>
   )
 }

 export default routes;