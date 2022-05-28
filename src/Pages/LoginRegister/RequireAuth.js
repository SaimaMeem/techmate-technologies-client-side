import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <>
           <section className="pt-36 pb-28">
                <div className="text-center">
                    <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-dark-sky-blue font-bold
        " role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </section>
        </>
    }
  
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;