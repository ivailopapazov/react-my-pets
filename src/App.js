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
import AdvancedTechniques2 from './components/AdvancedTechniques2/AdvancedTechniques';
import AdvancedTechniques3 from './components/AdvancedTechniques3/AdvancedTechniques';
import CustomErrorBoundary from './components/CustomErrorBoundary/CustomErrorBoundary';
import { auth } from './utils/firebase';
import './App.css';
import { useEffect, useState } from 'react';
import AuthContext from './contexts/AuthContext';
import isAuth from './hoc/isAuth';

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
      <AuthContext.Provider value={authInfo}>
        <Header />

        <CustomErrorBoundary>
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/categories/:category" component={Categories} />
            <Route path="/pets/details/:petId" exact component={PetDetails} />
            <Route path="/pets/details/:petId/edit" component={isAuth(EditPetDetails)} />
            <Route path="/pets/create" component={CreatePet} />
            <Route path="/pets/:petId/edit" component={EditPet} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" render={() => {
              auth.signOut();
              return <Redirect to="/" />
            }} />

            <Route path="/demo" component={DemoPage} />
            <Route path="/advanced-techniques" component={AdvancedTechniques} />
            <Route path="/advanced-techniques2" component={AdvancedTechniques2} />
            <Route path="/advanced-techniques3" component={AdvancedTechniques3} />
          </Switch>
        </CustomErrorBoundary>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
