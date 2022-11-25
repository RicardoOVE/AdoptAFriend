import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LandingPage  from './componentes/LandingPage';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <LandingPage />} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
