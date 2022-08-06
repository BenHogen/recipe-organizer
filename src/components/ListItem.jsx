// import { useState, useEffect } from "react";
// import clsx from "clsx";

const ListItem = ({ id, value, children, ...props }) => {
  return (
    <li key={id} className="vertical-list__item" {...props}>
      {children}
    </li>
  );
};

export default ListItem;
