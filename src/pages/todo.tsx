import * as style from "../styles/todo";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PaperPlaneRight } from "phosphor-react";
import { Validation } from "../utils/validation";
import { Input } from "../components/input/input";
import { Empty } from "../components/empty/empty";
import { Navbar } from "../components/navbar/navbar";
import { Options } from "../components/options/options";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Notification } from "../components/notfication/notification";
import { Submit } from "../components/buttons/button-submit/button-submit";
import { useNewOption, useDeleteOption, usechangeOption } from "../hooks/useOptions";
import { Button } from "../components/buttons/button/button";
import { Heading } from "../components/heading/heading";

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
    submit(value.new)
  }

  return (
    <style.TodoPage>
      <Navbar />

      <style.Todo data-testid="submit" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Ensira uma opção:"
          type="text"
          {...register("new")}
        />
        <Submit type="submit" data-testid="button" isLoading={isLoading}>
          <PaperPlaneRight size={28} weight="bold" color="white" />
        </Submit>
      </style.Todo>

      <AnimatePresence>
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

      {data?.options.length !== 0 && (
        <Button asChild>
          <Link to={`/votes/${id}`}><Heading size="sm">Compartilhe com amigos!</Heading></Link>
        </Button>
      )}

    </style.TodoPage>
  );
}
