import { useEffect ,useState } from "react";
import { fetchSimple } from '../helpers/fetch';

export const useFetchBlog = () => {
    const [blogsState, setBlogs] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getBlogs().then(data => {
            setBlogs({
                data: data.data,
                loading: false
            })
        })
    }, []);

    const getBlogs = async() => {
        const resp = await fetchSimple('post?page=1&limit=10',null,'GET');
        const data = await resp.json();
        return data;
    }

    return blogsState;
}