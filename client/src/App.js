import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import SignUpPage from './components/RegisterPage';
import UserLogin from './components/UserLogin';
import LandingPage from './components/LandingPage';
import UserHome from './components/Userfolder/UserHome'
import UserAdd from './components/Userfolder/UserAdd'
import {Switch,Route} from "react-router-dom"




function App() {
  return (
   <>
    <Navbaar />
    <Switch>
    <Route exact path="/UserAdd/:id" component={UserAdd}/>
      <Route exact path="/UserProfile/:id" component={UserHome}/>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/UserLogin" component={UserLogin} />
      <Route exact path="/master" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
    </Switch>
   
   </>
  );
}

export default App;






