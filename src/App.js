import { useState } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  
  return (
    <div>
      <input 
        onChange={onChange}
        value={toDo}
        type="text" 
        placeholder="Write you todo.." 
      />

    </div>
  );
}

export default App;
