import React from 'react';
import HeaderLink from './HeaderLink';

interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const Menu: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <HeaderLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
