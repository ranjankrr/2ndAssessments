import React,{useState} from 'react';
const Form =({data})=>{
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [phone, setPhone] = useState("")
      const [state, setState] = useState("")
      const [department, setDepartment] = useState("")
      const [language, setLanguage] = useState([])
    
     const handleSubmit =()=>{
        const record ={name,email,phone,state,department,language}
            fetch("http://localhost:8084/Employee",{
              method:"POST",
              headers:{"Content-Type": "application/json"},
              body:JSON.stringify(record)
            }).then(()=>{
              console.log("success")
            })
        }
       const handleLanguage =(e)=>{
            const value =e.target.value;
            const checked =e.target.checked;
            if(checked){
              setLanguage([...language, value]);
            }
            else{
              setLanguage(language.filter((elem)=>elem !== value))
            }
      }
    return(
      <div className="main-container">
        <div className="form-container">
            <h5>Employee Details!</h5>
          <form onSubmit={handleSubmit}>
             <div className="input-text">
               <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Employee Name..."/>
               <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Eamil..."/>
               <input type="number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Your Phone Number.."/>
            </div>  
               <select name="state" value={state} onChange={(e)=>setState(e.target.value)}>
                   <option>--Select your state--</option>
                     {
                      data.map((State)=>{ return <option>{State.state}</option>})
                     }
               </select><br/>
             <div className="depart-lang">
               <div>
               <label>Department:</label>
               {
                  data.map((dept)=>{return <div><input type="radio" name="department" value={dept.department} onChange={(e)=>setDepartment(e.target.value)} />{dept.department}</div>})
               }
               </div>
               <div>
               <label>Language Known:</label>
               {
                data.map((lang)=>{return <div><input type="checkbox" name="language" value={lang.language} onChange={handleLanguage} />{lang.language}</div>})
               }
               </div>
             </div>
               <button className="btn-submit">Submit</button>
           </form>
          </div>
      </div>
    )
}
export default Form;