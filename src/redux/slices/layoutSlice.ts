import { createSlice } from "@reduxjs/toolkit";

export const isScreenSmall = () => {
  return window.innerWidth < 1024;
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    isLargeSidebarOpen: true,
    isSmallSidebarOpen: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      if (isScreenSmall()) {
        state.isSmallSidebarOpen = !state.isSmallSidebarOpen;
      }
      state.isLargeSidebarOpen = !state.isLargeSidebarOpen;
    },
    closeSidebar: (state) => {
      if (isScreenSmall()) {
        state.isSmallSidebarOpen = false;
      }
      state.isLargeSidebarOpen = false;
    },
    setIsSmallSidebarOpen: (state, action) => {
      state.isSmallSidebarOpen = action.payload;
    },
  },
});

export const { toggleSidebar, closeSidebar, setIsSmallSidebarOpen } =
  layoutSlice.actions;

export default layoutSlice.reducer;
export const layoutSelector = (state: any) => state.layout;
