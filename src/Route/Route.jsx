import {
  createBrowserRouter,
  createRoutesFromElements,
  Route

} from "react-router-dom";
import App from "../App";
import LeftDiv from "../Components/LeftDiv";
import DisplayAllCards from "./../Components/DisplayAllCards";
import Payment from "../Components/Payment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<LeftDiv />}>
        <Route path="" element={<DisplayAllCards />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Route>
  )
);
export default router
