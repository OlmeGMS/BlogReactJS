import { useEffect ,useState } from "react";
import { fetchSimple } from '../helpers/fetch';

export const useFetchComment = (post) => {
    const Post = post;
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getCommet().then(data => {
            setState({
                data: data.data,
                loading: false
            })
        })
    }, []);

    const getCommet = async() => {
        const resp = await fetchSimple(`post/${Post}/comment`,null,'GET');
        const data = await resp.json();
        return data;
    }

    return state;
}