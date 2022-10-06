import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import "./App.css";
import Showmore from "./Showmore";
import CurrentConditions from "./CurrentConditions";

const App = () => {
  const [state, setstate] = useState(false); //using state to toggle more data
  return (
    <Stack>
      <CurrentConditions />

      <Button variant="text " onClick={() => setstate(!state)}>
        show more
      </Button>
      {state && <Showmore />}
    </Stack>
  );
};

export default App;
