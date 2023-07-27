import React from "react";
import Body from "./src/Component/Body";
import { Provider } from "react-redux";
import store from "./src/Store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
