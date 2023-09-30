"use client";
import { useEffect, useState } from "react";
import { Table, Input, Button } from "ui";
import axios from "axios";

interface Todo {
  _id?: string;
  description: string;
  done: boolean;
}
export default function Page(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({
    description: "",
    done: false,
  });

  useEffect(() => {
    return () => getTodos();
  }, []);

  const onAdd = () => {
    if (!todo.description) {
      return alert("Please enter a description");
    }
    axios
      .post<Todo>("http://localhost:3001/todos", todo)
      .then((_) => {
        getTodos();
        setTodo({
          description: "",
          done: false,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getTodos = () => {
    axios
      .get<Todo[]>("http://localhost:3001/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onStatusChange = (index: number) => {
    const todo = todos[index];
    axios
      .patch<Todo>(`http://localhost:3001/todos/${todo._id}`, {
        done: !todo.done,
      })
      .then((_) => {
        getTodos();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <main className="flex min-h-screen w-screen p-24 ">
      <div className=" flex place-items-center flex-col items-center justify-center w-full">
        <div className="font-sans w-4/12 pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col  z-0">
          <div className="w-3/6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              My To Do List
            </h1>
            <div className="pb-5 pt-5 flex justify-between">
              <Input
                value={todo.description}
                onChange={(value: React.ChangeEvent<HTMLInputElement>) => {
                  setTodo({
                    ...todo,
                    description: value.target.value,
                  });
                }}
              />
              <Button type="submit" onClick={onAdd} title="Add" />
            </div>
            <Table dataSource={todos} onStatusChange={onStatusChange} />
          </div>
        </div>
      </div>
    </main>
  );
}
