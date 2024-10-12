import { useState } from "react";

import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import Set from "../components/Set";

const Start = () => {
  const [workout, setWorkout] = useState({});

  const startWorkout = () => {
    setWorkout({
      name: "Workout",
      exercises: [],
    });
  };

  const addExercise = () => {
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      exercises: [
        ...prevWorkout.exercises,
        {
          name: "Exercise 1",
          sets: [{ weight: null, reps: null }],
        },
      ],
    }));
  };

  const addSet = (exerciseIndex) => {
    setWorkout((prevWorkout) => {
      const updatedExercises = prevWorkout.exercises.map((exercise, index) => {
        if (index === exerciseIndex) {
          return {
            ...exercise,
            sets: [...exercise.sets, { weight: null, reps: null }],
          };
        }
        return exercise;
      });

      return {
        ...prevWorkout,
        exercises: updatedExercises,
      };
    });
  };

  const updateSet = (exerciseIndex, setIndex, newSet) => {
    setWorkout((prevWorkout) => {
      const updatedExercises = prevWorkout.exercises.map((exercise, i) => {
        if (i === exerciseIndex) {
          const updatedSets = exercise.sets.map((set, j) => {
            if (j === setIndex) {
              return newSet;
            }
            return set;
          });

          return {
            ...exercise,
            sets: updatedSets,
          };
        }
        return exercise;
      });

      return {
        ...prevWorkout,
        exercises: updatedExercises,
      };
    });
  };

  const { name: workoutName, exercises: workoutExercises = [] } = workout;

  return (
    <Layout>
      <h1>Start</h1>

      {workoutName && <h2>{workoutName}</h2>}

      <Stack spacing={2}>
        <ol>
          {workoutExercises.map((exercise, exerciseIndex) => (
            <li key={exerciseIndex}>
              <h3>{exercise.name}</h3>

              <ol>
                {exercise.sets.map((set, setIndex) => (
                  <Set
                    key={setIndex}
                    set={set}
                    onUpdate={(newSet) =>
                      updateSet(exerciseIndex, setIndex, newSet)
                    }
                  />
                ))}
              </ol>

              <Button
                variant="contained"
                color="primary"
                onClick={() => addSet(exerciseIndex)}
              >
                Add a set
              </Button>
            </li>
          ))}
        </ol>

        {workout.name ? (
          <Button variant="contained" color="primary" onClick={addExercise}>
            Add an exercise
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={startWorkout}>
            Start a workout
          </Button>
        )}
      </Stack>
    </Layout>
  );
};

export default Start;
