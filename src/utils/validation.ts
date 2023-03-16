import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  new: yup
    .string()
    .required("Campo em branco!")
    .max(255, "Maximo de caracteres atingido")
    .min(5, "Minimo de caracteres atingido")
    });

export const Validation = yupResolver(schema);