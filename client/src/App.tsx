import type React from "react";
import { Button } from "./components/ui/button";

const App :React.FC = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <Button>Click Me</Button>
    </div>
  );
};

export default App;