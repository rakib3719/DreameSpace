
import PropTypes from 'prop-types';
import { createContext } from 'react';

export const ContextAuth = createContext(null)


const hero = 'hero'
const AuthContext = ({children}) => {
    return (
  <ContextAuth.Provider  value={hero} >
{children}

  </ContextAuth.Provider>
    );
};

AuthContext.propTypes = {
    
    children: PropTypes.node
};

export default AuthContext;