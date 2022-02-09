import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomLinks = ({getNavLinksItem}) => {
  return (
      getNavLinksItem.map(link=>(
        <li>
          <NavLink to={link.to}>
          {link.name}
          </NavLink>
        </li>
      ))
  );
};

export default BottomLinks;