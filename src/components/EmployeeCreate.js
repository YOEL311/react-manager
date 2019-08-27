import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { employeeUpdate, employeeCreate } from "../actions";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
    this.props.employeeCreate({ name, phone, shift: shift || "monday" });
  }

  render() {
    console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  console.log(name, phone, shift);
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
