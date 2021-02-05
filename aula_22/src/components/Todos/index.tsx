import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api'

const Todos= () => {

  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos.todos)

  useEffect(() => {
    api.get('/todos')
    .then(response => dispatch({ type: 'PULL_TODOS', payload: response.data }))
  }, []) 


  return (
    <>
      <ul>
        {
          todos?.map((i: any) =>(
            <li key={i.id}>
              {i.id} - {i.title}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default Todos;
