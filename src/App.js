import { useState } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDo("");
  };
 

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write you todo.." 
        />
      <button>Add to Do</button>
      </form>  
    </div>
  );
}

export default App;
