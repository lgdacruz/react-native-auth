import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import { AuthUse } from "../context/auth";
import { Loged } from "./loged";
import { Unloged } from "./unloged";

export default function Root() {
  const { userData } = AuthUse();
  return (
    <NavigationContainer>
      {userData ? <Loged /> : <Unloged />}
    </NavigationContainer>
  );
}
