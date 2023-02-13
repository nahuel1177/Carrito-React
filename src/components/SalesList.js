import { memo } from "react";
import Sale from "./Sale"

//memo(Componente[,diffFunction])

const SalesList = ({ usuarios }) => {
  
  return (
    <div>{usuarios.map((usuario,i) => {
        <Sale key={i} usuario={usuario}/>
    })}</div>
  )
}

export default memo(SalesList)