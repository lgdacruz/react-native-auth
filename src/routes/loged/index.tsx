import { createStackNavigator } from "@react-navigation/stack";

import { ThemeUse } from "../../context/theme";
import { Initial } from "./initial";
import { Settings } from "./settings";

const Stack = createStackNavigator();

export const Loged = () => {
  const { darkGreen } = ThemeUse();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerStyle: { backgroundColor: darkGreen },
        headerTitleStyle: { color: "white" },
        cardStyle: { backgroundColor: darkGreen },
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
