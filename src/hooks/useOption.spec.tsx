import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useUser } from "./useUser";
import { api } from "../api/axios";
import { ReactNode } from "react";

const queryClient = new QueryClient();
const wrapper = (props:{ children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
      {props.children}
  </QueryClientProvider>
)

// const mockData = {
//   id: '1',
//   options: []
// };

describe('useUser hook', () => {
  it('should get the user', async () => {
    const { result } = renderHook(() => useUser("1"), { wrapper });
  });
});
