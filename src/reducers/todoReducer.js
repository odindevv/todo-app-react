export default function TodoReducer(state = [], action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "completed":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, check: !todo.check } : todo
      );

    case "edit":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    default:
      return state;
  }
}
