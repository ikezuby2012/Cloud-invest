import React, { useEffect, useState } from 'react';
import axios from "axios";
import Icon from "react-crypto-icons";

import { coinMarketApi } from "../../api";

import DashLayout from "../../components/dashboard/Dashboard";

//icon
import WarningIcon from '@material-ui/icons/Warning';




const abbreviateNumber = (val) => {
    val = Math.round(val);
    let suffices = ["", "k", "m", "b", "t"];
    let suffixNum = Math.floor(("" + val).length / 3);
    let shortValue = parseFloat((suffixNum !== 0 ? (val / Math.pow(1000, suffixNum)) : val).toPrecision(2));
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    // console.log(shortValue + suffices[suffixNum]);
    return shortValue + suffices[suffixNum];
}


const Market = () => {
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get(coinMarketApi);
                const { data } = res.data.data;
                setStock(data);
                setLoading(false);
                setError(false);
            } catch (err) {
                setLoading(false);
                setError(true);
            }
            // if (stock) {
            //     console.log(stock);
            // }
        }
        fetchData();
    }, [])

    return (
        <DashLayout>
            <div className="dashlayout">
                <div className="dashMarket_box">
                    {/* {console.log(stock)} */}
                </div>

                <ul className="dashMarket_table">
                    <li className="dashMarket_list mb">
                        <div className="dashMarket_name  dashMarket_hdText">name</div>
                        <div className="dashMarket_price dashMarket_hdText">price</div>
                        <div className="dashMarket_per24 dashMarket_hdText">24%</div>
                        <div className="dashMarket_per7  dashMarket_hdText">7d%</div>
                        <div className="dashMarket_marketCap dashMarket_hdText">market cap</div>
                        <div className="dashMarket_volume dashMarket_hdText">volume(24h)</div>
                    </li>
                    {loading && <div className="error mt-6">
                        <div style={{ height: "10rem", width: "10rem" }} className="loading-spinner" />
                    </div>}
                    {error && <div className="error">
                        <WarningIcon className="error-icon" />
                        <span>problem connecting to server!</span>
                    </div>}
                    {stock.map((el) => {
                        const { symbol, quote, slug } = el;
                        const {
                            price, volume_24h: volume, percent_change_24h: per24, percent_change_7d: per7d, market_cap
                        } = quote.USD;

                        return (
                            <li className="dashMarket_list">
                                <div className="dashMarket_flexhd">
                                    <Icon name={symbol.toLowerCase()} size={25} className="dashMarket_icon" />
                                    <span>{slug}</span>
                                </div>
                                <div className="dashMarket_list-text">
                                    <span>${parseFloat(price.toFixed(2))}</span>
                                </div>
                                <div className="dashMarket_list-text">
                                    {per24 > 0 ? <span className="dashMarket_list-text-blue">{per24.toFixed(2)}</span> : <span className="dashMarket_list-text-red">{per24.toFixed(2)}</span>}
                                </div>
                                <div className="dashMarket_list-text">
                                    {per7d > 0 ? <span className="dashMarket_list-text-blue">{per7d.toFixed(2)}</span> : <span className="dashMarket_list-text-red">{per7d.toFixed(2)}</span>}
                                </div>
                                <div className="dashMarket_list-text">
                                    <span>${abbreviateNumber(market_cap)}</span>
                                </div>
                                <div className="dashMarket_list-text">
                                    <span>${abbreviateNumber(volume)}</span>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </div>
        </DashLayout>
    );
}
export default Market;