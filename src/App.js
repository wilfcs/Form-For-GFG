import "./App.css";
import TextCard from "./Components/TextCard";
import ToggleCard from "./Components/ToggleCard";
import Button from "@mui/material/Button";
import "./CSS/App.css";
import { useState } from "react";
import CheckCard from "./Components/CheckCard";
function App() {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    year: "First Year",
    domain: ["", "", ""],
    discord: "",
  });

  const submit = () => {
    console.log(inputVal);
  };
  return (
    <div className="app-js">
      <TextCard
        title={"Name *"}
        value={inputVal}
        setInputVal={setInputVal}
        name="name"
      />
      <TextCard
        title={"Email *"}
        value={inputVal}
        setInputVal={setInputVal}
        name="email"
      />
      <ToggleCard
        title={"Year"}
        value={inputVal}
        setInputVal={setInputVal}
        name="year"
      />
      <CheckCard
      title={"Domain"}
      value={inputVal}
      setInputVal={setInputVal}
      name="domain"
      />
      <TextCard
        title={
          "Discord ID: ( ex: abcdg#1234) (In case you don't have a discord account, please make one. We will be communicating via discord for all team related activities.)"
        }
        value={inputVal}
        setInputVal={setInputVal}
        name="discord"
      />
      <div className="form-submit-button">
        <Button onClick={submit} variant="contained" color="success">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;