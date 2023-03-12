import { useParams } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { Input } from "../components/input/input";
import { Submit } from "../components/buttons/button-submit/button-submit";
import { PaperPlaneRight } from "phosphor-react";
import * as style from "../styles/todo";
import { useNewOption } from "../hooks/useNewOption";
import { FormEvent, useState } from "react";
import { useUser } from "../hooks/useUser";
import { Heading } from "../components/heading/heading";
import { Pencil, X } from "@phosphor-icons/react";

export const Todo = () => {
  const { id } = useParams();
  const { data } = useUser(id!);
  const { mutate, isLoading } = useNewOption();
  const [option, setOption] = useState("");

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    const newOption = {
      id,
      option,
    };

    ev.preventDefault();
    mutate(newOption);
  };

  return (
    <>
      <Navbar />
      {/* <h1>{id}</h1> */}
      <style.Todo onSubmit={submit}>
        <Input
          type="text"
          value={option}
          onChange={(ev) => setOption(ev.currentTarget.value)}
        />
        <Submit type="submit" isLoading={isLoading}>
          <PaperPlaneRight size={28} weight="bold" color="white" />
        </Submit>
      </style.Todo>
      <style.Ul>
        {/* {data?.options?.map(it => <style. key={it.id}>{it.option}</style.>)} */}
        <style.List>
          <p>testetestetestetestetestetestetestetestetesteteste</p>
          <div className="options">
            <Pencil size={38} weight="bold" />
            <X size={38} weight="bold" />
          </div>
        </style.List>

        <style.List>
          <p>testetestetestetestetestetestetestetestetestetestet</p>
          <div className="options">
            <Pencil size={38} weight="bold" />
            <X size={38} weight="bold" />
          </div>
        </style.List>
      </style.Ul>
    </>
  );
};
