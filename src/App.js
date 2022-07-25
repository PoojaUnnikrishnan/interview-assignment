import "./App.css";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Form from "./components/Form";

function App() {
  return (
    <>
      <CssBaseline />
      <Container component={Box}>
        <Paper component={Box}>
          <Form />
        </Paper>
      </Container>
    </>
  );
}

export default App;
