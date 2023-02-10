type initialStateType = {
  IsLoading: boolean;
  IsError: boolean;
};

export const initialState = {
  IsLoading: false,
  IsError: false,
};

type Action = { type: "start" } | { type: "success" } | { type: "error" };

export const loadingReducer = (state: initialStateType, action: Action) => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        IsLoading: !state.IsLoading,
      };

    case "success":
      return {
        ...state,
        isLoading: state.IsLoading,
      };

    case "error":
      return {
        ...state,
        IsError: !state.IsError,
      };

    default:
      return {
        ...state,
      };
  }
};
