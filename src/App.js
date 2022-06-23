import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/Cart/ShoppingCart";
import { Route, Switch } from "react-router-dom";
import {
  UrlCarrerRoute,
  urlCategoryRoute,
  urlCheckoutRoute,
  UrlContactRoute,
  UrlHomeRoute,
  UrlOfferRoute,
  urlProductDetails,
  urlReturnPolicyRoute,
  UrlReviewRoute,
  urlSubCategoryRoute,
  UrlAboutRoute,
  urlPrivacyPolicyRoute,
  urlTermsConditionsRoute,
  urlProfileRoute,
  urlNotFoundRoute,
  urlNotificationRoute,
} from "./components/Services/UrlService";
import SpecialOffer from "./pages/SpecialOffer";
import ReviewPage from "./pages/ReviewPage";
import CarrerPage from "./pages/CarrerPage";
import ContactPage from "./pages/ContactPage";
import CategoryWiseProductPage from "./pages/CategoryWiseProductPage";
import SubCategoryWiseProPage from "./pages/SubCategoryWiseProPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import CheckoutPage from "./pages/CheckoutPage";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TremsCondition from "./pages/TremsCondition";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import NotificationPage from "./pages/NotificationPage";

function App() {
  return (
    <div className="main-body-overflow">
      <Header />
      <main id="common-pading-page">
        <Switch>
          <Route path={UrlHomeRoute()} exact>
            <Home />
          </Route>
          <Route path={UrlOfferRoute()} exact>
            <SpecialOffer />
          </Route>
          <Route path={UrlAboutRoute()} exact>
            <About />
          </Route>
          <Route path={UrlReviewRoute()} exact>
            <ReviewPage />
          </Route>
          <Route path={UrlCarrerRoute()} exact>
            <CarrerPage />
          </Route>
          <Route path={UrlContactRoute()} exact>
            <ContactPage />
          </Route>
          <Route path={urlCategoryRoute() + ":id"}>
            <CategoryWiseProductPage />
          </Route>
          <Route path={urlSubCategoryRoute() + ":id"}>
            <SubCategoryWiseProPage />
          </Route>
          <Route path={urlProductDetails() + ":id"}>
            <ProductDetailsPage />
          </Route>
          <Route path={urlReturnPolicyRoute()}>
            <ReturnPolicyPage />
          </Route>
          <Route path={urlPrivacyPolicyRoute()}>
            <PrivacyPolicy />
          </Route>
          <Route path={urlTermsConditionsRoute()}>
            <TremsCondition />
          </Route>
          <Route path={urlCheckoutRoute()}>
            <CheckoutPage />
          </Route>
          <Route path={urlProfileRoute()}>
            <Profile />
          </Route>
          <Route path={urlNotificationRoute()}>
            <NotificationPage />
          </Route>
          <Route path={urlNotFoundRoute()}>
            <ErrorPage />
          </Route>
        </Switch>
      </main>
      <ShoppingCart />
      <Footer />
    </div>
  );
}

export default App;
