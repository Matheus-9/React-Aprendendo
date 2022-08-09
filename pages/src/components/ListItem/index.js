import React, {useState} from 'react'

const ListItem = ({description, status, handleRemoveToDo }) => {
  const [done, setDone] = useState(status);
  //console.log("Estado antes: ", done);
  

  function handleDoneTask() {
    setDone(prevState => !prevState);
    //console.log("Variavel depois: ",done)
    
  }

  return (
      <li>
        <p>{description}</p>
        <p>{done === true ? 'Feito' : 'A fazer'}</p>
        <button onClick={handleDoneTask}>{done ? 'Desmarcar como feito' : 'Marcar como Feito'}</button>
        <button onClick={handleRemoveToDo}>Remover ToDo</button>
      </li>
  );
};

export default ListItem