import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
export default function Buynow() {
  const [age, setAge] = React.useState(10);
  const Boxing = {
    outerCard: {
      // borderRadius: "15px 50px 30px 5px",
    },
    btn: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "green",
      color: "#fff",
    },
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box style={Boxing.outerCard} sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent style={Boxing.outerCard}>
            <InputLabel fullWidth id="demo-simple-select-label">
              Deposit Amount
            </InputLabel>
            <TextField
              fullWidth
              style={Boxing.textBoxs}
              label="You pay"
              id="fullWidth"
            />
            <InputLabel fullWidth id="demo-simple-select-label">
              Token
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>USDT</MenuItem>
              <MenuItem value={20}>USDC</MenuItem>
            </Select>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              style={Boxing.btn}
              variant="outlined"
              size="large"
            >
              Deposit
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
