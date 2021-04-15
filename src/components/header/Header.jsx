import React from 'react';
import Button from "../button/Button";
import './header.css'

const Header = ({title,handleShowAdd,show}) => {


    return (
        <header className='header'>
            <h1 className="display-4">{title}</h1>
            <Button show={show}  handleClick={handleShowAdd}/>
        </header>
    );
};

export default Header;