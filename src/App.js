import Login from "./Login";
import User from "./Users";

export const Introduction = () => {
  return <h2>What is React?</h2>;
  
};
const App = ()=>{
  return(
    <div>
   {/* {<Login/>} */}
   <User/>

    </div>

  )
}
export default App;



