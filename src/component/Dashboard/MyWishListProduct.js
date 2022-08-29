import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const MyWishListProduct = ({ product, refetch }) => {
  const { _id, name, author, price, img, stock } = product;
  const handleAddToCart = (item) => {
    const AddToCart = {
      _id: _id,
      name: name,
      img: img,
      author: author,
      price: price,
      stock: stock,
    };
    fetch("https://the-online-book-shop.herokuapp.com/cartProduct", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddToCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleRemoveWishList = (id) => {
    const request = window.confirm("Are you sure you want to Remove");
    if (request) {
      fetch(`https://the-online-book-shop.herokuapp.com/wishList/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("yes delete");
            refetch();
          }
        });
    }
  };

  return (
    <div className="p-5 rounded border border-red-100">
      <div className="flex gap-3">
        <div>
          <img className="w-16" src={img} alt="" />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium text-gray-600">{name} </p>
              <p className="text-sm text-left text-gray-600">by {author}</p>
            </div>
            <button onClick={() => handleRemoveWishList(_id)}>
              <FontAwesomeIcon
                className="text-[#fa6a6a]"
                icon={faTrashCan}
              ></FontAwesomeIcon>
            </button>
          </div>

          <div className="mt-5">
            <div className="flex justify-between items-start">
              <h1 className="text-gray-600 align-text-bottom font-medium text-sm ">
                $ {price}
              </h1>
              <button onClick={() => handleAddToCart()}>
                <FontAwesomeIcon
                  className="text-[#27AE61]"
                  icon={faCartShopping}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWishListProduct;
