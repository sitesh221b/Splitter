import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddPerson = ({ setNames }) => {
  const [name, setLocalName] = React.useState("");

  return (
    <Grid container>
      <Grid item>
        <TextField
          value={name}
          placeholder={"Enter the name"}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          color="primary"
          onClick={(e) => {
            setNames((prevState) => [...prevState, name]);
            setLocalName("");
          }}
          disabled={name === ""}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddPerson;
