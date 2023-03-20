import { api } from "../api/axios";
import { useUser } from "./useUser";
import { renderHook, waitFor } from "@testing-library/react";
import { mockNewUser, mockUserEmpty, wrapperUser } from "../utils/mocks/hooks-mocks";

describe('useUser hook', () => {
  it('should get the user', async () => {

    const apiGetSpy = jest.spyOn(api, 'get').mockResolvedValue({ data: mockNewUser });

    const { result } = renderHook(() => useUser("1"), { wrapper: wrapperUser });
    await waitFor(() => expect(result.current.data).toBe(mockNewUser));
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('/GetUser/1'));
  });

  it('should get nothing with a wrong user', async () => {
    const apiGetSpy = jest.spyOn(api, 'get').mockResolvedValue({ data: mockUserEmpty });

    const { result } = renderHook(() => useUser("2"), { wrapper: wrapperUser });
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('/GetUser/2'));
    await waitFor(() => expect(result.current.data).toStrictEqual(mockUserEmpty));
  });
});
