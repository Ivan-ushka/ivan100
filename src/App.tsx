import React from 'react';
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Container className="d-flex align-items-center justify-content-center p-4 flex-column">
            <h1>Hello user!</h1>
            <h3>Click to redirect to form</h3>
            <Link to="/form" ><Button>Form</Button></Link>
        </Container>
    </div>
  );
}

export default App;
