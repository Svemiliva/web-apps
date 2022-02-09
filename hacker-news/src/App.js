import { Route, Redirect } from "react-router";
import { Header } from './Component/Header/Header';
import { Stories } from './Component/Stories/Stories';
import { Footer } from "./Component/Footer/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/home" component={Stories} />
      <Footer />
      <Redirect from="/" to="/home" />
    </div>
  );
}

export default App;
