import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutUs from './componentes/AboutUs';
import AddNewPet from './componentes/AddNewPet';
import AllPets from './componentes/AllPets';
import CatCare from './componentes/CatCare';
import DogCare from './componentes/DogCare';
import Donate from './componentes/Donate';
import FavoritedPets from './componentes/FavoritedPets';

import LandingPage  from './componentes/LandingPage';
import NotFound from './componentes/NotFound';
import PetProfile from './componentes/PetProfile';
import SignLogin from './componentes/SignLogin';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <LandingPage />} />
          <Route path="/signlogin" render={() => <SignLogin />} />
          <Route path="/notfound" render={() => <NotFound />} />
          <Route path="/aboutus" render={() => <AboutUs />} />
          <Route path="/dogcare" render={() => <DogCare />} />
          <Route path="/catcare" render={() => <CatCare />} />
          <Route path="/donate" render={() => <Donate />} />
          <Route path="/allpets/:pettypes" render={() => <AllPets />} />
          <Route path="/addnewpet" render={() => <AddNewPet />} />
          <Route path="/pet/:id" render={() => <PetProfile />} />
          <Route path="/favorited" render={() => <FavoritedPets />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
