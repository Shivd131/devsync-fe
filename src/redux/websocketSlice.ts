import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WebSocketState {
  websockets: WebSocket[];
}

const initialState: WebSocketState = {
  websockets: [],
};

const websocketsSlice = createSlice({
  name: 'websockets',
  initialState,
  reducers: {
    addWebSocket: (state, action: PayloadAction<WebSocket>) => {
      state.websockets.push(action.payload);
    },
    removeWebSocket: (state, action: PayloadAction<number>) => {
      state.websockets = state.websockets.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addWebSocket, removeWebSocket } = websocketsSlice.actions;
export default websocketsSlice.reducer;
