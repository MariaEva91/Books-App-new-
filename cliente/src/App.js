import React, { Component } from 'react';
import './Style.css'
import Book from './Book';


import Add from './Add';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: '',
      books:[],

    }
    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
  }
  //function to change the input value

  handleOnChangeInput(event) {
    this.setState({
      searchWord: event.target.value
    })
  }

  //funtion to get the books

  getBooks(){
    fetch('http://localhost:3001/api/home')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
         books: data,
         
        })
      })
  }

  componentDidUpdate() {
    this.getBooks();
  }
  componentDidMount(){
    this.getBooks();
  }

  //filter function

  filter(){
   
   
  }

  //function to open modal

  openModal(){

  }


  render() {
    let libros = this.state.books.map((p) => (
      <Book libro={p}></Book> 
    ))

    return (
      <div className="App">
     
        <nav className="nav">
          <i class="far fa-user-circle"></i> <i class="fas fa-bars"></i><i class="fas fa-power-off"></i>
        </nav>
        <div>
          <input className="inputSearch" type="text" onChange={this.handleOnChangeInput}
            placeholder="Buscá por nombre y/o autor"></input><button onClick={this.filter} className="search-button"><i
              class="fas fa-search"></i></button>
        </div>
        <div className="list-container">
          <div className="categories">
            <div>Nombre</div>
            <div>Editorial</div>
            <div>Autor</div>
            <div>Edición</div>
          </div>
          {libros}
        </div>
        <button className="add-button" onClick={this.openModal}>Agregar</button>
        <div id="modal"></div>
        <Add></Add>
      
        
      </div>
    );
  }
}

export default App;
