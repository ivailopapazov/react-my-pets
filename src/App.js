import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
import CreatePet from './components/CreatePet/CreatePet';
import DemoPage from './components/Demo';
import AdvancedTechniques from './components/AdvancedTechniques/AdvancedTechniques';
import { auth } from './utils/firebase';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };

  return (
    <div className="container">
      <Header {...authInfo} />

      <Switch>
        <Route path="/" exact render={props => <Categories {...props} {...authInfo} />} />
        <Route path="/categories/:category" render={props => <Categories {...props} {...authInfo} />} />
        <Route path="/pets/details/:petId" exact render={props => <PetDetails {...props} {...authInfo} />} />
        <Route path="/pets/details/:petId/edit" render={props => <EditPetDetails {...props} {...authInfo} />} />
        <Route path="/pets/create" render={props => <CreatePet {...props} {...authInfo} />} />
        <Route path="/pets/:petId/edit" render={props => <EditPet {...props} {...authInfo} />} />
        <Route path="/login" render={props => <Login {...props} {...authInfo} />} />
        <Route path="/register" render={props => <Register {...props} {...authInfo} />} />
        <Route path="/logout" render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }} />

        <Route path="/demo" component={DemoPage} />
        <Route path="/advanced-techniques" component={AdvancedTechniques} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
