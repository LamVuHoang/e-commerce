import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store";
import RouterPage from "./Components/RouterPage";

const getAppElement = document.getElementById("app")!;
const root = ReactDOM.createRoot(getAppElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterPage />
        </Provider>
    </React.StrictMode>
);
