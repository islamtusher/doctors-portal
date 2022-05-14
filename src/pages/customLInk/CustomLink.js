import React from 'react';
import './CustomLink.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            className={`link ${ match ? "active" : "" }`}
            to={to}
        >
            {children}
        </Link>
    );
};

export default CustomLink;