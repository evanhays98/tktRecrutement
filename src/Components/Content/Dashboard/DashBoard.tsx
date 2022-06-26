import React, {useEffect, useRef, useState} from "react";
import {motion} from 'framer-motion';
import CompanyLine from "./CompanyLine/CompanyLine";
import axios from "axios";
import companiesList from './CompanyLine/constant';

interface Company {

}

const DashBoard = () => {

    const [companies, setCompanies] = useState<any>()
    const [searchCompanies, setSearchCompanies] = useState<any>(companies);
    const [searchName, setSearchName] = useState('')
    const [searchCategory, setSearchCategory] = useState('')

    const getCompanies = async () => {
        await axios.get('https://test.wertkt.com/api/biz/', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            }
        }).then((res) => {
            if (res.status !== 200)
                return;
            setCompanies(res.data)
            setSearchCompanies(res.data);
        })
            .catch(error => {
                return;
            });
    }

    useEffect(() => {
        getCompanies()
    }, [])

    const searchItemByName = (name: string, category: string) => {
        name = name.toLowerCase();
        category = category.toLowerCase()

        const finalResult: string[] = [];
        companies?.forEach((item: any) => {
            if (
                (item.name.toLowerCase().indexOf(name) !== -1 ||
                    item.name.includes(name))
                &&
                (item.sector.toLowerCase().indexOf(category) !== -1 ||
                    item.sector.includes(category))
            ) {
                finalResult.push(item);
            }
        });
        setSearchCompanies(finalResult);
    };

    useEffect(() => {

        const ok = async () => {
            await searchItemByName(searchName, searchCategory)
        }
        ok()
    }, [searchName, searchCategory])

    return (
        <motion.div className="dashBoard"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}>

            <div className="header">
                <div className="titleContainer">
                    <h1>Welcome on TKT dashboard!</h1>
                </div>
                <div className="filterContainer">
                    <div className="inputContainer">
                        <input id='company' type="text"
                               onChange={(e) => {
                                   setSearchName(e.target.value)
                               }}
                               className={searchName.length != 0 ? 'has-value' : ''}
                        />
                        <label htmlFor='company'>
                            Company
                        </label>
                    </div>
                    <div className="inputContainer">
                        <input id='category' type="text"
                               onChange={(e) => {
                                   setSearchCategory(e.target.value)
                               }}
                               className={searchCategory.length != 0 ? 'has-value' : ''}/>
                        <label htmlFor='category'>
                            Category
                        </label>
                    </div>
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
                    searchCompanies?.slice(0, 10).map((res: any, num: number) => (
                        <CompanyLine key={num} company={res?.name} category={res?.sector} siren={res?.siren}
                                     id={res?.id}/>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default DashBoard;