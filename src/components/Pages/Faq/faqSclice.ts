import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FaqState {
  checkboxes: Record<string, boolean>;
}

const initialState: FaqState = {
  checkboxes: {},
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setFaqChecked: (
      state,
      action: PayloadAction<{ id: string; checked: boolean }>
    ) => {
      state.checkboxes[action.payload.id] = action.payload.checked;
    },
  },
});

export const { setFaqChecked } = faqSlice.actions;
export default faqSlice.reducer;