import { useSteps } from "../../../../src";

export const Advise = () => {
  const { activeStep } = useSteps();

  return (
    <>
      <h2>Step {activeStep + 1}</h2>
      <p>This is the third step of the wizard.</p>
    </>
  );
};
