import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <App />
      </MainLayout>
    </BrowserRouter>
  </Provider>
);
