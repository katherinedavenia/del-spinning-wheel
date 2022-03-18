import './App.css';
import { Switch, Route } from "react-router-dom";
import LevelDraw from './pages/LevelDraw';
import OfferingDraw from './pages/OfferingDraw';
import NFTDraw from './pages/NFTDraw';

const App = () => {
  return (
    <div className='App' style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <Switch>
        <Route path="/" exact component={OfferingDraw} />
        <Route path="/offering-draw" exact component={OfferingDraw} />
        <Route path="/level-draw" exact component={LevelDraw} />
        <Route path="/nft-draw" exact component={NFTDraw} />
      </Switch>
    </div>
  );
}

export default App;
