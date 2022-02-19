const baseUrl = process.env.REACT_APP_API_URL;
const App_Id = process.env.REACT_APP_APP_ID;


const fetchSimple = (endpoint, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoint }`;
    if (method === 'GET') {
        return fetch( url, {
            headers: {
                'Content-type': 'application/json',
                'app-id': `${App_Id}`
            },
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'app-id': `${App_Id}`
            },
            body: JSON.stringify( data )
        });
    }
}

export {
    fetchSimple
}