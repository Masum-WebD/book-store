import React from "react";
import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="flex justify-evenly gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="CONTACT US" />
      <Item Links={RESOURCES} title="INFORMATION" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
