import { createContext } from "react";
import { useSteps } from "./hooks/useSteps";

export const StepsContext = createContext({} as ReturnType<typeof useSteps>);
