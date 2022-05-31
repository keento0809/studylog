import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthProps {
  children: ReactNode;
}

const Auth: React.FunctionComponent<AuthProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      navigate("/login");
    }
  });

  if (loading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default Auth;
