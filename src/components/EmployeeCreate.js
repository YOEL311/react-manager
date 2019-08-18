import React, { Component } from "react";
import { Card, CardSection, Input, Button } from "./common";
import { Picker, Text } from "react-native";
import { employeeUpdate } from "../actions";
import { connect } from "react-redux";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder={"Jane"}
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="054-8847-5559"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>
        <Text>Shift day</Text>
        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="ראשון" value="sunday" />
            <Picker.Item label="שני" value="monday" />
            <Picker.Item label="שלישי" value="wednesday" />
            <Picker.Item label="רביעי" value="thursday" />
            <Picker.Item label="חמישי" value="friday" />
            <Picker.Item label="שישי" value="saturday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);
