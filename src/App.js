import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/Cart/ShoppingCart";
import { Route, Switch } from "react-router-dom";
import { UrlCarrerRoute, UrlContactRoute, UrlHomeRoute, UrlOfferRoute,UrlReviewRoute } from "./components/Services/UrlService";
import SpecialOffer from "./pages/SpecialOffer";
import ReviewPage from "./pages/ReviewPage";
import CarrerPage from "./pages/CarrerPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="main-body-overflow">
      <Header />
      <main id="common-pading-page">
      <Switch>
        <Route path={UrlHomeRoute()} exact><Home /></Route>
        <Route path={UrlOfferRoute()} exact><SpecialOffer /></Route>
        <Route path={UrlReviewRoute()} exact><ReviewPage /></Route>
        <Route path={UrlCarrerRoute()} exact><CarrerPage /></Route>
        <Route path={UrlContactRoute()} exact><ContactPage /></Route>
      </Switch>
      </main>

      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default App;
