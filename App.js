import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaJavasScript from './componentes/TelaJavaScript';
import TelaNode from  './componentes/TelaNode';
import TelaReact from './componentes/TelaReact';

const MenuNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Javascript" component={TelaJavasScript}  />
        <MenuNav.Screen name="Node" component={TelaNode}  />
        <MenuNav.Screen name="React" component={TelaReact}  />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}