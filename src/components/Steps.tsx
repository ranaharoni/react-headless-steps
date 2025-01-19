import React, { Children, useCallback, useState, useMemo } from "react";
import type { ReactElement, ReactNode } from "react";
import { Step } from "./Step";
import { StepsContext } from "../context";
import type { StepProps, UseStepsResult } from "../types";

interface StepsProps {
  children: ReactNode[];
  initialStep?: string | number;
  onStepChange?: (
    changes: { prevIndex: number; currentIndex: number },
    step: ReactElement,
  ) => void;
  onFinish?: () => void;
}

export const Steps = ({
  children,
  onStepChange,
  onFinish,
  initialStep,
}: StepsProps) => {
  const validChildren = Children.toArray(children).filter(
    (child): child is ReactElement<StepProps> => Boolean(child),
  );

  let initialIndex = 0;
  validChildren.forEach((child, index) => {
    if (child.type !== Steps.Step) {
      throw new Error(
        "Steps component accepts only Step components as children.",
      );
    }

    if (!initialStep) {
      return;
    }
    if (
      (typeof initialStep === "number" && initialStep === index) ||
      (typeof initialStep === "string" && child.props.id === initialStep)
    ) {
      initialIndex = index;
    }
  });

  const [activeStep, setActiveStep] = useState(initialIndex);

  const toNext = useCallback(() => {
    if (activeStep + 1 < validChildren.length) {
      setActiveStep(activeStep + 1);
      onStepChange?.(
        { prevIndex: activeStep, currentIndex: activeStep + 1 },
        validChildren[activeStep + 1],
      );
    } else {
      onFinish?.();
    }
  }, [activeStep, validChildren, onStepChange, onFinish]);

  const toPrev = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      onStepChange?.(
        { prevIndex: activeStep, currentIndex: activeStep - 1 },
        validChildren[activeStep - 1],
      );
    }
  }, [activeStep, validChildren, onStepChange]);

  const toIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < validChildren.length) {
        setActiveStep(index);
        onStepChange?.(
          { prevIndex: activeStep, currentIndex: index },
          validChildren[index],
        );
      }
    },
    [activeStep, validChildren, onStepChange],
  );

  const toId = useCallback(
    (id: string) => {
      const index = validChildren.findIndex(
        (step: ReactElement<StepProps>) => step.props.id === id,
      );
      if (index >= 0) {
        setActiveStep(index);
        onStepChange?.(
          { prevIndex: activeStep, currentIndex: index },
          validChildren[index],
        );
      }
    },
    [activeStep, validChildren, onStepChange],
  );

  const stepsProps: UseStepsResult["stepsProps"] = validChildren.map(
    ({ props: { children, ...props } }) => props,
  );

  const hookInstance = useMemo(
    () => ({
      stepsProps,
      activeStep,
      totalSteps: validChildren.length,
      isFirst: activeStep === 0,
      isLast: activeStep === validChildren.length - 1,
      toNext,
      toPrev,
      toIndex,
      toId,
    }),
    [
      stepsProps,
      activeStep,
      validChildren.length,
      toNext,
      toPrev,
      toIndex,
      toId,
    ],
  );

  return (
    <StepsContext.Provider value={hookInstance}>
      {validChildren[hookInstance.activeStep]}
    </StepsContext.Provider>
  );
};

Steps.Step = Step;
