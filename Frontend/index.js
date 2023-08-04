import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/Store/store";
import Body from "./src/Component/Body";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
 
 
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <DndProvider backend={HTML5Backend}>
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
  </DndProvider>
);
