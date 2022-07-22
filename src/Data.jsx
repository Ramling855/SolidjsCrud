import axios from "axios";
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { up } from "./Add";



const Data=()=>{

    
    
    // const [alldata,setAlldata]=createSignal({})
    const [form,setForm]=createStore({
        name:{},
        sname:{}
    })
const updated=()=>{
    console.log(up()._id)
    axios.put(`http://localhost:9000/data/${up()._id}`,form).then(()=>console.log("updated")).catch(()=>console.log("err"))
    // console.log(alldata(),"alldta")
    console.log(form,"form")
}

    
    return <div>

        <h1>data page</h1>
        <label htmlFor="">name</label>
        <input type="text" onChange={(e)=>setForm({name:e.target.value})} value={up().name} 
       />
        <label htmlFor="">surname</label>
        <input type="text" onChange={(e)=>setForm({sname:e.target.value})} value={up().sname}/>
        <button onClick={updated}>update</button>
<h1>{form.name}</h1>
<h1>{form.data}</h1>
    </div>
}
export default Data;