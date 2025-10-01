import { useContext } from "react";
import { StoreContext } from "../store/store";

export function useStoreContext() {
  const context = useContext(StoreContext)
  if(context === undefined) {
     throw new Error('Store Context should be used within the Store Provider')
  }
  return context
}