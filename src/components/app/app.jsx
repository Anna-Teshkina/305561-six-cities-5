import React from "react";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offerCount} = props;

  return (
    <MainScreen offerCount={offerCount} />
  );
};

export default App;
