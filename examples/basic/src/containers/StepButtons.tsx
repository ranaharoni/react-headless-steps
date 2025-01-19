import { useSteps } from "../../../../src";

export const StepButtons = () => {
  const { toNext, toPrev, isFirst, isLast } = useSteps();

  return (
    <div className="buttons">
      <button disabled={isFirst} onClick={toPrev}>
        Previous
      </button>
      <button onClick={toNext}>{!isLast ? "Next" : "Finish"}</button>
    </div>
  );
};
