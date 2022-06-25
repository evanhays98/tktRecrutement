import React, {useState} from "react";
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";

interface Props {
    company: string;
    siren: number;
    category: string;
}

const CompanyLine = (props: Props) => {

    return (
        <Link to={'/companiesInfo'}>
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
                    <button>
                        <h3>{props.category}</h3>
                    </button>
                </div>
            </motion.div>
        </Link>
    );
};

export default CompanyLine;