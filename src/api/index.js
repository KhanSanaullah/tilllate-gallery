import axios from "axios";

const url='https://jsonplaceholder.typicode.com/photos';

export const fetchData = async() =>{
    try{
        const {data} = await axios.get(url);
        return data;
    }
    catch(error){
        
    }

}

export default fetchData;