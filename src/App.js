import './App.css';
import Header from './Components/Header'
import Exchange from './Components/Exchange'
import React, {useState, useEffect} from 'react'

function App() {
    const [headerCurrency, setHeaderCurrency] = useState([])
    const [allCurrency, setAllCurrency] = useState({})


    async function getHeaderCurrencys() {
        await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(res => res.json())
            .then(result => {
                setHeaderCurrency(result)
            });
    }

    async function getCurrencys() {
        await fetch('https://v6.exchangerate-api.com/v6/974c1615d93784ab43723a61/latest/UAH')
            .then(res => res.json())
            .then(result => {
                setAllCurrency(result)
            });
    }

    useEffect(() => {
        getHeaderCurrencys()
        getCurrencys()
    }, []);


    return (
        <div className="border-red-600 border min-h-screen flex bg-sky-200">
            <Header headerCurrency={headerCurrency}/>
            <Exchange rates={allCurrency.conversion_rates}/>
        </div>
    );
}

export default App;
