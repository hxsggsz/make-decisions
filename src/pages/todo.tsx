import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Input } from "../components/input/input";
import { Submit } from "../components/buttons/button-submit/button-submit";
import { PaperPlaneRight } from "phosphor-react";
import * as style from "../styles/todo";
import { useNewOption, useDeleteOption, usechangeOption } from "../hooks/useOptions";
import { FormEvent, useState } from "react";
import { useUser } from "../hooks/useUser";
import { Options } from "../components/options/options";
import { Empty } from "../components/empty/empty";
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence } from "framer-motion";
import { Validation } from "../utils/validation";

type FormValue = {
  new: string;
  change: string;
};

// export const useForm = () => {
  //   const [errors, setErrors] = useState("")
  
//   const handleChange = (e: FormEvent<HTMLInputElement>) => {
//     const value = e.currentTarget.value
//     const name = e.currentTarget.name

//     setValues({
//       ...values,
//       [name]: value
//     })
//   }

//   const validate = (value: string) => {
//     if (!value) {
//       setErrors("Esse campo não pode estar em branco!")
//     }
//     if(value.length <= 5 || value.length >= 225 || value.length <= 5 || value.length >= 225) {
//       setErrors("Sua opção precisa ter um tamanho entre 5 e 225")  
//     }
//     setErrors("")
//   }

//   return {
  //     values,
  //     errors,
  //     validate,
  //     handleChange
  //   }
// }

export const Todo = () => {
  const { id } = useParams();
  const { data } = useUser(id!);
  const { mutate, isLoading } = useNewOption();
  const { mutate: remove } = useDeleteOption();
  const { mutate: change } = usechangeOption();
  const [values, setValues] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm<FormValue>({resolver: Validation})

  const submit = (option: string) => {
    const newOption = {
      id,
      option,
    };
    mutate(newOption);
  };

  const changeOpt = (id: string) => {
    const newOption = {
      id,
      option: values,
    };
    change(newOption)
  }

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    submit(data.new)
  }

  return (
    <style.TodoPage>
      <Navbar />

      <style.Todo onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Ensira uma opção:"
          type="text"
          {...register("new")}
          />
        <Submit type="submit" isLoading={isLoading}>
          <PaperPlaneRight size={28} weight="bold" color="white" />
        </Submit>
      </style.Todo>
{/* {errors.new?.message} */}
      {data?.options.length === 0 ? <Empty /> :
        <style.Ul>
          <AnimatePresence>
          {data?.options.map(it => (
            <Options
              key={it.id}
              value={values}
              onChange={(ev) => setValues(ev.currentTarget.value)}
              submit={() => changeOpt(it.id)}
              remove={() => remove(it.id)}
            >
              {it.option}
            </Options>
          ))}
          </AnimatePresence>
        </style.Ul>
      }
    </style.TodoPage>
  );
};
