import { MantineProvider } from "@mantine/core";
import ComponentExamples from "./ComponentExamples";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <ComponentExamples />
    </MantineProvider>
  );
}

export default App;
