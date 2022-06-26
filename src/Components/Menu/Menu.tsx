import React, {useState} from "react";
import {motion} from 'framer-motion';
import MenuItem from "./MenuItem/MenuItem";
import menuItemList from './constant';
import Account from "./Account/Account";
import useWindowDimensions from "../../Utils/WindowsDimension";


interface Props {
    displayMenu: boolean;
}

const Menu = (props: Props) => {

    const {height, width} = useWindowDimensions();

    const [animationMenu, setAnimationMenu] = useState({})

    return (
        <motion.div className="menu"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            {props.displayMenu &&
            <motion.div className="menuContainer">
                <div className="imageContainer">
                    <img src={require('../../Images/TKTLogo.svg').default} alt="tktLogo"/>
                </div>
                <div className="arrowContainer"
                     onClick={() => {
                         setAnimationMenu({right: 0})
                         console.log('click')
                     }}>
                    <img src={require('../../Images/Icons/menu-scale.svg').default} alt="arrowLeft"/>
                </div>
            </motion.div>
            }
            <motion.div className="contentMenu"
                        initial={{}}
                        animate={width > 950 ? {} : animationMenu}
                        transition={{duration: .5}}>
                <div className="firstContainer">
                    <div className="arrowContainer"
                         onClick={() => {
                             setAnimationMenu({right: -width})
                             console.log('click')
                         }}>
                        <img src={require('../../Images/Icons/cancel.svg').default} alt="arrowLeft"/>
                    </div>
                    <div className="imageContainer">
                        <img src={require('../../Images/TKTLogo.svg').default} alt="tktLogo"/>
                    </div>
                    <div className="itemsContainer">
                        {menuItemList.menuItemList.map((res, num: number) => (
                            <MenuItem key={`Menu${num}`} {...res}/>
                        ))}
                    </div>
                </div>
                <Account name={'Sophie L.'} mail={'sophie.l@gmail.com'}
                         image={require('../../Images/Icons/add.svg').default}/>
            </motion.div>
        </motion.div>
    );
};

export default Menu;