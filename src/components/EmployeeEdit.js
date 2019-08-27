import _ from "lodash";
import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";
import { connect } from "react-redux";

import { Button, Card, CardSection } from "./common";
class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    console.log("this props");

    console.log(this.props.employee.uid);

    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Change</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.employeeForm);

  const { name, phone, shift, key } = state.employeeForm;
  return { name, phone, shift, key };
};
export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave }
)(EmployeeEdit);
