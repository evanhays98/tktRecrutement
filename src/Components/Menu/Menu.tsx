import React, {useState} from "react";
import {motion} from 'framer-motion';
import MenuItem from "./MenuItem/MenuItem";
import menuItemList from './constant';
import Account from "./Account/Account";

const Menu = () => {
    return (
        <motion.div className="menu"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="firstContainer">
                <div className="imageContainer">
                    <img src={require('../../Images/TKTLogo.svg').default} alt="tktLogo"/>
                </div>
                <div className="itemsContainer">
                    {menuItemList.menuItemList.map(res => (
                        <MenuItem {...res}/>
                    ))}
                </div>
            </div>
            <Account name={'Sophie L.'} mail={'sophie.l@gmail.com'} image={require('../../Images/Icons/add.svg').default}/>
        </motion.div>
    );
};

export default Menu;