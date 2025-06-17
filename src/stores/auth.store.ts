import { create } from "zustand";

type FieldError = { field: string; message: string };

type AuthState = {
  isAuthenticated?: boolean;
  error?: FieldError[] | null;
  isLoading?: boolean;
  isCheckingAuth?: boolean;
  message?: string | null;
};

type AuthAction = {
  setAuthState: (state?: AuthState) => void;
};

const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
  isLoading: false,
  message: null,
};

const useAuthStore = create<AuthState & AuthAction>()((set) => ({
  ...initialState,
  setAuthState: (state = {}) => {
    set({
      isAuthenticated: state.isAuthenticated,
      error: state.error,
      isLoading: state.isLoading,
      message: state.message,
    });
  },
}));

export default useAuthStore;
