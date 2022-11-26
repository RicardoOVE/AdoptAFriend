import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage  from './componentes/LandingPage';
import NotFound from './componentes/NotFound';
import SignLogin from './componentes/SignLogin';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <LandingPage />} />
          <Route path="/signlogin" render={() => <SignLogin />} />
          <Route path="/notfound" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
