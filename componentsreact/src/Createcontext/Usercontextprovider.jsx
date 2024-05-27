import React from 'react'
import Usercontext from './Usercontext'
const Usercontextprovider = ({Children}) =>{
    const [User, setUser] = React.useState(null)
  return (
    <Usercontext.Provider value={{User,setUser}}>
        {Children}
    </Usercontext.Provider>
  )
}

export default Usercontextprovider