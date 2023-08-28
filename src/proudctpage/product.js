// Prodct.js
import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import ProductContext from './ProductContext';

import './proudct.css';

function Prodct() {
    const [data, setData] = useState([]);
    const { setSelectedProduct } = useContext(ProductContext); 

    useEffect(() => {
            fetch(`https://api.unsplash.com/photos/random?count=12&query=fashion&client_id=kSKQnT_OVmFHJsf-C1aytdwzDpo8Hzk5ARfztrBmHhY`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log('testttt',actualData);
                setData(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div>
            <div className='colc-text'>
                <h1>COLLECTION</h1>
            </div>
            <div className='Prodct-conatiner'>
                {data.map((item, index) => (
                    <div className='testing' key={index}>
                        <Link 
                            to={`/Collection/${item.id}`}
                            onClick={() => setSelectedProduct(item)}
                        >
                            <img src={item.urls.full} />
                        </Link>
                        <p>{item.alt_description || 'nothing for the moment'}</p>
                        <p>price</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Prodct;
