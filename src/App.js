import './App.css';
import { Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LevelDraw from './pages/LevelDraw';
import OfferingDraw from './pages/OfferingDraw';
import NFTDraw from './pages/NFTDraw';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App' style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/level-draw" exact component={LevelDraw} />
        <Route path="/offering-draw" exact component={OfferingDraw} />
        <Route path="/nft-draw" exact component={NFTDraw} />
      </Switch>
    </div>
  );
}

export default App;
