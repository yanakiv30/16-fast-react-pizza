import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOvervuew from "../features/cart/CartOverview";
import Loadering from "./Loadering";
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loadering />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOvervuew />
    </div>
  );
}
