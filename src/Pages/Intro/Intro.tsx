import React, {useState} from "react";
import {motion} from 'framer-motion';
import Menu from "../../Components/Menu/Menu";
import DashBoard from "../../Components/Content/Dashboard/DashBoard";

const Intro = () => {
    return (
        <motion.div className="intro"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <Menu />
            <DashBoard />
        </motion.div>
    );
};

export default Intro;