import React, {useState} from "react";
import {motion} from 'framer-motion';
import Menu from "../../Components/Menu/Menu";
import DashBoard from "../../Components/Content/Dashboard/DashBoard";
import DashBoardCompany from "../../Components/Content/DashBoardCompany/DashBoardCompany";

const CompanyInfo = () => {
    return (
        <motion.div className="CompanyInfo"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <Menu />
            <DashBoardCompany />
        </motion.div>
    );
};

export default CompanyInfo;