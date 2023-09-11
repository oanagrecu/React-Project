import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import './proudct.css';

function Prodct() {
  const [data,setData] = useState([]);
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?count=12&client_id=kSKQnT_OVmFHJsf-C1aytdwzDpo8Hzk5ARfztrBmHhY`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log('Data from API:', actualData);
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
                       <Link to={{
            pathname: `/product/${item.id}`,
               state: { item: item }
              }}>
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