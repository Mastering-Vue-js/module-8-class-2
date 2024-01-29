import { reactive } from "vue";

const todos = reactive([
    { id: 3, task: "Make a fun project", done: false },
    { id: 2, task: "Join in the class", done: true },
    { id: 1, task: "Prepare class material", done: true },
]);

export default todos;