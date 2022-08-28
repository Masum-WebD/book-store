import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./component/Contact/About/About";
import Contact from "./component/Contact/Contact";
import TermPolicy from "./component/Contact/TermCondition/TermPolicy";
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import ResetPass from "./component/ResetPass";
import Signup from "./component/Signup";
import SingleProductDetails from "./component/SingleProductDetails";
import Footer from "./share/Footer/Footer";
import Dashboard from "./component/Dashboard/Dashboard";
import MyOrders from "./component/Dashboard/MyOrders";
import MyProfile from "./component/Dashboard/MyProfile";
import AddToCart from "./component/AddToCart/AddToCart";
import ErrorPage from "./component/ErrorPage";
import Shop from "./component/Shop";
import StartFromTop from "./component/StartFromTop";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Ebook from "./component/Dashboard/Ebook";
import MyWishlist from "./component/Dashboard/MyWishlist";
import MyReview from "./component/Dashboard/MyReview";
import AddProduct from "./component/Dashboard/AddProduct";
import AllUsers from "./component/Dashboard/AllUsers";
import ManageALLOrder from "./component/Dashboard/ManageALLOrder";
import HomePopUp from "./component/Contact/PopUp/HomePopUp";
import UiPayment from "./Payment/UiPayment";
import DashboardDetails from "./component/Dashboard/DashboardDetails/DashboardDetails";
import ProductList from "./component/Dashboard/ProductsDetails/ProductList";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <HomePopUp></HomePopUp>
      <StartFromTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/term" element={<TermPolicy />} />
          <Route path="/offer" element={<HomePopUp />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/all-products" element={<Shop />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardDetails />}></Route>
            <Route path="myAccount" element={<MyProfile />}></Route>
            <Route path="myEbook" element={<Ebook></Ebook>}></Route>
            <Route path="order" element={<MyOrders />}></Route>
            <Route path="myReview" element={<MyReview></MyReview>}></Route>
            <Route
              path="addProduct"
              element={<AddProduct></AddProduct>}
            ></Route>
            <Route path="productList" element={<ProductList />}></Route>
            <Route path="manageUsers" element={<AllUsers></AllUsers>}></Route>
            <Route
              path="manageOrders"
              element={<ManageALLOrder></ManageALLOrder>}
            ></Route>
            <Route path="wishlist" element={<MyWishlist></MyWishlist>}></Route>
          </Route>
          <Route path="/create-new-account" element={<Signup />} />
          <Route path="/reset-your-password" element={<ResetPass />} />
          <Route path="/book/:bookId" element={<SingleProductDetails />} />
          <Route path="/addToCart" element={<AddToCart />} />
          <Route path="/paymentUi" element={<UiPayment />} />
        </Routes>
      </StartFromTop>

      <MessengerCustomerChat
        pageId="107580278651104"
        appId="5213313418754051"
      />
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
