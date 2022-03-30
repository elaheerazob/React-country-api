import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [countris,setCountris] =useState([]);
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountris(data))

    },[])
    return (
        <div>
            <h1>This is My Product page</h1>
            <div>
                {
                    countris.map(country => <p><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></p>)
                }
            </div>
        </div>
    );
};

export default Products;