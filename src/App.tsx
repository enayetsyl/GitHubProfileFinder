import { useState } from "react"
import Button from "./components/Button"
import Heading from "./components/Heading"
import { ProfileInfo } from "./types"
import Profile from "./components/Profile"



function App() {
 
  const [userName, setUserName] = useState('')
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | undefined >()

  const fetchUser = async() => {
     fetch(`https://api.github.com/users/${userName}`)
  .then(res => res.json())  
  .then(data => setProfileInfo(data))
  }
  console.log(profileInfo)

  return (
  
  <>
  <div className="max-w-xs mx-auto lg:max-w-4xl lg:mx-auto space-y-10 my-10">

  <Heading className="">GitHub Profile Finder</Heading>

 <div className="flex flex-col items-center gap-5 justify-center">
 <input type="text"
  className="outline-none px-3 py-2 border border-blue-500 rounded-lg w-full"
  placeholder="Github user name"
  autoFocus
  onChange={(e) => setUserName(e.target.value)}
  />
  <Button 
  className='px-10'
  onClick={fetchUser}>Search</Button>
 </div>
 {
  profileInfo && <Profile profileInfo={profileInfo}/>
 }
 
  </div>
  </>
  
  )
}

export default App
