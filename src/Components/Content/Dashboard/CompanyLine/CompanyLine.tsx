import React, {useState} from "react";
import {motion} from 'framer-motion';

interface Props {
    company: string;
    siren: number;
    category: string;
}

const CompanyLine = (props : Props) => {
    return (
        <motion.div className="companyLine"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>
            <div className="case">
                <h3>{props.company}</h3>
            </div>
            <div className="case">
                <h3>{props.siren}</h3>
            </div>
            <div className="case">
                <div className="btn">
                    <h3>{props.category}</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default CompanyLine;