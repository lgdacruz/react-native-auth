import "react-native-gesture-handler";
import React from "react";

import { AuthProvider } from "./src/context/auth";
import { ThemeProvider } from "./src/context/theme";
import Root from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </AuthProvider>
  );
}
