import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { role } = useContext(AuthContext);

  if (role !== "Manager") return <p className="text-center mt-10 text-red-600">Access Denied</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Manager Dashboard</h1>
      <p className="mt-4">Stats & Operations Overview</p>
    </div>
  );
};

export default Dashboard;
