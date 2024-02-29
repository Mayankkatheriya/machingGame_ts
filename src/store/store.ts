import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './scoreSlice';

// Configure the Redux store with the scoreReducer
export const store = configureStore({
  reducer: {
    scores: scoreReducer,
  },
});

// Export the root state type
export type RootState = ReturnType<typeof store.getState>;

// Export the store dispatch type
export type AppDispatch = typeof store.dispatch;
