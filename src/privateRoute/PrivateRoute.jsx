
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute =({children}) => {
    const currentLocation = useLocation().pathname

    const {user} = useContext(ContextAuth)
  
    if(user){

        return children
    }


    return <Navigate state={currentLocation}  to='/login' ></Navigate>
};

PrivateRoute.propTypes = {
    
    children: PropTypes.node
};

export default PrivateRoute;