import './App.css';
import { useEffect, useState } from 'react';
import Todolist from './Todolist';
import Todo from './Todo';
import Footer from './Footer';
import Header from './Header';
import AddTodo from './AddTodo';


function App() {
  let localtodo;
  if (localStorage.getItem('todos') == null) {
    localtodo = []
  } else {
    localtodo = JSON.parse(localStorage.getItem('todos'))
  }

  const [data, setData] = useState(localtodo)
  const [update, setUpdate]= useState({})



  const deleteTodo = (e) => {
    console.log('e', e)
    let filtertodo = data.filter((item) => item !== e)
    setData(filtertodo)
    console.log(data)
  }

  function addTodo(a, b, c) {
    if(a==='', b==='', c==='' ){
     alert('please fill data') 
    }else{
    console.log('added', a, b, c)
    setData([...data, { name: a, age: b, date: c }])
    }
  }

  function UpdateTodo(a,b){
    // setUpdate({name})

  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(data))
  },[data])


  return (
    <div id='app'>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todo TodoItem={data} onDelete={deleteTodo} updateTodo={UpdateTodo}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


// <div className="App">
//      

//       <Todolist Name={name} Date={date} Age={age}/>
//     </div>