import react from 'react'
import "./style.css"
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact  from './Pages/Contact/contact'




const App = () =>{

return(



  <div className="home">

<Contact />
<Router>

<Routes>
  <Route exact path='/' element ={<contact />}/>
</Routes>



</Router>



  </div>
)

}

export default App