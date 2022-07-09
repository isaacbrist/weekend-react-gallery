import { useState } from 'react';
import './GalleryItem.css';
function GalleryItem({item}) {
    console.log('In GalleryItem', item)


  return (
    <>
     <h5 key={item.id} >
        <img src={item.path} className='imageBox'/>
        <div> likes: {item.likes}
     </div>
     </h5>
    
    </>)
//     <tr key={item.id}>
// {item.description}
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
