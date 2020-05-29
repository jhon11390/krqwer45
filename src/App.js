import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      idtask: 4
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li className={task.done ? 'done' : ''} key={task.id} onClick={this.checkTask.bind(this, index)}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.addTask.bind(this)}>
           <input className="error" type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateTask.bind(this)}/>
          </form>
        </div>
      </div>
    )
  }
  
  updateTask(event) {
    this.setState({
      newTask: event.target.value
    })
  }
  
  addTask(event){
    event.preventDefault();
    if(this.state.newTask !== ''){
      this.setState({
        tasks: this.state.tasks .concat({id: this.state.idtask++, name: this.state.newTask, done: false}),
        newTask: ''
      })
    }
  }

  checkTask(index){
    this.setState({
      tasks: [
        {
          id: this.state.tasks[index].id,
          name: this.state.tasks[index].name,
          done: !this.state.tasks[index].done
        }
      ]
    })
  }
}

export default App;