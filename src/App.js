import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/Cart/ShoppingCart";
import { Route, Switch } from "react-router-dom";
import { UrlHomeRoute } from "./components/Services/UrlService";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={UrlHomeRoute} exact><Home /></Route>
      </Switch>
      <ShoppingCart />
      <Footer />
    </>
  );
}

export default App;
