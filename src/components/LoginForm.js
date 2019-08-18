import React, { Component } from "react";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { connect } from "react-redux";
import { emailChange, passwordChange, loginUser } from "../actions";
import { View, Text } from "react-native";

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  onButtonPress() {
    console.log("on button press");

    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorStyles}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size={"large"} />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={"Email"}
            placeholder={"email@gmail.com"}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label={"Password"}
            placeholder={"password"}
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorStyles: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};
export default connect(
  mapStateToProps,
  { emailChange, passwordChange, loginUser }
)(LoginForm);
