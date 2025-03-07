import { StatusBar } from 'expo-status-bar';
import { Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Button, 
  ScrollView, 
  Alert, 
  TouchableHighlight,} from 'react-native';
import Login from '@/constants/Login ';
import About from '@/componets/About ';
import { Link, useRouter } from 'expo-router';
//import Profile from '@/assets/imgs/profile2.jpg';



export default function Index() {
  const router = useRouter();
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cacel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
  <ScrollView style={{flex: 1}}>
    <View style={Login.container}>
      <View style ={Login.spacing} />
      <Image source={{ uri:'https://scontent.fbkk7-2.fna.fbcdn.net/v/t1.15752-9/482148951_1172189017920123_8296734283494884393_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHhhpb2HL5qDiDHmKbeXMc-vuCHpHwn_qm-4IekfCf-qd8u1ymEFzu4nVzMI6cJ4x_E5_B6VoTrtJ8m6E09iUOe&_nc_ohc=mbHwR6RX_-0Q7kNvgHIKnAi&_nc_oc=AdjajgfKuK69HQMNcJE5OLMbSAks48xWwlkQ4pBi1SHQSFpg4VsLh-_MKPegK_ZMmOQ&_nc_zt=23&_nc_ht=scontent.fbkk7-2.fna&oh=03_Q7cD1wFUFe7-9wZV_wW513WtjwH25YjFeLn8XZeuviWl3AJHvA&oe=67F079AE' }} style={Login.logo} />
      <Text style={Login.title}> Welcome ☕</Text>
      <TextInput style={Login.input} placeholder="Usename" />
      <TextInput style={Login.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={Login.button}>
        <Text style={Login.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <About />
      <Link href='/contact'> Click Here </Link>
      <Button title='Click Test' 
      onPress={()=> router.push("/contact?name=Ananya&majior=It")} />

      <Button title='Click Param' 
      onPress={()=> router.push({pathname: "contact",
                                 params: {  name: "Ananya",
                                            majior: "IT",
                                            email: "123@tsjdk.com",
                                 }                    
          }
        )
      } />
      <Button title='Go To User ID' 
      onPress={()=> router.push("/user/123")} />

      <Button title='Go To Profile' 
      onPress={()=> router.push("profile")} />

      <Text>&nbsp;</Text>
      <Text style={{alignItems: "center"}}>Use Image</Text>
      <Image source={require("@/assets/imgs/profile1.jpg ")}
      style={{
        width: 120, 
        height: 120, 
        borderRadius: 100, 
        marginHorizontal: "auto",
      }}
      resizeMode="cover"
       />
      {/*<Image source={Profile}
      style={{
        width: 120, 
        height: 120, 
        borderRadius: 100, 
        marginHorizontal: "auto",
      }}
      resizeMode="cover"
      />*/}

        <TouchableHighlight
            underlayColor="#FF9966"
            style={{
              backgroundColor: "#FFCC99",
              paddingVertical: 15,
              paddingHorizontal: 15,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9,
            }}
            onPress={() => {
              showAlert();
            }}
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  </ScrollView>
  );
}





