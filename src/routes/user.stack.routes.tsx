import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Product } from "@screens/Product";
import { useAuth } from "@hooks/auth";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UserStackRoutes() {
  const { user } = useAuth();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="home" component={Home} />
        <Screen name="product" component={Product} />
      </Group>
    </Navigator>
  );
}
