import { useState } from 'react';
import './GalleryItem.css';
import axios from 'axios';
//GalleryItem
function GalleryItem({item, getGallery}) {
    console.log('In GalleryItem', item)
    const [toggle, setToggle] = useState(true);
// toggle between photo and description
const itemToggleClick=()=>{
console.log('You clicked the image!')
setToggle(!toggle)
console.log('here is the status of toggle', toggle)
}
//increase the like of a photo
const increaseLoveBtn = () => {
    console.log('in increaseLoveBtn and likes is', item.likes);
    // PUT request
    console.log('item.id is', item.id)
    
axios
  .put(`/gallery/like/${item.id}`)
  .then((response) => {
    //refresh the gallery
    getGallery();
    console.log('in axios put')
  })
  .catch((err) => {
    alert('Error Adding love');
    console.log(err);
  });
}
  return (
    <>
     <h5 key={item.id}>
        <section  onClick={itemToggleClick}>
        {toggle ?
        <p><img src={item.path}  className='imageBox' 
        /></p>:
        <p  className='imageBox'>{item.description} </p>
}
</section>
        <div> <p><button onClick={increaseLoveBtn}
        >Love it!</button></p>
        {item.likes > 0?
        <p>{item.likes} People love this</p>:
        <p>Nobody loves this yet. :(</p>}
     </div>
     </h5>
    
    </>)

 }

export default GalleryItem;
