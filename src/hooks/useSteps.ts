import { useContext } from "react";
import { StepsContext } from "../context";
import { UseStepsResult } from "../types";

export const useSteps = (): UseStepsResult => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error(
      "useStepsContext must be used within a StepsContext.Provider",
    );
  }
  return context;
};
