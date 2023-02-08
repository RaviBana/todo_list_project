import React from 'react'
import { useState } from 'react'

const AddTodo = ({addTodo}) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [date, setDate] = useState('')
    console.log(name)
    console.log(age)
    console.log(date)

    function submit (e){
        e.preventDefault()
        if(!name || !age || !date){
            alert('Fill Data Properly')
        }
        console.log(name,age,date)
        addTodo(name, age, date)
        setName('')
        setAge('')
        setDate('')
        
    }

    return (
        <div id='form'>
<h4>Add Todo</h4>
            <form onSubmit={submit}>
               <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} id='name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                <label htmlFor="date">Date</label>
                <input type="date" value={date} id='date' onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>

                <label htmlFor="age">Age</label>
                <input type="number" value={age} id='age' onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>

            <button type="submit">Add Todo</button>
                </div>
            
            </form>      
            
            </div>
    )
}

export default AddTodo