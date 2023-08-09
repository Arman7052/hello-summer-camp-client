import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(null);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const response = await fetch( `https://hello-summer-camp-server.vercel.app/users/admin/${user?.email}`);
        const data = await response.json();
        setIsAdmin(data.admin);
        setIsAdminLoading(false);
      } catch (error) {
        console.error("Error fetching admin status:", error);
      }
    };

    if (!loading) {
      fetchAdminStatus();
    }
  }, [user?.email, loading]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;

