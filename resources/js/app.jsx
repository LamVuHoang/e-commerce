import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./Store/Reducers";
import RouterPage from "./Components/RouterPage";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterPage />
        </Provider>
    </React.StrictMode>
);
