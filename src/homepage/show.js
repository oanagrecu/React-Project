import { useState, useEffect } from "react";
import './show.css'
function Show() {
   const [imageURL, setImageURL] = useState([]);

    useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?count=6&client_id=kSKQnT_OVmFHJsf-C1aytdwzDpo8Hzk5ARfztrBmHhY`)
            .then((response) => response.json())
            .then((actualData) => {
              const allImgs = actualData.map(photo =>  photo.urls.full)
              setImageURL(allImgs)
           console.log('data:::',allImgs)

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

      return(
    <div className='imgs-conta'>
    <div className='big-img'>
       <img src={imageURL[0]} alt="Description" />

    </div>
    <div className='small-img'>
          <img src={imageURL[1]} alt="Description" />
          <img src={imageURL[2]} alt="Description" />
    </div>
    <div className='mid-img'>
     <img className='smaller' src={imageURL[4]} alt="Description" />
      <img className='bigger' src={imageURL[3]} alt="Description" />
            

    </div>
    </div>
  );
}

export default Show;


// import { useState, useEffect } from "react";
// import './show.css';

// function Show() {
//    const [imageURLs, setImageURLs] = useState([]);

//     useEffect(() => {
//         fetch(`https://api.unsplash.com/photos/random?count=4&client_id=kSKQnT_OVmFHJsf-C1aytdwzDpo8Hzk5ARfztrBmHhY`)
//             .then((response) => response.json())
//             .then((actualData) => {
//               const allImgs = actualData.map(photo => photo.urls.full); // use 'photo' instead of 'actualData'
//               setImageURLs(allImgs);
//               console.log('data:::', allImgs);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }, []);

//     return(
//         <div className='imgs-conta'>
//             <div className='big-img'>
//                 {imageURLs.length > 0 && <img src={imageURLs[0]} alt="Description" />}
//             </div>
//             <div className='small-img'>
//                 <img src="https://placehold.co/404x376" alt="Description" />
//                 <img src="https://placehold.co/404x308" alt="Description" />
//             </div>
//             <div className='mid-img'>
//                 <img src="https://placehold.co/391x195" alt="Description" />
//                 <img src="https://placehold.co/391x482" alt="Description" />
//             </div>
//         </div>
//     );
// }

// export default Show;

