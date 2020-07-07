import React from 'react';


class SearchBar extends React.Component{
    //this is uncontrolled event handler set up so not using want controlled 
    // onImputChange(event){
    //   //event.target.value property will contain the text that the user just inputed.
    //   console.log(event.target.value);
      
    // }
        
   
    /*onInputClick(){
        console.log('Input was clicled');
        
     }*/
     //make controlled element
     state = {term: ''};

     //we want to get rid of default form behavor from html. when press enter everything in input 
     //disappears (refreshes the page by trying to submit info to backend).
    //  onFormSubmit(event){
    //      event.preventDefault();
    //     // can't console log out like this. 
    //     //  console.log(this.state.term);Error says thta cannot read property state
    //     // of undefined. but using this. state not undefined? JS thinks that this is not equal to the 
    //     // instance of the JS class it thinks that this is equal to undefined. So instance of search bar that is created
    //     // everytime render search bar.the instance would include state, render, onFormSubmit, and this(which is a refernce back to the class ).
    //     //To understand what is going wrong have to see how is the value of 'this' determined in a function. Anytime use this is function you don't 
    //     //look inside the function you look at where the function is called. and then look at the left of the .   If nothihng to left of . get error undefined.
    //     //few ways to solev this. 1. build constructor and bind it to right thing. 
    //     //constructor(){
    //     //     this.state = this.state.bind(this);
    //     // }
    //     //2. turn the function into a arrow function. arrow functions automatically bind the value of this fro all the code inside the function. So avleu of this is 
    //       alwasy equal to instance of searchbar. 
                // onFormSubmit = (event) => {
                //     event.preventDefault();
                //     console.log(this.state.term);
                // };
     //      3. pass arrow function directly into props like we did for the input. whihc is what is seen in the form . use the () because defining a aroow function and passing 
     //     it down to the form. so when form gets submitted its going to call the arrow function. form going to involke the arrow function one time. 
    //  }
    
    // onFormSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }
    onFormSubmit = (event) => {
            event.preventDefault();
            // console.log(this.state.term);
            //differnec with using props in class is you have to use this.
            this.props.whenSearchBarSubmited(this.state.term);
    };

    render(){
        return (
            <div className = "ui segment"> 
                <form onSubmit={ this.onFormSubmit} className = "ui form">
                {/* <form onSubmit={ (event) => this.onFormSubmit(event)} className = "ui form"> */}
                    <div className= "field">
                        <label>Image Search</label>
                        
                        {/*call back. onInput change we leave the () off because we don't 
                        want to call it everytime we go in render function. instead we are 
                        passing a refernce to this function to the input element so the input 
                        can call that function at some point in time in the future. that makes
                        it that anytime type in inout the function is called. The property name onChange
                        is used so that any time user changes text in an input whats inside onchange is called
                        <input type= "text" onChange = {this.onImputChange} onClick={this.onInputClick}/>*/}
                        {/*
                         Alternat synatx to the event handler of
                         <input type= "text" onChange = {this.onImputChange} />
                         is
                        <input type ="text" onChange = {(event) => console.log(event.target.value)}/>
                         now change it because want to make it controlled event handler (e is an abrevation of event). Every single time
                         user types in input going to updat the term in state.
                          Them input is told what the value is. which is what is shown on the search bar. The reason we set the value 
                          even though it seems like overkill is to make sure that the react side of the compoent si
                          driving and storing the data not the DOM. uncontrolled you have to look in DOM at the input value 
                          to get the data. controlled the react component has the value. if drive the value also can make it easy to things
                          like capalize everythign the user is typing like this 
                           <input type= "text" value = {this.state.term} onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}/>*/}
                         <input type= "text" value = {this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>    
                </form>
            </div>
        );
    }
}


export default SearchBar;