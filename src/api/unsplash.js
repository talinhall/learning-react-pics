import axios from 'axios';

//create amethod is going to create an instance of the axios client with a 
//couple of defaulted properities. 
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5f4c7b18307fb5d52cb3a83b87d4443aed23fe6b8b9c5e136af5e3f4ea58e3bb'
    }
});