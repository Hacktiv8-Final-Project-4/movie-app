import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app/App.jsx";
import Search from "./pages/Search";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: ":searchParams",
    element: <Search />
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
