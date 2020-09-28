import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom"
import '../paginaPrincipal/paginaPrincipal.css'

export default class Notas extends Component{
onSubmit=(e) => {//reinicio de formulario
    var ListNotas = [];//inicio nueva lista
    var storageList = localStorage.getItem('ListNotas') //jalo la lista de la memoria 
    if(storageList == null){// si la lista esta vacia 
        ListNotas= []
    }else{
        ListNotas = JSON.parse(storageList);//tomo los valores que tiene 
    }

    if (this.state.editing) {
        const newNote = {
            content: this.state.content,
            etiqueta: this.state.etiqueta,
            fecha: this.state.fecha
        };
        console.log(newNote)
        ListNotas.push(newNote);
        localStorage.setItem('ListNotas',JSON.stringify(ListNotas));

    } else {
        const newNote = {
            content: this.state.content,
            etiqueta: this.state.etiqueta,
            fecha: this.state.fecha
        };
        console.log(newNote)
        ListNotas.push(newNote);
        localStorage.setItem('ListNotas',JSON.stringify(ListNotas));
    }
}

state={
    content : '',
    etiqueta :'',
    fecha: new Date()
}

onInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onChangeDate = date => {
    this.setState({date});
}
    render(){
        return (
            <div className="col-md-6 offset-md-3">  
            <br></br>
                <h4>Agregar un Apunte</h4>
                <br></br>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group"> 
                        <textarea className="container-fluid" 
                            name="content" 
                            placeholder="INGRESE LA NOTA"
                            onChange={this.onInputChange}
                            value={this.state.content}  
                            required>        
                        </textarea>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input 
                            type="text"
                            onChange={this.onInputChange}
                            className="form-control" 
                            placeholder="INGRESE ETIQUETA" 
                            name="etiqueta"
                            value={this.state.title} 
                            required>
                        </input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <DatePicker 
                        className="form-control"
                        name="fecha" 
                        selected={this.state.fecha}
                        onChange={this.onChangeDate}
                        />
                    </div>

                    <br></br><br></br>
                    <button type="submit" className="btn btn-primary"> 
                    GUARDAR NOTA
                    </button>
                    <div>
                </div> 
                </form>
                <br></br>
                <button type="button" className="btn btn-primary"><Link to={`/listado`} style={{ color: 'inherit',textDecoration: 'none' }}>VOLVER A NOTAS</Link></button>
            </div>
            )

    }
}