import React, { useState } from "react";
import { Row, Container, Col, Form, Button } from "react-bootstrap";
//Feed from the components folder
//need a button to look at all the employee List of just names.
import Feed from "../components/feed/index";
import EmployeeForm from "../components/EmployeeForm";
import { useStateContext } from "../utils/GlobalState";
import Employeelist from "../components/Employeelist";

function Admin() {
  const [state, dispatch] = useStateContext();
  return (
    <>
      <h1>Hello Admin</h1>
      <Row>
        <Col xs={12} md={2}>
          <Form.Group>
            <Employeelist />
          </Form.Group>
        </Col>

        <Col xs={12} md={7}>
          <Feed />
        </Col>
        <Col xs={12} md={3}>
          <Button
            onClick={() => dispatch({ type: "toggle-new-post" })}
            variant="primary"
            size="lg"
            block
          >
            Create New Post
          </Button>
          <Button
            onClick={() => dispatch({ type: "toggle-user" })}
            variant="primary"
            size="lg"
            block
          >
            Create New Employee Account
          </Button>
          {state.addUser ? <EmployeeForm /> : null}
          <Button variant="primary" size="lg" block>
            Requested Time Off
          </Button>
          <Button variant="primary" size="lg" block>
            Make a Schedule
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Admin;
