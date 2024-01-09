import { useState } from "react"

const List = () => {
    const [data, setData] = useState([
    { name: '', age: '' }
  ])
    const handleFormChange = () => {
    
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    }

  return (
    <div style={{border: 'thin', padding: '2rem', margin: '1rem'}}>
        Dynamic List Component
        <br/>
    <button onClick={()=>{}} style={{margin: '1rem'}}>Click For Ordered List</button>
    <button onClick={()=>{}} style={{margin: '1rem'}}>Click For Unordered List</button>
    <form>
        {data.map((input, index) => {
          return (
            <div key={index}>
              <input style={{margin: '1rem'}}
                name='name'
                placeholder='Name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <button>Save</button>
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default List