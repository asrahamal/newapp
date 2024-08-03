import React from 'react'
import Loading from './components/Loading.gif.gif'
const Spinner = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={Loading} alt="loading" />
        </div>
    )
}

export default Spinner;
