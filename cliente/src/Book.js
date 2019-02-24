import React, { Component } from 'react';

class Book extends Component {
    constructor(props){
        super(props);

    }

   //  funtion to detele a book

  // deleteBook(){
  //   axios.delete('http://localhost:3001/api/book',{
  //     params:{}

  // }
      
    render() {
      return (
          <div className="book"> 
              <div>{this.props.libro.nombre}</div>
            <div>{this.props.libro.editorial}</div>
            <div>{this.props.libro.autor}</div>
            <div>{this.props.libro.edicion}  <span><button onClick={this.deleteBook}>x</button></span></div> 
            
          </div>
      )
         
      ;
    }
  }
  
  
  export default Book;