import { useState } from "react";

const Input = ({addTask}) => {
  const [input, setInput] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(input.trim()){
            addTask(input)
            setInput('')
        }
    }

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input type="text" placeholder="enter task" 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Input;
