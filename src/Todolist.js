import React, { useState } from 'react'

const Todolist = ({ todoItem, onDelete, updateTodo }) => {

    const [search, setSearch] = useState('')
   

    console.log(search)
    let searchResults = todoItem;

    function Search() {
        
        if (search !== '') {
            searchResults = searchResults.filter((e) => e.name.includes(search))
            console.log('search',searchResults)
            return searchResults
        }
        else{
            return searchResults
        }
    }

    
    return (

        <div>
            {  todoItem.length !==0?

                (<div id='search'> <input id type="text" onChange={(e) => setSearch(e.target.value)} name="" id="" />
            <button onClick={Search}>Search</button>
            </div>):''
            }

            {

                Search().length !== 0 ?
                    (<table id="table">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th class='name'>Name</th>
                                <th >Age</th>
                                <th >Date</th>
                                <th>Delete</th>
                                {/* <th>Update</th> */}
                            </tr>
                        </thead>
                        <tbody id='tabledata'>

                            {Search()?.map((item, i) => {
                                return (
                                    <tr >
                                        <td>{i + 1}</td>
                                        <td className='name'>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.date}</td>
                                        <td> <button onClick={() => onDelete(item, i)}>Delete</button> </td>
                                        {/* <td> <button onClick={()=>updateTodo(item,i)}>Update</button> </td> */}

                                    </tr>
                                )
                            
                            }
                            )
                            }

                        </tbody>
                    </table>

                    ) : <div id="emptytodo">No Todos To dispaly !</div>}





        </div>
    )

}

export default Todolist