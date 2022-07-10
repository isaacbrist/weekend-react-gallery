import GalleryItem from "../GalleryItem/GalleryItem"
import './GalleryList.css';
function GalleryList({galleryList, getGallery}){
console.log('In GalleryList', galleryList)

    return(
        <div className='galleryContainer'>
        {galleryList.map((item) => (
              <GalleryItem
              key={item.id}
              item={item}
              getGallery={getGallery}
            />
            ))}
</div>
    )
}
export default GalleryList