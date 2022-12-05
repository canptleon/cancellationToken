import React from 'react'

function FetchCanceller() {

    const fetchController = new AbortController();

    const getFetchData = async () => {
        const { signal } = fetchController;
        let timer = setTimeout(() => {
            fetchController.abort();
            console.log('Aborted Fetch');
        }, 500); // You can change the cancellation timer

        await fetch(`https://reqres.in/api/users/2?delay=2`, { signal })
            .then((resp) => resp.json())
            .then((data) => {
                clearTimeout(timer);
                console.log('Data with Fetch');
            })
            .catch((err) => {
                console.warn({ err });
            });
    }

    return (
        <div className="innerDiv">
            <h1>FetchCanceller</h1>
            <div className='content'>
                <button onClick={() => getFetchData()}>Fetch</button>
            </div>
        </div>
    )
}

export default FetchCanceller