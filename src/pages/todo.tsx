import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Input } from "../components/input/input";
import { Submit } from "../components/buttons/button-submit/button-submit";
import { PaperPlaneRight } from "phosphor-react";
import * as style from "../styles/todo";
import { useNewOption, useDeleteOption, usechangeOption } from "../hooks/useOptions";
import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { Options } from "../components/options/options";
import { Empty } from "../components/empty/empty";
import { useForm, SubmitHandler } from 'react-hook-form';
import { AnimatePresence } from "framer-motion";
import { Validation } from "../utils/validation";
import { Notification } from "../components/notfication/notification";

type FormValue = {
  new: string;
};

export const Todo = () => {
  const { id } = useParams();
  const { data } = useUser(id!);
  const { mutate, isLoading, isSuccess } = useNewOption();
  const { mutate: remove } = useDeleteOption();
  const { mutate: change } = usechangeOption();
  const [values, setValues] = useState("")
  const [Error, setError] = useState("")

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValue>({ resolver: Validation })

  useEffect(() => {
    reset({ new: "" })
  }, [isSuccess])


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

  const onSubmit: SubmitHandler<FormValue> = (value) => {
    const match = data?.options.find(opt => opt.option === value.new)
    if (!match) {
      submit(value.new)
    }
    setError("Por favor, não repita a mesma opção!")
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

      <AnimatePresence>
        {Error && <Notification content={Error} />}
        {errors.new?.message != undefined && <Notification content={errors.new?.message} />}
      </AnimatePresence>

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
}
