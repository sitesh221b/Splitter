import React from "react";
import {
  TextField,
  Grid,
  Checkbox,
  Button,
  List,
  ListItem,
} from "@mui/material";

const AddItem = ({ setItems, names, setCostPerPerson }) => {
  const [itemName, setItemName] = React.useState("");
  const [itemCost, setItemCost] = React.useState("");
  const [itemTags, setItemTags] = React.useState([]);

  const updateSplitter = () => {
    let splitPrice = itemCost / itemTags.length;
    itemTags.forEach((person) =>
      setCostPerPerson((prevState) => ({
        ...prevState,
        [person]: prevState.hasOwnProperty(person)
          ? prevState[person] + splitPrice
          : splitPrice,
      }))
    );
  };

  return (
    <Grid container>
      <Grid item>
        <TextField
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          value={itemCost}
          type={"number"}
          onChange={(e) => setItemCost(e.target.value)}
        />
      </Grid>
      <Grid>
        <List>
          {names.map((x) => (
            <ListItem key={x}>
              <Checkbox
                size="small"
                checked={itemTags.includes(x)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setItemTags((prevState) => [...prevState, x]);
                  } else {
                    setItemTags((prevState) =>
                      prevState.filter((y) => y !== x)
                    );
                  }
                }}
              />
              {x}
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            setItems((prevState) => [
              ...prevState,
              { name: itemName, cost: itemCost, tags: itemTags },
            ]);
            setItemName("");
            setItemCost("");
            setItemTags([]);
            updateSplitter();
          }}
          disabled={itemName === "" || itemCost === "" || itemTags.length === 0}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddItem;
