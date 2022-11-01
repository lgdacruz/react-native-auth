import { createStackNavigator } from "@react-navigation/stack";

import { ThemeUse } from "../../context/theme";
import { Create } from "./create";
import { Login } from "./login";

const Stack = createStackNavigator();

export const Unloged = () => {
  const { darkGreen } = ThemeUse();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: darkGreen },
        headerTitleStyle: { color: "white" },
        cardStyle: { backgroundColor: darkGreen },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
};
