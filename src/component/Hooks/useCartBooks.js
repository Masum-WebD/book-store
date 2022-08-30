import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const useCartBooks = () => {
  const [cartProduct, setCartProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/cartProduct?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCartProduct(data);
          setIsLoading(!isLoading);
        });
    }
  }, [user, isLoading]);

  return [cartProduct, setCartProduct];
};
export default useCartBooks;
