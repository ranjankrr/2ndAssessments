import RecordsTable from './Components/RecordsTable';
import Form from './Components/Form';
import Data from './Components/Data'
import './App.css';

const App  =()=>{
   return(
    <>
      <div className="d-flex">
          <Form data={Data}/>
          <RecordsTable/>
      </div>
    </>
  )
}
export default App;