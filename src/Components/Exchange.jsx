import {useState} from "react";

const Exchange = ({rates}) => {
    const [currency1, setCurrency1] = useState('UAH')
    const [currency2, setCurrency2] = useState('USD')
    const [amount1, setAmount1] = useState(1)
    const [amount2, setAmount2] = useState(1)

    function handleChangeAmount1(e) {
        setAmount1(()=>(+e.target.value));
        setAmount2(e.target.value * rates[currency2] / rates[currency1]);
    }

    function handleChangeAmount2(e) {
        setAmount2(+e.target.value);
        setAmount1(e.target.value * rates[currency1] / rates[currency2]);
    }

    function handleSelectCurrency1(e) {
        setAmount2(amount1 * rates[currency2] / rates[e.target.value]);
        setCurrency1(e.target.value);
    }

    function handleSelectCurrency2(e) {
        setAmount1(amount2 * rates[currency1] / rates[e.target.value]);
        setCurrency2(e.target.value);
    }

    return (
        <div className=' min-h-full m-auto'>
            <div className='mb-10 flex'>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number" value={amount1} onChange={(e) => handleChangeAmount1(e)}/>
                <div className="inline-block relative w-40">
                    <select
                        value={currency1}
                        onChange={e => handleSelectCurrency1(e)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {rates && Object.keys(rates).map(item => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number" value={amount2} onInput={(e) => handleChangeAmount2(e)}/>
                <div className="inline-block relative w-40">
                    <select
                        value={currency2}
                        onChange={e => handleSelectCurrency2(e)}
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {rates && Object.keys(rates).map(item => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exchange