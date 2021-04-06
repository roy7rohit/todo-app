import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk','Take the rubbish out', 'yo this is awesome']);
  const [input, setInput] = useState('');
 //{  console.log(input);

  // When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  // useEffect(function, dependencies);}


  useEffect(()=>{

    // this code here.... fires when the app.js loads

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[]); 

  const addTodo = (event) =>{
    // This will fire off when we click the button

    event.preventDefault(); // Don't refresh the page when you submit (will stop refresh)

    // console.log("this is working");

    db.collection('todos').add({
      todo : input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput(''); 

    // setTodos([...todos, input]);
    // setInput(''); // clear up the input after clicking the todos button
    // console.log(todos);
  }
  return (
    <div className="App">
      <h1> Hello this is roy</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}

        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

        {/* <button type="submit" onClick={addTodo}> Add Todo </button> */}
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        // <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
