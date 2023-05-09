import * as style from "../styles/todo";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Validation } from "../utils/validation";
import { Input } from "../components/input/input";
import { Empty } from "../components/empty/empty";
import { Navbar } from "../components/navbar/navbar";
import { Heading } from "../components/heading/heading";
import { Options } from "../components/options/options";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "../components/buttons/button/button";
import { Notification } from "../components/notfication/notification";
import { Submit } from "../components/buttons/button-submit/button-submit";
import { useNewOption, useDeleteOption, usechangeOption } from "../hooks/useOptions";

type FormValue = {
  new: string;
};

export const Todo = () => {
  const { id } = useParams();
  const { data } = useUser(id!);
  const { mutate, isLoading, isSuccess } = useNewOption(id!);
  const { mutate: remove } = useDeleteOption();
  const { mutate: change } = usechangeOption();
  const [values, setValues] = useState("")
  const [isCopy, setIsCopy] = useState(false)
  const [IsActiveInput, setIsActiveInput] = useState<boolean>(false)
  const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<FormValue>({ resolver: Validation })

  const handleActiveInput = () => getValues("new") !== "" ? setIsActiveInput(true) : setIsActiveInput(false)

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
    submit(value.new)
  }

  const handleCopy = () => {
    // id da URL
    navigator.clipboard.writeText(`http://localhost:5173/votes/${id}`)
    setIsCopy(true)
    setTimeout(() => {
      setIsCopy(false)
    }, 5000);
  }

  return (
    <style.TodoPage>
      <Navbar />

      <style.Todo data-testid="submit" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          {...register("new")}
          isactive={IsActiveInput}
          label="Ensira uma opção:"
          onBlur={handleActiveInput}
        />
        <Submit
          type="submit"
          data-testid="button"
          isLoading={isLoading}
        />
      </style.Todo>

      <AnimatePresence>
        {errors.new?.message && <Notification content={errors.new?.message} />}
      </AnimatePresence>

      {data?.options.length === 0 ? <Empty /> :
        <style.WrapperList>
          <style.Ul>
            <AnimatePresence>
              {data?.options.map(it => (
                <Options
                  key={it.id}
                  value={values}
                  text={it.option}
                  remove={() => remove(it.id)}
                  submit={() => changeOpt(it.id)}
                  onChange={(ev) => setValues(ev.currentTarget.value)}
                />
              ))}
            </AnimatePresence>
          </style.Ul>
        </style.WrapperList>
      }

      {data?.options.length !== 0 && (
        <Button onClick={handleCopy}>
          <Heading size="sm">Compartilhe com amigos!</Heading>
        </Button>
      )}

      {isCopy && <Notification content="Link copiado!" />}
    </style.TodoPage>
  );
}
