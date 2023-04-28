import React from 'react';
import {NavbarProps} from "./Navbar.props";

const Navbar = ({...props}: NavbarProps) : JSX.Element => {
    return (
        <nav {...props}>
            Navbar
        </nav>
    );
};

export default Navbar;