import { createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import axios from "axios"
import { useNavigate } from "solid-app-router";
// createStore
const[up,setUp]=createSignal()
const Add=()=>{
    const navigate=useNavigate()
  
    const [alldata,setAlldata]=createSignal({})
    const [alldat,setAlldat]=createSignal(0)
    const update=(item)=>{
setUp(item)
        navigate("/data")
console.log(item)
    }
    const deletedata=(item)=>{
        axios.delete(`http://localhost:9000/delete/${item._id}`).then(()=>console.log("deleted")).catch(()=>console.log("err"))
        setAlldat(alldat()+2)

        console.log(item)
        

    }
    const [state, setState] = createStore({})
    function ram(){
        axios.get("http://localhost:9000/read").then((res)=>{
            setAlldata(res.data)
        setState(res.data)
        }
        
        ) 
       }

       const [form,setForm]=createStore({
        name:{},
        sname:{}
    })
      createEffect(()=>{
        console.log(alldat())
        setTimeout(()=>{
            ram()
         console.log("data Changed")
        },1000)
        ram()
        alldat()
       
      })

      
const updated=()=>{
    
    axios.post(`http://localhost:9000/post`,form).then(()=>ram()).catch(()=>console.log("err"))
    setAlldat(alldat()+2)
    console.log(form,"form")
    console.log(alldat(),"alldata")
    
    // return ram();
}



    return <div>



<label htmlFor="">name</label>
        <input type="text" onChange={(e)=>setForm({name:e.target.value})} 
       />
        <label htmlFor="">surname</label>
        <input type="text" onChange={(e)=>setForm({sname:e.target.value})} />
        <button onClick={updated}>add</button>


<For each={alldata()} fallback={<div>Loading...</div>}>
  {(item, index) => (
    <div>
      {index()+1} {item.name}{item.sname}
      <button onClick={()=>update(item)}>update</button>
      <button onClick={()=>deletedata(item)}>delete</button>
    </div>
  )}
</For>
    </div>
}
export {up}
export default Add;