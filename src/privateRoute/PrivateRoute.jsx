
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import {  ColorRing } from 'react-loader-spinner';

const PrivateRoute =({children}) => {
    const currentLocation = useLocation().pathname

    const {user, loader} = useContext(ContextAuth)
  
    if(loader){
        return <div  className='flex justify-center'>

<ColorRing
        
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}

        
      ></ColorRing>
        </div>
    }
    if(user){

        return children
    }


    return <Navigate state={currentLocation}  to='/login' ></Navigate>
};

PrivateRoute.propTypes = {
    
    children: PropTypes.node
};

export default PrivateRoute;