import React from 'react';

//in Recat we use ref instead of DOM beacuse they are JSX tags not html
class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef();
    }
    //only gets called after this componetn get rendered. 
    componentDidMount(){
        // console.log(this.imageRef);
        // //will see values of 0 beacsue we are console logging these up before
        // //we even had a chance of loading the image up. so we do a callback on an image
        // //load
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () =>{
        // console.log(this.imageRef.current.clientHeight);
        const heigth = this.imageRef.current.clientHeight;
        //see how much grids it should span to not overlap another pic
        const spans = Math.ceil(heigth/10);
        this.setState({spans:spans});
    };
    render(){
        const {description, urls} = this.props.image;
        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    
                    // alt = {this.props.image.description} 
                    // src = {this.props.image.urls.regular}
                    alt = {description} 
                    src = {urls.regular}
                    ref = {this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;