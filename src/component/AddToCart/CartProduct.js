import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({ product }) => {
  const { bookName, bookAuthor, bookPrice, bookImage, bookQty, bookStock } =
    product;


  return (
    <div className="p-5 rounded border border-red-100">
      <div className="flex gap-3">
        <div>
          <img className="w-16" src={bookImage} alt="" />
        </div>
        <div className="w-full">


          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">{bookName} </p>
              <p className="text-sm">by {bookAuthor}</p>
            </div>
            <button>
              <FontAwesomeIcon className="text-[#fa6a6a]" icon={faTrashCan}></FontAwesomeIcon>
            </button>
          </div>


          <div className=" mt-5">
            <div className="flex justify-between items-start">
              <h1 className=" align-text-bottom font-medium text-sm ">$ {bookPrice}</h1>
              <select name="" id="" className="align-bottom mr-0 bg-white border border-red-100" >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
