import './App.css';
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Switch, Route, Redirect } from "react-router-dom";
import { Authors } from './Components/Authors/Authors'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'
import { SingleBlog } from './Components/SingleBlog/SingleBlog';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/authors' component={Authors} />
        <Route exact path='/about' component={About} />
        <Route path='/posts/:id' component={SingleBlog} />
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
