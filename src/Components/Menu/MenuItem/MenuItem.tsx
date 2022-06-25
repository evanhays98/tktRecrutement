import React, {useState} from "react";
import {motion} from 'framer-motion';

interface Props {
    image: any;
    title: string;
    inUse: boolean;
}

const MenuItem = (props: Props) => {
    return (
        <motion.div className="menuItem"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    style={props.inUse ? {backgroundColor: '#E8E9FA'} : {}}>
            <div className="logoContainer">
                <img src={props.image} alt="logo"/>
            </div>
            <h3>{props.title}</h3>
        </motion.div>
    );
}

export default MenuItem;