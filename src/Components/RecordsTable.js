import { useEffect,useState } from "react";

const RecordsTable =()=>{
    const Employee = ["EmployeeName","Email","Phone","State","Department","Language","Action"];
    const [data, setData] = useState([]);
    
    const getData =async()=>{
        const res = await fetch("http://localhost:8084/Employee");
        const findData = await res.json();
        setData(findData);
    }
    useEffect(()=>{
        getData()
    },[]);

    const handleDeltButton =(id)=>{
        fetch(`http://localhost:8084/Employee/${id}`, {
        method: 'DELETE'
        }).then(()=>{
            getData() 
        })
     }
     return(
        <>
         <div className="table-responsive mt-5">
            <table className="table table-hover bg-light">
                 <thead className="bg-danger text-light">
                      <tr>
                          {Employee.map((emp)=>{return <th>{emp}</th>})}
                      </tr>
                 </thead>
                 <tbody>
                          {data.map((items)=>{
                            return(
                                <tr key={items.id}>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                    <td>{items.state}</td>
                                    <td>{items.department}</td>
                                    <td>{items.language}</td>
                                    <td>
                                        <i class="bi bi-trash text-danger" onClick={()=>handleDeltButton(items.id)}></i>
                                    </td>
                                </tr>
                            )
                            })}
                 </tbody>
            </table>
          </div>
       </>
    )
}
export default RecordsTable;
