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

import AddProducts from "./component/Dashboard/AddProducts";
import Dashboard from "./component/Dashboard/Dashboard";
import ManageAllOrder from "./component/Dashboard/ManageAllOrder";
import MyOrders from "./component/Dashboard/MyOrders";
import MyProfile from "./component/Dashboard/MyProfile";
import Payment from "./component/Dashboard/Payment";
import User from "./component/Dashboard/User";
import AddToCart from "./component/AddToCart/AddToCart";
import ErrorPage from "./component/ErrorPage";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header></Header>

      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/term" element={<TermPolicy />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MyProfile />}></Route>
            <Route path="user" element={<User></User>}></Route>
            <Route path="order" element={<MyOrders />}></Route>
            <Route path="manageOrders" element={<ManageAllOrder />}></Route>
            <Route path="addProduct" element={<AddProducts />}></Route>
            <Route path="payment" element={<Payment />}></Route>
          </Route>
          <Route path="/create-new-account" element={<Signup />} />
          <Route path="/reset-your-password" element={<ResetPass />} />
          <Route path="/book/:bookId" element={<SingleProductDetails />} />
          <Route path='/addToCart' element={<AddToCart />} />
        </Routes>
      </QueryClientProvider>


      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
