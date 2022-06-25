import React, {useEffect, useState} from "react";
import {motion} from 'framer-motion';
import CompanyLine from "./CompanyLine/CompanyLine";
import axios from "axios";
import companiesList from './CompanyLine/constant';

interface Company {

}

const DashBoard = () => {

    const [companies, setCompanies] = useState<any>(companiesList.companiesList)

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
        <motion.div className="dashBoard"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>

            <div className="header">
                <h1>Welcome on TKT dashboard!</h1>
                <div className="filterContainer">
                    <input type="text"/>
                    <input type="text"/>
                </div>
            </div>
            <div className="content">
                <div className="titleListContainer">
                    <div className="title">
                        <h2>Company</h2>
                    </div>
                    <div className="title">
                        <h2>n° Siren</h2>
                    </div>
                    <div className="title">
                        <h2>category</h2>
                    </div>
                </div>
                {
                    companies.slice(0, 4).map((res: any, num: number) => (
                        <CompanyLine key={num} company={res?.name} category={res?.sector} siren={res?.siren}/>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default DashBoard;