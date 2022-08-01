import React , {useState} from 'react';
import './index.css';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";


const App = () => {
    const [inputdata, setinputdata] = useState("");
    const [list_item, setlist_item] = useState([]);
    const [edititem, setedititem] = useState(" ");
    const [toggle, settoggle] = useState(false);

    const additem =()=>{
      if(!inputdata)
       {
         alert("plzz add item");
         }
      else if(inputdata && toggle)
      {
        setlist_item(list_item.map((curElem)=>{
          if(curElem.id===edititem){
            return {...curElem, name:inputdata}

          }
          else
          return curElem;
          

        }));
        setinputdata("");
        setedititem(null);
        settoggle(false);
      }
       else{
        const new_inputdata ={
          id:new Date().getTime().toString(),
          name:inputdata,

        }
          setlist_item([...list_item, new_inputdata]);
          setinputdata("");
          }
}
const editItem=(index)=>{
  const todo_edititem=list_item.find((curElem)=>{
    return curElem.id===index;
  })
  setinputdata(todo_edititem.name);
  setedititem(index);
  settoggle(true);

}
const deleteItem=(index)=>{
  
    const updated_item=list_item.filter((curElem)=>{
      return curElem.id!==index;
    }
  );
  setlist_item(updated_item)

}


  return (
      <>
      <div className='main-div'>
        <div className='center-div'>
          <h1>  ToDo List</h1>
          
          <input type="text" placeholder="add a item" onChange={(event)=>setinputdata(event.target.value)} value={inputdata}/>
         {toggle ? ( <button onClick={additem}><FaPen/></button>):(<button onClick={additem}><GrFormAdd/></button> )}
          
        
          <div>
          {
            list_item.map((curElem)=>{
              return ( 
                <>
                <li>{curElem.name}
                <button onClick={()=>editItem(curElem.id)}><FaPen/></button>
                <button onClick ={()  => deleteItem(curElem.id)} ><MdDelete/></button>
          </li>
                
          </>);


            })}
            
          

             
            
            
            
          
          </div>
        </div>

      </div>
    
    </>
  );
};

export default App;