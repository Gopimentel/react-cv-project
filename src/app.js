import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import configureStore from "./store/configStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { fetchUserData } from "./store/actions/userDataActions";

const store = configureStore();

let rendering = true;
const renderApp = () => {
  const app = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

  if (rendering) {
    ReactDOM.render(app, document.getElementById("app"));
    rendering = false;
  }
};

store.dispatch(fetchUserData())
.then((userData) => {
    renderApp();
    rendering = false;
}).catch((e)=>{
    ReactDOM.render(<div>ERROR {e} </div>, document.getElementById("app"));

    console.log(e);
});


ReactDOM.render(<div>LOADING .... </div>, document.getElementById("app"));
