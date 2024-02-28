import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the scores slice
interface ScoresState {
  score: number; // Initial score value
}

// Define the initial state
const initialState: ScoresState = {
  score: 0,
};

// Create a scoreSlice using createSlice
const scoreSlice = createSlice({
  name: 'scores', // Name of the slice
  initialState, // Initial state
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload; // Update the score in the state with the payload value
    },
  },
});

// Export the action creator for setScore
export const { setScore } = scoreSlice.actions;

// Export a selector function to get the score from the state
export const selectScore = (state: { scores: ScoresState }) => state.scores.score;

// Export the reducer
export default scoreSlice.reducer;
