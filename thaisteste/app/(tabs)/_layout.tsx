import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

import AntDesign from '@expo/vector-icons/AntDesign';



export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
    tabBarActiveTintColor: '#be5cffff',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',}}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="formacao"
        options={{
          title: 'Formação',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'school' : 'school-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="habilidades"
        options={{
          title: 'Habilidades',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'star' : 'staro'} size={24} color={color} />          ),
        }}
      />
    </Tabs>
  );
}
