import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface State {
  sidebar: boolean;
  view_form: string;
}

const initialState: State = {
  sidebar: false,
  view_form: 'registrar'
};

export const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    setClickSidebar: (state: State, action: PayloadAction<boolean>) => {
      const sidebar: boolean = action.payload;
      state.sidebar = sidebar;
    },
    changeViewForm: (state: State, action: PayloadAction<string>) => {
      const view_form: any = action.payload;
      state.view_form = view_form
    }
  },
});

export const { setClickSidebar, changeViewForm } = contextSlice.actions;

export default contextSlice.reducer;

