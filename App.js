import React  from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { createDrawerNavigator, createNavigationContainer } from 'react-navigation'

const Screen1 = ({ navigation }) => (
  <View
    style={{ marginTop: 50 }}>
    <TouchableOpacity
      onPress={navigation.toggleDrawer}>
      <Text>Click me to open menu</Text>
    </TouchableOpacity>
  </View>
)

const CustomMenuDrawer = () => (
  <View>
    <Text>Custom menu</Text>
  </View>
)

const DrawerNavigator = createDrawerNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: {
      drawerLabel: <CustomMenuDrawer />
    }
  }
})

const RootNavigation = createNavigationContainer(DrawerNavigator)

const App = () => (
  <RootNavigation />
)

export default App
