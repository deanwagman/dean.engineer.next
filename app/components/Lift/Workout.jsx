import { useState } from "react";
import uuid from "react-uuid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import Exercise from "./Exercise";

// @ts-ignore
const SelectExercise = ({ open, handleClose, onSubmit }) => {
  const [name, setName] = useState("");

  const onClick = () => {
    handleClose();
    console.log({ name });
    onSubmit({ name });
  };

  console.log({ name });

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ backgroundColor: "white" }}>
        <h1>Select Exercise</h1>
        <TextField
          label="Exercise Name"
          variant="filled"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <Button variant="contained" color="primary" onClick={onClick}>
          Add Exercise
        </Button>
      </div>
    </Modal>
  );
};

const Workout = () => {
  const [exercises, setExercises] = useState([]);
  const [openSelectExercise, setOpenSelectExercise] = useState(false);
  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  console.log({ exercises });

  return (
    <div>
      <h1>Workout</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenSelectExercise(true)}
      >
        Add Exercise
      </Button>
      {exercises.map((exercise) => (
        <Exercise
          key={exercise.id}
          removeExercise={removeExercise}
          name={exercise.name}
        />
      ))}

      <SelectExercise
        open={openSelectExercise}
        handleClose={() => setOpenSelectExercise(false)}
        onSubmit={({ name }) => {
          console.log({ name });
          setExercises([...exercises, { id: uuid(), name }]);
        }}
      />
    </div>
  );
};

export default Workout;
