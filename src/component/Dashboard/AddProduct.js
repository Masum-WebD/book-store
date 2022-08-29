import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "https://the-online-book-shop.herokuapp.com/products";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product added successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="my-5 border-2 border-t-4 border-t-purple-600 rounded-md mx-10 p-5">
        <h2 className="text-2xl font-bold text-gray-700">Add A Product</h2>
        <h3 className="text-xl text-gray-500">
          Here you can add a product to the shop
        </h3>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex justify-between gap-5 my-10 lg:my-0">
            <div className="card card-side flex flex-col p-6 border-l-2 border-l-purple-400 rounded-md border-y-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Name
                  </span>
                </label>
                <input
                  type="name"
                  placeholder="Product name"
                  className="input input-bordered border-gray-400  w-full max-w-xs"
                  required
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Author Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Input author name"
                  className="input input-bordered border-gray-400  w-full max-w-xs"
                  required
                  {...register("author", {
                    required: {
                      value: true,
                      message: "author is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Input category"
                  className="input input-bordered border-gray-400  w-full max-w-xs"
                  required
                  {...register("category", {
                    required: {
                      value: true,
                      message: "category is Required",
                    },
                  })}
                />
              </div>
            </div>
            
            <div className="card p-6  border-l-2 border-l-purple-400 rounded-md border-y-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold  text-gray-600">
                    Language
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Input language"
                  className="input input-bordered border-gray-400  w-full max-w-xs"
                  required
                  {...register("language", {
                    required: {
                      value: true,
                      message: "language is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold  text-gray-600">
                    stock
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="in stock"
                  className="input input-bordered border-gray-400  w-full max-w-xs"
                  required
                  {...register("stock", {
                    required: {
                      value: true,
                      message: "Stock is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold  text-gray-600">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="price"
                  required
                  className="input input-bordered border-gray-400  w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                />
              </div>
            </div>
            
            <div className="card card-side flex flex-col border-1 p-5  border-l-2 border-l-purple-400 rounded-md border-y-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold  text-gray-600">
                    Summary
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered border-gray-400  overflow-auto w-full max-w-xs"
                  required
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description is Required",
                    },
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold  text-gray-600">
                    Image
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered border-gray-400 w-full max-w-xs"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Image is Required",
                    },
                  })}
                />
              </div>
              <input
                className="btn my-10 w-96 bg-purple-500 text-white"
                type="submit"
                value="Add Product"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
