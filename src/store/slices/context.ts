import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface State {
  sidebar: boolean;
  viewForm: string;
}

const initialState: State = {
  sidebar: false,
  viewForm: 'registrar'
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
      const viewForm: any = action.payload;
      state.viewForm = viewForm
    }
  },
});

export const { setClickSidebar, changeViewForm } = contextSlice.actions;

export default contextSlice.reducer;

