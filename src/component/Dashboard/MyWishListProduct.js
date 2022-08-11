import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyWishListProduct = ({ product, handleRemove }) => {

  const { name, author, price, img, _id } = product;
  console.log(product)

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
            <button onClick={() => handleRemove(_id)}>
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
              <button>
              <FontAwesomeIcon
                className="text-[#27AE61]"
                icon={faCartShopping }
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
