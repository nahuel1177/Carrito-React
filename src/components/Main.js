import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>
        </main>
    )
}

export default Main;