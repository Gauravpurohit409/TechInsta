import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import Discussions from './components/Discussions';
import Jobs from './components/Jobs';

function App() {
  return (
  <Router>
    <div id= "navigationBar">
      <nav >
        <ul id = "menubar">
          <div id= "links">
          <li>
            <Link to="/"><i className="fa fa-product-hunt fa-2x logo"></i></Link>
          </li>
          <li className="search">
            <div >
              <input type="text" placeholder="Discover your next favourite thing..." size="25"/>
            </div>
          </li>
          <li>
            <Link to="/discussions">Discussions</Link>
          </li>
          <li>
            <Link to="/deals">Deals</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          </div>
          <div id="buttongroup">
              <li >
                <button className="login">LOG IN</button>
              </li>
              <li >
                <button className="signup">SIGN UP</button>
              </li>
          </div>
        </ul>
      </nav>
      
    </div>
   <div id= "justToClearFloat">
     </div>
    <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
       
          <Route path="/discussions">
            <Discussions />
          </Route>

          <Route path="/jobs">
            <Jobs />
          </Route> 

    </Switch>
  </Router>
  );
}

export default App;
