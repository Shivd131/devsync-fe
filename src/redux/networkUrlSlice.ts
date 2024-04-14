import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NetworkUrlState {
  networkUrl: string;
}

const initialState: NetworkUrlState = {
  networkUrl: '',
};

const networkUrlSlice = createSlice({
  name: 'networkUrl',
  initialState,
  reducers: {
    setNetworkUrl: (state, action: PayloadAction<string>) => {
      state.networkUrl = action.payload;
    },
    clearNetworkUrl: (state) => {
      state.networkUrl = '';
    },
  },
});

export const { setNetworkUrl, clearNetworkUrl } = networkUrlSlice.actions;
export default networkUrlSlice.reducer;
