import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css';
function GalleryList({galleryList}){
console.log('In GalleryList', galleryList)

    return(
        <div className='galleryContainer'>
        {galleryList.map((item) => (
              <GalleryItem
              key={item.id}
              item={item}
            />
            ))}
</div>
    )
}
export default GalleryList