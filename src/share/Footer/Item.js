import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 text-gray-900 text-left font-semibold">{title}</h1>
      {Links.map((link) => (
        <li className="text-left" key={link.name}>
          <a
            className=" hover:text-purple-600 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
