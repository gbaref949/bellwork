import { useState } from "react"

const List = () => {
    const [data, setData] = useState("")
    
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
    {/* <button onClick={()=>{handleSubmit}}></button> */}
    </div>
  )
}

export default List