import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Todo = {
  Id: number;
  Title: string;
  Completed: boolean;
};

type Todos = Todo[];

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",

    // header に設定したい内容
    prepareHeaders: (headers, { getState }) => {
      headers.set("accept", "application/json");
      return headers;
    },
    // 今回はポートが違うので cors 対応
    mode: "cors",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todos, void>({
      query: () => `todos`,
    }),
  }),
});

// 自動的に hooks が生成される
export const { useGetTodosQuery } = todoApi;
