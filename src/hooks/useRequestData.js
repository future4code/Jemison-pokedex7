import {useState, useEffect} from 'react';
import axios from 'axios';


export function useRequestData(url) {
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get(url)
        .then((response) => {
            setData(response.data)
        }).catch((error) => {
           console.log(error)
        })}, [url])
        
        return {data}
}    



