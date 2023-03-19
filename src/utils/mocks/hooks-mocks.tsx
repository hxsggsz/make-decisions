import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Todo } from "../../pages/todo";

//wrappers **only works for testing hooks!!!!!**
const queryClient = new QueryClient();
export const wrapper = (props: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
)

export const wrapperUser = (props: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  </QueryClientProvider>
)

export const todoComponent = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Todo />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

//useUser() custom hook
export const mockNewUser = {
  id: '1',
  options: []
};

export const mockUserEmpty = {};

//useOptions() custom hook
export const mockNewOption = {
  id: "1",
  option: "teste"
};

export const mockOptionUpdated = {
  id: "1",
  option: "test updated"
};