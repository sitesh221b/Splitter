import React from "react";
import "./App.css";
import { Grid, Box, List, ListItem, Container } from "@mui/material";
import AddItem from "./componenets/AddItem";
import AddPerson from "./componenets/AddPerson";

function App() {
  const [names, setNames] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [costPerPerson, setCostPerPerson] = React.useState({});

  return (
    <Container maxWidth="sm">
      Splitter
      <Grid container justifyContent="space-evenly">
        <Grid item container>
          <List>
            {names.map((x) => (
              <ListItem key={x}>{x}</ListItem>
            ))}
          </List>
          <AddPerson setNames={setNames} />
        </Grid>
        <Grid item container>
          <List>
            {items.map((x) => (
              <ListItem key={x.name + x.cost}>
                {x.name + " " + x.cost + " " + x.tags?.map((y) => y) ?? ""}
              </ListItem>
            ))}
          </List>
          {names.length > 0 && (
            <AddItem
              setItems={setItems}
              names={names}
              setCostPerPerson={setCostPerPerson}
            />
          )}
        </Grid>
        <Grid item container>
          <List>
            {Object.keys(costPerPerson).map((x) => (
              <ListItem key={x}>{x + ": " + costPerPerson[x]}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
