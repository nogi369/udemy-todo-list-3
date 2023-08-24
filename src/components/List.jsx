export const List = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <button onClick={() => {}}>完了</button>
            <span>{todo.content}</span>
          </div>
        );
      })}
    </div>
  );
};
