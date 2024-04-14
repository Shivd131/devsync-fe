import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  _id: string;
  plan: string;
  email: string;
  name: string;
}

const initialState: UserState = {
  username: '',
  _id: '',
  plan: '',
  email: '',
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    clearUser(state) {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
