import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo,"title" | "description">

export class TodoService{
    public get (todoId:string): Todo {
        return {
            id: todoId,
            description: "hello",
            title:"yellow",
            done: false
        }
    }

    public create (todoCreationParams: TodoCreationParams): Todo {
        console.log("mock db call")
        return {
            id: "123",
            description: "hello",
            title:"yellow",
            done: false
        }
    }
}