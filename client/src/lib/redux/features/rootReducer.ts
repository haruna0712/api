import { baseApiSlice } from "@/lib/redux/features/api/baseApiSlice";
import authReducer from "@/lib/redux/features/auth/authSlice";
// import userReducer from "@/lib/redux/features/users/userSlice";
// import postReducer from "@/lib/redux/features/posts/postSlice";

export const rootReducer = {
	[baseApiSlice.reducerPath]: baseApiSlice.reducer,
	auth: authReducer,
	// user: userReducer,
	// post: postReducer,
};
