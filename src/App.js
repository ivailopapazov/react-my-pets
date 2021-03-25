import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import DemoPage from './components/Demo';
import DemoFuncPage from './components/DemoFunc';
import './App.css';

function App() {
  return (
    <div className="container">
        <Header />

        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories/:category" component={Categories} />
          <Route path="/pets/details/:petId" component={PetDetails} />
          <Route path="/pets/create" component={CreatePet} />
          
          <Route path="/demo" component={DemoPage} />
          <Route path="/demo-func" component={DemoFuncPage} />
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;
