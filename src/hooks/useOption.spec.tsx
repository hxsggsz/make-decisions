import { api } from "../api/axios";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useDeleteOption, useNewOption, usechangeOption } from "./useOptions";
import { mockNewOption, mockOptionUpdated, wrapper } from "../utils/mocks/hooks-mocks";

describe('useNewOption hook', () => {
  it('should create an user', async () => {
    const { result } = renderHook(() => useNewOption(), { wrapper });

    const apiGetSpy = jest.spyOn(api, 'post').mockResolvedValue({ data: mockNewOption });
    await act(async () => {
      result.current.mutate({
        id: "1",
        option: "test",
      });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() => expect(result.current.data?.data).toBe(mockNewOption));
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('/CreateOption', { "id": "1", "option": "teste" }));
  });
  it('should create an user', async () => {
    const { result } = renderHook(() => useNewOption(), { wrapper });

    const apiGetSpy = jest.spyOn(api, 'post').mockRejectedValue(new Error());

    await act(async () => {
      result.current.mutate({
        id: "",
        option: "",
      });
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
    await waitFor(() => expect(apiGetSpy).toBeCalledWith("/CreateOption", {"id": "", "option": ""}));
  });

});

describe('usechangeOption hook', () => {
  it('should change the current user', async () => {
    const { result } = renderHook(() => usechangeOption(), { wrapper });

    const apiGetSpy = jest.spyOn(api, 'put').mockResolvedValue({ data: mockOptionUpdated });
    await act(async () => {
      result.current.mutate({
        id: "1",
        option: "teste updated",
      });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() => expect(result.current.data?.data).toBe(mockOptionUpdated));
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('/ChangeUserOption', { "id": "1", "option": "teste updated" }));
  });
  it('should not change the current user', async () => {
    const { result } = renderHook(() => useNewOption(), { wrapper });

    const apiGetSpy = jest.spyOn(api, 'put').mockRejectedValue(new Error());
    await act(async () => {
      result.current.mutate({
        id: "1",
        option: "teste",
      });
    });

    await waitFor(() => expect(result.current.isError).toBe(true));
    await waitFor(() => expect(result.current.data).not.toBe(mockOptionUpdated));
    await waitFor(() => expect(apiGetSpy).not.toBeCalled());
  });
});

describe('useDeleteOption hook', () => {
  it('should change the current user', async () => {
    const { result } = renderHook(() => useDeleteOption(), { wrapper });

    const apiGetSpy = jest.spyOn(api, 'delete').mockResolvedValue({});
    await act(async () => {
      result.current.mutate("1");
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    await waitFor(() => expect(result.current.data?.data).toBeUndefined());
    await waitFor(() => expect(apiGetSpy).toBeCalledWith('/RemoveUserOption/1'));
  });
});
