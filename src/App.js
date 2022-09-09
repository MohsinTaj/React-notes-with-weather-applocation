//rfce
import React,{useState} from 'react'
import axios from 'axios'   // 3rd part api ke liye he ye library
import ShowTemp from './ShowTemp';
import './index.css';
import Todo from './Components/Todo';
function App() {
  const [testing,settesting] = useState()
    const[city,setCity]=useState("");
    const[data,setData]=useState({
        description:"", 
        temp:0,
        temp_max:0,
        temp_min:0,
        humidity:0,
        sunrise:0,
        country:""

    })
const handlerTest = () => {
settesting(
<div>
<Todo/>
<button className='btn btn-primary mx-3 my-2 mr-auto ' type=' sumbit' onClick={handlerTest}>-</button>

</div>   
)
 }
  
   
  
const handleClick=()=>{
  
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b081685f470be409998bcbc7f54f3adf`)
  .then((response)=>{
    setData({
        description:response.data.weather[0].description,
        temp:response.data.main.temp,
        temp_max:response.data.main.temp_max,
        temp_min:response.data.main.temp_min,
        humidity:response.data.main.humidity,
        sunrise:response.data.sys.sunrise,
        sunset:response.data.sys.sunset,

        country:response.data.sys.country,
    })
  })


}
  return (
    <>
    <body>
    <div> </div>
    <div className='container text-center my-2 image'>
     
      <h1>Weather app Using React JS</h1>
      <input type="text" placeholder='city name' className='from-control' value={city} onChange={(e)=>{
          setCity(e.target.value)
      }} 
      />
      <button className='btn btn-primary mx-3 my-2 ' type='submit'  onClick={handleClick} >get temp</button>
      <button className='btn btn-primary mx-3 my-2 ' type=' sumbit' onClick={handlerTest}>+</button>
      {testing}
      </div>
    
   
    
<ShowTemp text={data}></ShowTemp>

</body>
    </>
  )
    }

export default App