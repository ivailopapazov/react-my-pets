import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
import CreatePet from './components/CreatePet/CreatePet';
import DemoPage from './components/Demo';
import './App.css';

function App() {
  return (
    <div className="container">
        <Header />

        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories/:category" component={Categories} />
          <Route path="/pets/details/:petId" exact component={PetDetails} />
          <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
          <Route path="/pets/create" component={CreatePet} />
          <Route path="/pets/:petId/edit" component={EditPet} />

          <Route path="/demo" component={DemoPage} />
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;
