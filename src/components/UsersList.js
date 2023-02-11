import { memo } from "react";
import User from "./User"

//memo(Componente[,diffFunction])

const UsersList = ({ usuarios }) => {

  console.log("Render UserList")
  
  return (
    <div>{usuarios.map((usuario,i) => {
        return <User key={i} usuario={usuario}/>
    })}</div>
  )
}

export default memo(UsersList)