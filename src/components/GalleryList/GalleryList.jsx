function GalleryList({galleryList}){


    return(
        <>
        {galleryList.map((item) => {
              <GalleryItem
              key={item.id}
              item={item}
            />
            return (<h5 key={gallery.id}><img src={gallery.path}/>, {gallery.description}, likes: {gallery.likes}
                
                </h5>)
            })}
</>
    )
}
export default GalleryList