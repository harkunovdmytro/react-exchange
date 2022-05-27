const Header = ({headerCurrency}) => {
    return (
        <header className="fixed h-20 border bg-white drop-shadow-lg w-full">
            <div className='container mx-auto flex justify-center items-center h-full text-xl'>
                {headerCurrency.map(item => (
                    <div className='flex mx-5' key={item.ccy}>
                        <div className="uppercase font-bold mr-2 ">{(item.ccy)}:</div>
                        <div> {getShorterNumber(item.buy)}</div>
                        <span className="text-gray-500">/</span>
                        <div>{getShorterNumber(item.sale)}</div>
                    </div>
                ))}
            </div>
        </header>)
}
const getShorterNumber = (num) => Math.round(num * 100) / 100;
export default Header