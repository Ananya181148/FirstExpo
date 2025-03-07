import { Tabs } from "expo-router";
import TabBarIcon from "@/componets/navigation/TadBarIcon ";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function TabLayout() {
    return (
      <Tabs
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#D5B79F",
          },
          tabBarLabelStyle: { fontSize: 12, color: "#663300" },
          tabBarStyle: {
            backgroundColor: "#D5B79F",
            height: 80,
            marginBottom: 0,
            paddingTop: 5,
          },
          tabBarActiveTintColor: "#663300",
          tabBarInactiveBackgroundColor: "#D5B79F",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: "Contact",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="phone" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(admin)"
          options={{
            title: "Admin",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="user" color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }

