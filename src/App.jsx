import Todos from "./components/todos";

export default function App() {
  return (
    <div className="my-10 mx-auto w-1/2 rounded shadow p-4 bg-slate-400 h-max">
      <h1 className="text-white text-center text-3xl pb-2 border-b-2">TODOS</h1>
      <Todos />
    </div>
  );
}
