import { createSlice } from '@reduxjs/toolkit';

const initialState = { username: 'jjj' };
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});
console.log(userSlice);
export const {updateName}=userSlice.actions;
export default userSlice.reducer;