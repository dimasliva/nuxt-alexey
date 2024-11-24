export default function useTodo() {
  const todoList = reactive<string[]>([]);

  function addTodo(params: string) {}

  return { todoList };
}
