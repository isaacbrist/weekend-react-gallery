import { useState } from 'react';

function GalleryItem({ item}) {



  return (
    <tr key={item.id}>
      
      <td>{item}</td>
      {/* {!itemToggleClick  ?
        <td className="imageItem">{item.img}</td> : */}
        <td> {item.description}</td> 
      

      <td>
        <button onClick={() => increaseLikesBtn(item, 'increase')}>Love it!</button>
        
      </td>
    </tr>
  );

}

export default GalleryItem;
