import {configureStore} from '@reduxjs/toolkit';
import { profileReducer,userReducer,subscriptionReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';


const store=configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course: courseReducer,
        subscription: subscriptionReducer,
        admin: adminReducer,
        other:otherReducer




    },
})
export default store;
// https://coursebundler-app.onrender.com/
// export const server = 'https://coursebundler-app.vercel.app/api/v1';
export const server = 'https://coursebundler-app.onrender.com/api/v1';
