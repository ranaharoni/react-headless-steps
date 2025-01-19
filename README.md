# React Headless Steps

A flexible and easy-to-use React component for creating multi-step flows, wizards, and step-by-step forms.

## Features

- 🦾 Headless, no UI whatsoever
- 🚀 Simple API with compound components
- 🎯 Controlled navigation with hooks
- 🎨 Fully customizable steps
- 📱 TypeScript support
- 🔄 Flexible navigation (next, previous, by index, by id)
- 🎭 Step change callbacks
- 🏁 Completion callback

## Installation

`npm install @your-scope/react-steps`

# or

`yarn add @your-scope/react-steps`

## Basic Usage

```tsx
import { Steps } from "@your-scope/react-steps";

function App() {
  return (
    <Steps>
      <Steps.Step id="first">
        <MyStepComponent />
      </Steps.Step>

      <Steps.Step id="second">
        <MyStepComponent2 />
      </Steps.Step>

      <Steps.Step id="third">
        <MyStepComponent3 />
      </Steps.Step>
    </Steps>
  );
}
```

## Props

### Steps Component

| Prop         | Type                                                                               | Description                                    |
| ------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------- |
| children     | ReactNode[]                                                                        | Step components to be rendered                 |
| initialStep  | string \| number                                                                   | Initial step to show (can be index or step id) |
| onStepChange | (changes: { prevIndex: number; currentIndex: number }, step: ReactElement) => void | Callback fired when step changes               |
| onFinish     | () => void                                                                         | Callback fired when reachinh1>g the last step  |

### Step Component

| Prop     | Type      | Description                          |
| -------- | --------- | ------------------------------------ |
| id       | string    | Unique identifier for the step       |
| children | ReactNode | Content to be rendered for this step |

## Hook Usage

The useSteps hook provides control over the steps flow:

```tsx
import { useSteps } from "@your-scope/react-steps";

function StepControls() {
  const {
    activeStep, // Current step index
    totalSteps, // Total number of steps
    isFirst, // Whether current step is first
    isLast, // Whether current step is last
    toNext, // Go to next step
    toPrev, // Go to previous step
    toIndex, // Go to step by index
    toId, // Go to step by id
    stepsProps, // Array of step props
  } = useSteps();

  return (
    <div>
      <button onClick={toPrev} disabled={isFirst}>
        Previous
      </button>
      <button onClick={toNext} disabled={isLast}>
        Next
      </button>
    </div>
  );
}
```

## TypeScript Support

The library is written in TypeScript and provides full type definitions out of the box.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Ran Aharoni
