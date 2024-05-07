import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screen/home/HomeScreen';
import { ProfileScreen } from '../screen/profile/ProfileScreen';
import { SettingScreen } from '../screen/setting/SettingScreen';

const Tab = createBottomTabNavigator();

export const BottomTapNavigators = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}