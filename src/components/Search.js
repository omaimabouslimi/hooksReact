
import { useState } from 'react';
import Card from './MovieCard';
function SearchList({ SearchFiltrer }) {
  // const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
  
  const [input,setInput] = useState(null);
   console.log(input);
  return (
    <div>
      {/* {filtered} */}
      <input type="text" onChange = {(event)=>setInput(event.target.value)}/> 
      <button onClick={()=>SearchFiltrer(input)} >ONclick</button>
    </div>
  );
}

export default SearchList;