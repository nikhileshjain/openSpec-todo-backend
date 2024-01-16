"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            description: "hello",
            title: "yellow",
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("mock db call");
        return {
            id: "123",
            description: "hello",
            title: "yellow",
            done: false
        };
    }
}
exports.TodoService = TodoService;
