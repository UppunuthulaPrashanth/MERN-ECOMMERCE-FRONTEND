import authReducers from './auth.reducers';
import userReducers from './user.reducers';
import categoryReducers from './category.reducers';
import productsReducers from './products.reducers';
import ordersReducers from './orders.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth:authReducers,
    user:userReducers,
    category:categoryReducers,
    product:productsReducers,
    order:ordersReducers
});

export default rootReducer;