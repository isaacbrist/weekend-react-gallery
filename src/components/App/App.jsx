import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
function App() {
  let [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    getGallery()
}, [])
    //Get request
    const getGallery = () => {
      axios.get('/gallery')
      .then((response) => {
          console.log(response.data)
          setGalleryList( response.data )
      }).catch((error) => {
          console.log( 'error in GET', error)
      })
  };


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className ='galleryFlexContainer'>
        <p>Gallery goes here</p>
        <GalleryList
        galleryList={galleryList}
        getGallery={getGallery}/>
                   
                </div>
      
      </div>
    );
}

export default App;
