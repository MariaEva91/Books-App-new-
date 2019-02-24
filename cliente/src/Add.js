import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            editorial: '',
            autor: '',
            edicion: ''
        }
        this.handleOnChangeInputNombre = this.handleOnChangeInputNombre.bind(this);
        this.handleOnChangeInputEditorial = this.handleOnChangeInputEditorial.bind(this);
        this.handleOnChangeInputAutor = this.handleOnChangeInputAutor.bind(this);
        this.handleOnChangeInputEdicion = this.handleOnChangeInputEdicion.bind(this);
        this.AddBook = this.AddBook.bind(this);

       
    }

    //function to changes the input values

    handleOnChangeInputNombre(event) {
        this.setState({
            nombre: event.target.value
        })
    }
    handleOnChangeInputEditorial(event) {
        this.setState({
            editorial: event.target.value
        })
    }
    handleOnChangeInputAutor(event) {
        this.setState({
            autor: event.target.value
        })
    }
    handleOnChangeInputEdicion(event) {
        this.setState({
            edicion: event.target.value
        })
    };





    //validations and save

    AddBook() {
        let newBook = {
            nombre : this.state.nombre,
            editorial: this.state.editorial,
            autor: this.state.autor,
            edicion: this.state.edicion
        };
        console.log(newBook)
        axios.post('http://localhost:3001/api/new', {newBook})
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
    }





    render() {

        return (
            <div className="modal">
                <div className="modal-title">Agregar libro<button>X</button></div>
                <label>Nombre</label>
                <input type="text" onChange={this.handleOnChangeInputNombre}></input>
                <label>Editorial</label>
                <input type="text" onChange={this.handleOnChangeInputEditorial}></input>
                <label type="text">Autor</label>
                <input type="text" onChange={this.handleOnChangeInputAutor}></input>
                <label>Edición</label>
                <input type="text" onChange={this.handleOnChangeInputEdicion}></input>
                <button className="button-save" onClick={this.AddBook}>Guardar</button>

            </div>
        )

            ;
    }
}


export default Add;