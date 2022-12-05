import React from 'react'
import axios from 'axios';

function AxiosCanceller() {

    const axiosController = new AbortController();

    const getAxiosData = async() => {
        const { signal } = axiosController;
        let timer = setTimeout(() => {
            axiosController.abort();
            console.log('Aborted Axios');
        }, 500); // You can change the cancellation timer

        await axios.get(`https://reqres.in/api/users/2?delay=2`, { signal })
            .then((response) => {
                clearTimeout(timer);
                console.log('Data with Axios');
            })
            .catch((err) => {
                console.warn({ err });
            });
    }

    return (
        <div className="innerDiv">
            <h1>AxiosCanceller</h1>
            <div className='content'>
                <button onClick={() => getAxiosData()}>Axios</button>
            </div>
        </div>
    )
}

export default AxiosCanceller