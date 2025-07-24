import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setAuth, setLogout } from "@/lib/redux/features/auth/authSlice";

export const baseApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({baseUrl: "/api/v1", credentials: "include"}),
	endpoints: (builder) => ({}),
});
