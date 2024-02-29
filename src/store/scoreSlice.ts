import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the scores slice
interface ScoresState {
  score: number;
}

const initialState: ScoresState = {
  score: 0,
};

// Create a scoreSlice using createSlice
const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
  },
});

// Export the action creator for setScore
export const { setScore } = scoreSlice.actions;

// Export a selector function to get the score from the state
export const selectScore = (state: { scores: ScoresState }) => state.scores.score;

// Export the reducer
export default scoreSlice.reducer;
