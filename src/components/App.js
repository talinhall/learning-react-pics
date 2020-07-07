import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// const App = () => {
//     return (
//         <div className = "ui container" style = {{marginTop: '10px'}}>
//             <SearchBar/>
//         </div>
//     );
// };
//refracture to a class so can deal with search API 

// class App extends React.Component{
    //calback function on the app 
//     onSearchSubmit(term){
//         // console.log(term);
//         //look documantion in unsplash seacrh photos. says have to make a get type network request 
//         // to the endpoint /search/photos . path is root url for usplash then search/phtos. look under 
//         //location for that. teh first argument is the path. then we have to identify ourselves to
//         //get acces to api. also need to deal with the params as said in documentation. query woild be what it 
//         //searches. We need a way get notification when request completed because take some time and would be out 
//         //of function. 2 options to do this.
//  //option number 1: Whenever make request with axios returns an object called promise. this object will give 
//             // notification when some amout of work is completed. using callback arrow function when data gievn back from api
//         axios.get('https://api.unsplash.com/search/photos', {
//             params: {query:term},
//             headers: {
//                 Authorization: 'Client-ID 5f4c7b18307fb5d52cb3a83b87d4443aed23fe6b8b9c5e136af5e3f4ea58e3bb'
//             }
//         }).then((response) => {
//             // console.log(response);
//             // looking at the console log we see that response.data.resulst has the list of results we are looking for.
//             console.log(response.data.results);
//         });
//     }

    //option two for getting notification when get response back. async keyword allows you to use the await function
    // class App extends React.Component{
    //     //state with images an empty array.
    //     state = {images:[]};
    //     async onSearchSubmit(term){
    //         const response = await axios.get('https://api.unsplash.com/search/photos', {
    //             params: {query:term},
    //             headers: {
    //                 Authorization: 'Client-ID 5f4c7b18307fb5d52cb3a83b87d4443aed23fe6b8b9c5e136af5e3f4ea58e3bb'
    //             }
    //         });
    //         // console.log(response.data.results);
    //         // console.log(this);   
    //         this.setState({images: response.data.result});   
    //     }

    //turn the function to arrow function beacuse same error with this.
class App extends React.Component{
    state = {images:[]};
    onSearchSubmit = async (term) =>{
        // const response = await axios.get('https://api.unsplash.com/search/photos', {
        // const response = await axios.get('search/photos', {
        const response = await unsplash.get('search/photos', {
            params: {query:term}
            // headers: {
            //     Authorization: 'Client-ID 5f4c7b18307fb5d52cb3a83b87d4443aed23fe6b8b9c5e136af5e3f4ea58e3bb'
            // }
        });  
        // console.log(response.data.results);
        this.setState({images: response.data.results});   
    }

    render(){
        return(
        <div className = "ui container" style= {{marginTop: '10px'}}>
            {/* created a prop whenSearchBarSubmited*/}
            <SearchBar whenSearchBarSubmited={this.onSearchSubmit}/>
            {/* We get an error similar to one before. so the this is the props object which is on the left of 
            whenSearchBarSubmited on .*/}
            {/* Found:{this.state.images.length} images */}
            <ImageList images={this.state.images}/>
        </div>
        );
    }
}

export default App;