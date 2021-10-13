import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
