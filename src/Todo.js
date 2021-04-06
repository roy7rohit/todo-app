import { List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText  primary= {props.todo.todo} secondary='Task....'/>
      </ListItem>
      <DeleteForeverIcon onClick = {event => db.collection('todos').doc(props.todo.id).delete()}/>
       {/* <Button onClick = {event => db.collection('todos').doc(props.todo.id).delete()}> 🚫Delete me</Button> */}
       {/* <li>{todo.text}</li>/ */}


    </List>
  )
}

export default Todo
