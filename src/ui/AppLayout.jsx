import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOvervuew from "../features/cart/CartOverview";
export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOvervuew />
    </div>
  );
}
