import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

// add imports and code
import usersReducer from "./features/users/usersSlice";

const store = createStore(usersReducer);


ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById("root")
);
