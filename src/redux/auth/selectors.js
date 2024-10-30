export const selectUsersData = (state) => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state=>state.auth.isLoggedIn
export const selectIsRefresh = (state) => state.auth.isRefresh;
export const selectErrors = (state) => state.auth.error;
// export const selectRestIsLoggedIn = (state) => state.auth.restIsLoggedIn;
// export const selectHomeIsLoggedIn = state => state.auth.homeIsLoggedIn