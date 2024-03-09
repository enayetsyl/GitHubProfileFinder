import {  Navigate, Route,  Routes } from "react-router-dom"
import { NewNote } from "./constants"


function App() {
 

  return (
  
  <div className="container">
    <Routes>
    <Route path='/' element={<h1 className="font-bold text-5xl text-red-500">Hi</h1>}/>
    <Route path='/new' element={<NewNote />}/>
    <Route path="/:id">
      <Route index element={<h1>Show</h1>}/>
      <Route path="edit" element={<h1>Edit</h1>}/>

    </Route>
    <Route path='*' element={<Navigate to='/'/>}/>
  </Routes>
  </div>
  
  )
}

export default App
