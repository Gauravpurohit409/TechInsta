import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import Discussions from './components/Discussions';
import Jobs from './components/Jobs';

function App() {
  return (
  <Router>
    <div>
      <nav id = "menubar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="search">
            <div >
              <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.383 10.347a5.796 5.796 0 11.965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 100-8.863 4.432 4.432 0 000 8.863z" >
                  </path>
              </svg>
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

          <li className="buttons">
            <button>LOG IN</button>
          </li>
          <li className = "buttons">
            <button>SIGN UP</button>
          </li>
        </ul>
      </nav>
      
    </div>
   <div id= "justToClearFloat">
     </div>
    <br/>
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
