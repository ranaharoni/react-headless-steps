import { useSteps } from "../../../../src";

export const Greeting = () => {
  const { activeStep } = useSteps();

  return (
    <>
      <h2>Step {activeStep + 1}</h2>
      <p>This is the first step of the wizard.</p>
    </>
  );
};
