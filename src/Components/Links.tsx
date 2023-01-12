import React from 'react';
import { Link } from 'react-router-dom';
const links = [
  { name: 'Men', link: '/' },
  { name: 'Women', link: '/' },
  { name: 'Kids', link: '/' },
  { name: 'Collection', link: '/' },
];

const Links = ({ isFooter }: { isFooter?: boolean }) => {
  return (
    <div className="hidden sm:flex items-center w-6/12 md:w-5/12 justify-between uppercase font-bold ">
      {links.map((link, index) => (
        <div
          className={`item cursor-pointer text-sm md:text-base ${
            isFooter && 'text-white'
          }`}
          key={index}
        >
          <Link to={link.link}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
