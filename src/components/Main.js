import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartContainer from "./CartContainer";
import CheckOut from "./CheckOut";
import Sale from "./Sale"
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<CartContainer />} />
                <Route path="/checkuot" element={<CheckOut />} />
                <Route path="/venta" element={<Sale />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Main;