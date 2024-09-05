import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Set = () => {
  // const [reps, setReps] = useState(initialReps);

  return null;

  // return (
  //   <div>
  //     <h2>Set</h2>

  //     {reps === null ? (
  //       <TextField
  //         label="Reps"
  //         variant="filled"
  //         onChange={(e) => {
  //           setReps(e.target.value);
  //         }}
  //         value={reps}
  //       />
  //     ) : (
  //       <p>Reps: {reps}</p>
  //     )}

  //     <p>Weight: {weight}</p>
  //   </div>
  // );
};

const Exercise = ({ name }) => {
  const [sets, setSets] = useState([
    {
      id: 1,
      reps: null,
      weight: null,
    },
  ]);

  return (
    <div>
      <h1>{name}</h1>
      {sets.map((set) => (
        <Set key={set.id} {...set} />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setSets([...sets, { id: sets.length + 1, reps: null, weight: null }]);
        }}
      >
        Add Set
      </Button>
    </div>
  );
};

export default Exercise;
