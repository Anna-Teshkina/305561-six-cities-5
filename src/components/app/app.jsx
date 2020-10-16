import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import LoginScreen from "../login-screen/login-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {
  const {offerCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offerCount={offerCount} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path="/offer/:id?">
          <OfferScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
};

export default App;
