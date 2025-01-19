import { useSteps } from "../../../../src";

export const Complement = () => {
  const { activeStep } = useSteps();

  return (
    <>
      <h2>Step {activeStep + 1}</h2>
      <p>This is the second step of the wizard.</p>
    </>
  );
};
