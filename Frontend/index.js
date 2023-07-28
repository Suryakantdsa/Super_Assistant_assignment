import ReactDOM from "react-dom/client";
import React from "react";
import App from "./app";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preview from "./src/Component/Preiview";
import { Provider } from "react-redux";
import store from "./src/Store/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
