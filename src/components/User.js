import { memo } from "react";

const Usuario = ({usuario}) => {

    console.log(" Render usuario")

    return (
    <div>{usuario.nombre} - {usuario.email}</div>
  )
}

export default memo(Usuario)