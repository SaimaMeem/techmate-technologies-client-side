import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user);
    let location = useLocation();
    if (loading || adminLoading) {
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
  
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;