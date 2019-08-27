import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./common";
import { Actions } from "react-native-router-flux";
class ListItem extends Component {
  onRowPress() {
    console.log("press row");
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name, phone, shift } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection
            style={{
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={style.titleStyles}>{name}</Text>
            <Text style={style.titleStyles}>{shift}</Text>
            <Text style={style.titleStyles}>{phone}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 1
  }
};

export default ListItem;
