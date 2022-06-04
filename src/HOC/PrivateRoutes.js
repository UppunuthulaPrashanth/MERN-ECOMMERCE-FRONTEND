import {React} from  'react';
// import {Navigate, Route} from 'react-router-dom';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = window.localStorage.getItem('token'); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/Signin" />;
}

// const PrivateRoute = ({component:Component, ...rest}) => {
//         return <Route {...rest} component={(props)=>{
//                 const auth = window.localStorage.getItem('token');
//                 if(auth){
//                         return <Component {...props} />
//                 }else{
//                         return <Navigate to="/Signin" />
//                 }
//         }} />
//         // const auth = window.localStorage.getItem('token');

//         // return auth ?<Navigate to="/" /> : <Navigate to="/Signin" />;
// }
export default PrivateRoute; 