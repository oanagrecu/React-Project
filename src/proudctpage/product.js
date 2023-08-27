import { useState, useEffect } from "react";
import './proudct.css';
function Prodct() {
  const [data,setData] = useState([]);
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?count=12&client_id=//`)
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
  	 <div className = 'Prodct-conatiner'>
     {data.map((item,index)=> (
          <div className='testing' key ={index}> 
            <img src ={item.urls.full}/>
            <p>{item.alt_description || 'nothing for the moment' }</p>
            <p>price</p>
          </div>

    ))}

  </div>
  </div>
  )
}

export default Prodct;
