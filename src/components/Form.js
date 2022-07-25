import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Step1", "Step2", "Step3"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            placeholder="Enter Your Email Id"
            fullWidth
            margin="normal"
            name="Email"
          />
        </>
      );

    case 1:
      return (
        <>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>

          <TextField
            id="Date-of-birth"
            label="Date of birth"
            type="date"
            defaultValue="2022-07-25"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="Occupation"
            label="Occupation"
            variant="outlined"
            placeholder="Enter Your Occupation"
            fullWidth
            margin="normal"
            name="Occupation"
          />
        </>
      );
    case 2:
      return (
        <>
          <TextField
            id="contact No"
            label="Contact No"
            variant="outlined"
            placeholder="Enter Your Contact No"
            fullWidth
            margin="normal"
            name="Contact No"
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            placeholder="Enter Your Address"
            fullWidth
            margin="normal"
            name="address"
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Enter Your City Name"
            fullWidth
            margin="normal"
            name="City"
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter Your State Name"
            fullWidth
            margin="normal"
            name="State"
          />
        </>
      );

    default:
      return "unknown step";
  }
}

const Form = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handlePrevious}
          >
            Previous
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default Form;
