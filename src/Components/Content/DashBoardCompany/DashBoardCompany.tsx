import React, {useEffect, useState, useRef} from "react";
import {motion} from 'framer-motion';
import axios from "axios";
import {Link, useSearchParams} from "react-router-dom";
import companyInfoList from './constant'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import useWindowDimensions from "../../../Utils/WindowsDimension";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    aspectRatio: 458 / 300,
    showBorder: false,
    scales: {
        x: {
            display: true,
            grid: {
                borderColor: 'rgb(0,0,0, 1)',
                borderWidth: 2,
                color: 'rgb(0,0,0, 0)'
            }
        },
        y: {
            display: true,
            grid: {
                borderDash: [5, 7],
                color: 'rgb(0,0,0, 0.3)',
                borderColor: 'rgba(0, 0, 0, 0)'
            }
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
};


interface InfoCompany {
    year: any[];
    ca: any[];
    margin: any[];
    ebitda: any[];
    loss: any[];

}

const DashBoardCompany = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [company, setCompany] = useState<any>()
    const [infosC, setInfosC] = useState<any>(null)
    const { height, width } = useWindowDimensions();


    const getCompany = async () => {
        await axios.get(`https://test.wertkt.com/api/biz/${searchParams.get("id")}/`
        ).then(async (res) => {
            if (res.status !== 200)
                return;
            setCompany(res.data)
            getInfoCompanies(res.data?.results)
        })
            .catch(error => {
                return;
            });
    }

    const getInfoYearCompany = async (num: any) => {
        return await axios.get(` https://test.wertkt.com/api/result/${num}/`
        ).then((res) => {
            if (res.status !== 200)
                return undefined;
            return res.data
        })
            .catch(error => {
                return undefined;
            });
    }

    const getInfoCompanies = async (resultat: any[]) => {
        let ca: any[] = []
        let margin: any[] = []
        let ebitda: any[] = []
        let loss: any[] = []
        let year: any[] = []
        for (const res of resultat) {
            let data = await getInfoYearCompany(res);
            ca.push(data?.ca);
            margin.push(data?.margin);
            ebitda.push(data?.ebitda);
            loss.push(data?.loss);
            year.push(data?.year);
        }
        const data = {
            ca: ca.reverse(),
            margin: margin.reverse(),
            ebitda: ebitda.reverse(),
            loss: ebitda.reverse(),
            year: year.reverse()
        }
        setInfosC(data)
    }

    useEffect(() => {
        getCompany()
    }, [])


    const getChartData = (label: any[], data: any[]) => {
        let barthick = 42
        if (width <= 950)
            barthick = 30
        return {
            labels: label,
            datasets: [
                {
                    data: data,
                    backgroundColor: '#4E59FF',
                    barThickness: barthick,
                },
            ],
        }
    }

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
                    <h1>Abbott and Sons</h1>
                    <h2>{`n° Siren ${company?.siren}`}</h2>
                </div>
            </div>
            <div className="content"
            >
                <div className="case">
                    <h1>Chiffre d’affaire</h1>
                    <div className={'graphContainer'}>
                        <p style={{paddingBottom: 4}}>Montant (en €)</p>
                        <div className="graph">
                            <Bar options={options} data={getChartData(infosC?.year, infosC?.ca)}
                                 style={{width: '100%', height: '100%'}}/>
                        </div>
                        <p style={{alignSelf: "flex-end"}}>Année</p>
                    </div>
                </div>
                <div className="case">
                    <h1>EBITDA</h1>
                    <div className={'graphContainer'}>
                        <p style={{paddingBottom: 4}}>Montant (en €)</p>
                        <div className="graph">
                            <Bar options={options} data={getChartData(infosC?.year, infosC?.ebitda)}
                                 style={{width: '100%', height: '100%'}}/>
                        </div>
                        <p style={{alignSelf: "flex-end"}}>Année</p>
                    </div>
                </div>
                <div className="case">
                    <h1>Loss</h1>
                    <div className={'graphContainer'}>
                        <p style={{paddingBottom: 4}}>Montant (en €)</p>
                        <div className="graph">
                            <Bar options={options} data={getChartData(infosC?.year, infosC?.loss)}
                                 style={{width: '100%', height: '100%'}}/>
                        </div>
                        <p style={{alignSelf: "flex-end"}}>Année</p>
                    </div>
                </div>
                <div className="case">
                    <h1>Margin</h1>
                    <div className={'graphContainer'}>
                        <p style={{paddingBottom: 4}}>Montant (en €)</p>
                        <div className="graph">
                            <Bar options={options} data={getChartData(infosC?.year, infosC?.margin)}
                                 style={{width: '100%', height: '100%'}}/>
                        </div>
                        <p style={{alignSelf: "flex-end"}}>Année</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DashBoardCompany;