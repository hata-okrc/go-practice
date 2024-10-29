import "./App.css";
import { useGetTodosQuery } from "./services/TodoService";

function App() {
  const { data, error, isFetching } = useGetTodosQuery();

  return (
    <>
      <div>
        {error ? (
          <p>Error!</p>
        ) : isFetching ? (
          <p>Loading...</p>
        ) : data ? (
          <p>
            {data[0].Title} {data[1].Title}
          </p>
        ) : (
          <p>No Data.</p>
        )}
      </div>
    </>
  );
}

export default App;
