import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './actividades.css';
import {TaskRow} from './TaskRow';
import {TaskBanner} from './TaskBanner';
import {TaskCreator} from './TaskCreator';
import {VisibilityControl} from './VisibilityControl';

const Actividades = () => {
  const [userName, setUserName] = useState('Oswaldo');
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('task');
    if(data != null){
      setTaskItems(JSON.parse(data));
    }else{
      setUserName('Oswaldo Ex')
      setTaskItems([
        {name: 'Task One Example',done: false},
        {name: 'Task two Example',done: false},
        {name: 'Task three Example',done: false},
        {name: 'Task four Example',done: false}
      ])
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems));
  }, [taskItems])

  const createNewTask = taskName => {
    if(!taskItems.find(t => t.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

  const taskTableRows = (doneValue) =>
    taskItems
    .filter(task => task.done === doneValue) 
    .map(task =>(
      <TaskRow 
        task={task} key={task.name}
        toggleTask={toggleTask}
      />
    )
  )

    return(
        <div className="actividades">
                <div className="actividades-barra">
                    <div className="paginaPrincipal-navigation-items">
                        <ul>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/Inicio`}>Inicio</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/actividades`}>Actividades</Link></button></li>
                            <li><button type="button" className="boton-barraInicio"><Link to={`/listado`}>Notas</Link></button></li>                     
                        </ul>
                    </div>
                </div>
                
                <TaskBanner
                    userName={userName}
                    taskItems={taskItems}
                />

                <TaskCreator 
                    callback={createNewTask}
                />

                <table className="table table-striped table-bordered">
                    <thead>
                    <th>Descripcion</th>
                    <th>Terminado</th>
                    </thead>
                    <tbody>
                    {taskTableRows(false)}
                    </tbody>
                </table>

                <div className="bg-secondary-text-white text-center p-2">
                    <VisibilityControl
                    description ="las activiades terminadas"
                    isChecked = {showCompleted}
                    callback={checked => setShowCompleted(checked)}
                    />
                </div>

                {
                    showCompleted && (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Descripcion</th>
                            <th>Terminado</th>
                            </tr>
                        </thead>

                        <tbody>
                            {taskTableRows(true)}
                        </tbody>
                    </table>
                    )
                }

        </div>
    );
}

export default Actividades; 