import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Home = () => {

    const [clientCount, setClientCount] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7299/api/clients').then((response) => {
            setClientCount(response.data.length)
            console.log(response.data)
        });
    },[])
    return(
        <p style={{fontSize:"50px", textAlign:"center"}} >
            Привіт, ми вже допомогли 648 людям. Приєднуйся.
        </p>
)};

export default Home;