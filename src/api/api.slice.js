import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../store/auth/auth.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: String.concat(
    import.meta.env.VITE_API_HOST,
    ":",
    import.meta.env.VITE_API_PORT,
    "/",
    import.meta.env.VITE_API_BASE
  ),
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const authToken = getState().auth.token;
    if (authToken) {
      headers.set("authorization", String.concat("Bearer ", authToken));
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);

  if (response?.error?.originalStatus === 403) {
    console.log("Sending refresh token...");
    const refreshRepsonse = await baseQuery("/auth/refresh", api, extraOptions);
    if (refreshRepsonse?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshRepsonse.data, user }));
      await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return response;
};

export default apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({}),
});
