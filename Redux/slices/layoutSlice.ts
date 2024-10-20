import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    sidebarCollapsed: false,
  },
  reducers: {
    setSidebarCollapsed: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const { setSidebarCollapsed } = layoutSlice.actions;

export default layoutSlice.reducer;
