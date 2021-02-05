import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiTodos } from '../services/api'

const Todos= () => {

  const dispatch = useDispatch()
  const todos = useSelector((state: any) => state.todos)

  useEffect(() => {
    apiTodos.get('/todos')
    .then(response => dispatch({ type: 'PULL_TODOS', payload: response.data }))
      // .then(response => console.log(response))
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
