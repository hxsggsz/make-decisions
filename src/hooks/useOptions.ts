import { api } from "../api/axios";
import { useMutation, useQueryClient } from "react-query";

type NewOption = {
  id: string | undefined;
  option: string;
};

export const useNewOption = (id: string) => {
  const query = useQueryClient();
  const mutate = useMutation({
    mutationFn: (data: NewOption) => {
      return api.post(`/crud/${id}`, data);
    },
    onSuccess: () => {
      //invalida a query e a refaz com o novo conteúdo dentro
      query.invalidateQueries(["GetUser"]);
    },
  });

  return mutate;
};

export const usechangeOption = () => {
  const query = useQueryClient();
  const mutate = useMutation({
    mutationFn: (newOption: NewOption) => {
      return api.put(`/crud/${newOption.id}`, { option: newOption.option });
    },
    mutationKey: "changeOption",
    onSuccess: () => {
      query.invalidateQueries(["GetUser"]);
    },
  });

  return mutate;
};

export const useDeleteOption = () => {
  const query = useQueryClient();
  const mutate = useMutation({
    mutationFn: (id: string) => {
      return api.delete(`/crud/${id}`);
    },
    onSuccess: () => {
      query.invalidateQueries(["GetUser"]);
    },
  });

  return mutate;
};
