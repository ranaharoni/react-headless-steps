import React, { Children } from "react";
import type { StepProps } from "../types";

export const Step = ({ children }: StepProps) => {
  return <>{Children.only(children)}</>;
};
