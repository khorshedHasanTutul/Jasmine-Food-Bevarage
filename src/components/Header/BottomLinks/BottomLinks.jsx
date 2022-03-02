import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomLinks = ({getNavLinksItem}) => {
  return (
      getNavLinksItem.map(link=>(
        <li>
          <NavLink activeStyle={{color:"#FF1E1C"}} to={link.to} exact>
          {link.name}
          </NavLink>
        </li>
      ))
  );
};

export default BottomLinks;