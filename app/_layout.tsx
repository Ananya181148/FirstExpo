import { Stack } from "expo-router";

export default function RootLayout() {
  return (

    <Stack screenOptions=
    {{
            headerShown: false,
            headerTitleAlign: "center",
            headerStyle:{backgroundColor: "#D5B79F",}
    }}> 
        <Stack.Screen name="(Tabs)" options={{headerShown: false}} />
        <Stack.Screen name="(admin)" options={{headerShown: false}} />
        <Stack.Screen name="index" options={{title: "Home" }} />
        <Stack.Screen name="contact" options={{title: "contact" }} />
        <Stack.Screen name="+not-found" options={{title: "Not Found" }} />
        <Stack.Screen name="textinputdemobs" options={{title: "From" ,headerShown: true}} />
        <Stack.Screen name="switchdemo" options={{title: "Switch" ,headerShown: true}} />
        <Stack.Screen name="flatlistdemo" options={{title: "Flatlist" ,headerShown: true}} />
        
     </Stack>

  )
}
