import UsersPageComponent from "./components/UsersPageComponent.js";
import axios from "axios";

const fetchUsers = async (abctrl) => {
  const { data } = await axios.get("/api/users", {
    signal: abctrl.signal,
  });
  return data;
};

// const fetchUsers = async (abctrl) => {
//   try {
//     const { data } = await axios.get("/api/users", {
//       signal: abctrl.signal,
//     });
//     return data;
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       console.log("Request canceled:", error.message);
//     } else {
//       console.log("Error:", error.message);
//     }
//   }
// };

function AdminUserPage() {
  return <UsersPageComponent fetchUsers={fetchUsers} />;
}

export default AdminUserPage;






