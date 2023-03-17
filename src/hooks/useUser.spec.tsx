import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useUser } from "./useUser";
import { api } from "../api/axios";
import { ReactNode } from "react";

const queryClient = new QueryClient();
const wrapper = (props:{ children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  </QueryClientProvider>
)

const mockData = {
  id: '1',
  options: []
};

describe('useUser hook', () => {
  it('should get the user', async () => {

    const apiGetSpy = jest.spyOn(api, 'get').mockResolvedValue({ data: mockData });

    const { result } = renderHook(() => useUser("1"), { wrapper });
    await waitFor(() => expect(result.current.data).toBe(mockData));
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('GetUser/1'));
  });
  
  it('should get nothing with a wrong user', async () => {
    const mockDataEmpty = {};
    const apiGetSpy = jest.spyOn(api, 'get').mockResolvedValue({ data: mockDataEmpty });
    
    const { result } = renderHook(() => useUser("2"), { wrapper });
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('GetUser/2'));
    await waitFor(() => expect(result.current.data).toBe(mockDataEmpty));
  });
});
