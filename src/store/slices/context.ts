import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Sidebar {
  tamanio: string;
}

interface State {
  sidebar: Sidebar;
}

const initialState: State = {
  sidebar: {
    tamanio: "15%",
  },
};

export const contextSlice = createSlice({
  name: "context",
  initialState: initialState,
  reducers: {
    changeTamanio: (state: State, action: PayloadAction<Sidebar>) => {
      const { tamanio }: Sidebar = action.payload;
      state.sidebar.tamanio = tamanio;
    },
  },
});

export const { changeTamanio } = contextSlice.actions;

export default contextSlice.reducer;

