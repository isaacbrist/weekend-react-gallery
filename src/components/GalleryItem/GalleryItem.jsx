import { useState } from 'react';
import './GalleryItem.css';
function GalleryItem({item}) {
    console.log('In GalleryItem', item)
    const [toggle, setToggle] = useState(true);
const itemToggleClick=()=>{
console.log('You clicked the image!')
setToggle(!toggle)
console.log('here is the status of toggle', toggle)
}

  return (
    <>
     <h5 key={item.id} onClick={itemToggleClick}>
        <section>
        {toggle ?
        <p><img src={item.path}  className='imageBox' 
        /></p>:
        <p  className='imageBox'>{item.description} </p>
}
</section>
        <div> likes: {item.likes}
     </div>
     </h5>
    
    </>)
//     <tr key={item.id}>
// 
//       <td>{item}</td>
//       {/* {!itemToggleClick  ?
//         <td className="imageItem">{item.img}</td> : */}
//         <td> {item.description}</td> 
      

//       <td>
//         <button onClick={() => increaseLikesBtn(item, 'increase')}>Love it!</button>
        
//       </td>
//     </tr>
//   );

 }

export default GalleryItem;
