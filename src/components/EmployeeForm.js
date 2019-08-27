import React, { Component } from "react";
import { Picker, Text, View } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { CardSection, Input } from "./common";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
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
        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyles}>Shift</Text>

          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Sunday" value="sunday" />
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="Thursday" value="thursday" />
            <Picker.Item label="Friday" value="friday" />
            <Picker.Item label="Saturday" value="saturday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyles: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  console.log("state employee form");
  console.log(name, phone, shift);

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
