import React, {useState} from "react";
import {motion} from 'framer-motion';

interface Props {
    image: any;
    name: string;
    mail: string;
}

const Account = (props: Props) => {
    return (
        <motion.div className="account"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="avatar">
                <img src={props.image} alt="user"/>
            </div>
            <div className="textContainer">
                <h2>{props.name}</h2>
                <h3>{props.mail}</h3>
            </div>
        </motion.div>
    );
}

export default Account;