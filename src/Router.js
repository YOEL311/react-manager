import React from "react";
import { Stack, Scene, Router, Actions } from "react-native-router-flux";
import LoginFrom from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Stack key="auth" initial>
          <Scene key="login" component={LoginFrom} title="Please Login" />
        </Stack>

        <Stack key="main">
          <Scene
            key="employeeList"
            title="employees"
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            component={EmployeeList}
            initial
          />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
            back
          />
        </Stack>
      </Stack>
    </Router>
  );
};
export default RouterComponent;
// {/*<Scene key="employDetail" />*/}
