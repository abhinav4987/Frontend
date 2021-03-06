import React,{Fragment} from 'react'
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ isAdmin, component: Component, ...rest}) {

    const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    return (
        <Fragment>
            {
                loading === false && (
                    <Route 
                        {...rest}
                        render={(props) => {
                            if (isAuthenticated === false) {
                                return <Navigate to="/auth" />;
                            }
                            if (isAdmin === true && user.role !== "admin") {
                                return <Navigate to="/home" />;
                            }
                            
                            return <Component {...props} />;
                        }}
                    />
                )
            }
        </Fragment>
    )
}

export default ProtectedRoute