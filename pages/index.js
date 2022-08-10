import React, {useState, useEffect} from 'react'
import List from './src/components/List';
import ListItem from './src/components/ListItem';
import ProjectDescriprion from './src/components/ProjectDescription';

function Home () {

  useEffect(() => {
    handleGetUserData();
  }, []);

  //CONSUMO DA API:
  async function handleGetUserData() {
    const response = await fetch("");
    const data = await response.json();
    console.log(data);
    return data;
  }


  

  const [todos, setTodos] = useState([
    { description: 'Aprender sobre componentes', status: true},
    {description: 'Aprender sobre props', status: true},
    {description: 'Aprender sobre estado', status: true},
  ]);

  console.log('Tamanho do array: ',todos.length)

  const [newTodoDescription, setNewTodoDescription] = useState('')
  
  
  function handleAddToDo() {
    const todoObject = { description: newTodoDescription, status: false}

    setTodos([...todos, todoObject]);
    setNewTodoDescription("");
    
  }

  function handleRemoveToDo (deletedTodo) {
    const filteredTodos = todos.filter(
      (todo) => todo.description !== deletedTodo);
    setTodos(filteredTodos);
    

  }

  useEffect(() => {
    handleShowAlert();
  }, [todos.length === 5]);

  function handleShowAlert() {
    if (todos.length === 5) {

      alert("Você já adicionou 5 itens ao seu ToDo-List");
    }
  }


  return (
    <>
    <ProjectDescriprion 
    title="Suas Atividades" 
    subTitle="Fique atento a suas ativides pendentes"
    />

  <input type='text' 
    placeholder='Insira nova ToDo' 
    value={newTodoDescription}
     onChange={ (e) => setNewTodoDescription(e.target.value)}
     />
    <button onClick={handleAddToDo}>Adicionar</button>

    <List>
      {todos.length === 0 && <h1>Não há nenhum item</h1>}

      {todos && todos.map(todo => <ListItem key={todo.description}description={todo.description} statu={todo.status}
      handleRemoveToDo={() => handleRemoveToDo(todo.description)}/>)}

    </List>
    </>

  );
};

export default Home;