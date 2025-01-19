import { Steps } from "../../../src";
import "./App.css";
import { Container } from "./components/Container";
import { Advise } from "./containers/Advise";
import { Complement } from "./containers/Complement";
import { Greeting } from "./containers/Greeting";
import { StepButtons } from "./containers/StepButtons";

function App() {
  const handleStepChange = ({
    prevIndex,
    currentIndex,
  }: {
    prevIndex: number;
    currentIndex: number;
  }) => {
    console.log("step changed", { prevIndex, currentIndex });
  };

  const handleFinish = () => {
    console.log("Finished");
  };

  return (
    <div className="app">
      <h1>Steps Example</h1>

      <Steps onStepChange={handleStepChange} onFinish={handleFinish}>
        <Steps.Step id="first">
          <Container>
            <Greeting />
            <StepButtons />
          </Container>
        </Steps.Step>

        <Steps.Step id="second">
          <Container>
            <Complement />
            <StepButtons />
          </Container>
        </Steps.Step>

        <Steps.Step id="third">
          <Container>
            <Advise />
            <StepButtons />
          </Container>
        </Steps.Step>
      </Steps>

      <div>Open console to see the step changes</div>
    </div>
  );
}

export default App;
