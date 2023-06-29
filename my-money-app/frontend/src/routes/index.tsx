import { Routes, Route } from "react-router-dom";
import Content from "../components/Content";
import Register from "../components/Register";
import AddBilling from "../components/AddBilling";
import BillingList from "../components/BillingList";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route
        path="/register"
        element={
          <Register>
            <BillingList />
          </Register>
        }
      />
      <Route
        path="/register/add"
        element={
          <Register>
            <AddBilling />
          </Register>
        }
      />
    </Routes>
  );
};

export default RoutesManager;
