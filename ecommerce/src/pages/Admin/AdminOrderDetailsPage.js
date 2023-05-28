import React from "react";
import axios from 'axios';
import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";

const getOrder = async(id) => {
  const {data} = await axios.get('/api/orders/user/' + id);
  return data
}

function AdminOrderDetailsPage() {
  return <OrderDetailsPageComponent getOrder={getOrder} />;
}

export default AdminOrderDetailsPage;
