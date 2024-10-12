import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Set = ({ set, onUpdate }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
      <Autocomplete
        options={[]}
        freeSolo
        fullWidth
        renderInput={(params) => <TextField {...params} label="Weight" />}
        onChange={(event, value) => {
          onUpdate({ ...set, weight: value });
        }}
      />
      <Autocomplete
        options={[]}
        freeSolo
        fullWidth
        renderInput={(params) => <TextField {...params} label="Reps" />}
        onChange={(event, value) => {
          onUpdate({ ...set, reps: value });
        }}
      />
    </Stack>
  );
};

export default Set;
