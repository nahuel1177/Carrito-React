import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import CheckOut from "./CheckOut"
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkuot" element={<CheckOut />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Main;