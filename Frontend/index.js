import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preview from "./src/Component/Preiview";
import { Provider } from "react-redux";
import store from "./src/Store/store";
import Body from "./src/Component/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
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
