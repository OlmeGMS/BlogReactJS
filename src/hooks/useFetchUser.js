import React, { useEffect, useState } from 'react';
import { fetchSimple } from '../helpers/fetch';

export const useFetchUser = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        createUser().then(data => {
            setState({
                data: data.data,
                loading: false
            })
        })
    }, []);

    const createUser = async() => {
        const resp = await fetchSimple(`user`,null,'GET');
        const data = await resp.json();
        return data;
    }
    return state;
}
