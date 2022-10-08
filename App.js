import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaJavasScript from './componentes/TelaJavaScript';
import TelaNode from  './componentes/TelaNode';
import TelaReact from './componentes/TelaReact';

const MenuNav = createStackNavigator();

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