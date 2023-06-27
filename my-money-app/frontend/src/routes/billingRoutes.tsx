import { Routes, Route } from "react-router-dom";
import AddBilling from "../components/AddBilling";
import BillingList from "../components/BillingList";

const BillingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BillingList />} />
      <Route path="/add" element={<AddBilling />} />
    </Routes>
  );
};

export default BillingRoutes;
