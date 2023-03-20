import { createContext } from "react";

export const SearchContext = createContext({
  ref: { current: undefined },
  fetchData: () => {},
});
