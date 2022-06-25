import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import axios from "axios";
import {Link} from "react-router-dom";

interface Company {

}

const DashBoardCompany = () => {


    /*const getCompanies = async () => {
        await axios.get('https://test.wertkt.com/api/biz/', {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            }
        }).then((res) => {
            console.log(res)
            if (res.status !== 200)
                return;
            setCompanies(res.data)
        })
            .catch(error => {
                console.log(error.message)
                return;
            });
    }

    useEffect(() => {
        getCompanies()
    }, [])*/

    return (
        <motion.div className="dashBoardCompany"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>

            <div className="header">
                <Link to={'/'}>
                    <div className="arrowContainer">
                        <img src={require('../../../Images/Icons/arrow-left.svg').default} alt="arrowLeft"/>
                    </div>
                </Link>
                <div className="textContainer">
                    <h1>Welcome on TKT dashboard!</h1>
                    <h2>n° Siren 113996185</h2>
                </div>
            </div>
            <div className="content">
                <div className="case">
                    <h1>Chiffre d’affaire</h1>
                </div>
                <div className="case">
                    <h1>EBITDA</h1>
                </div>
                <div className="case">
                    <h1>Loss</h1>
                </div>
                <div className="case">
                    <h1>Margin</h1>
                </div>
            </div>
        </motion.div>
    );
};

export default DashBoardCompany;