import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    // console.log(props.images);
    const images =props.images.map((image) =>{
        // image.id is given for unique images from unsplash
        // return <img alt = {image.description} key ={image.id} src={image.urls.regular}/>
        return <ImageCard key = {image.id} image={image}/>
    });
    return <div className = "image-list">{images}</div>;
};

export default ImageList;

//map statment in JS takes iterates through array and 
//creates a brand new arrow with modifications.
//number.map(pass a function to it.) even arrow function
//
//numbers.map((num) => {return num* 10;})
//simplify 
//numbers.map((num) => num * 10)