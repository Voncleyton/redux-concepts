import React from "react";
import { Provider } from "react-redux";
import Cart from "./pages/cart";
import Catalog from "./pages/catalog";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
