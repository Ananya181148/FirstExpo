import { StatusBar } from 'expo-status-bar';
import { Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Button, 
  ScrollView, 
  Alert, 
  TouchableHighlight,
  Modal,
  SafeAreaView,} from 'react-native';
import Login from '@/constants/Login ';
import About from '@/componets/About ';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
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

  const[modalVisible, SetModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex:1}}>
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
      onPress={()=> router.push("/profile")} />

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
<Text>&nbsp;</Text>
        <TouchableHighlight
            underlayColor="#D5B79F"
            style={{
              backgroundColor: "#9E826B",
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
        <Text>&nbsp;</Text>
        <TouchableHighlight
                        underlayColor='#D5B79F'
                        style={{
                            backgroundColor: '#9E826B', 
                            paddingVertical: 15,
                            paddingHorizontal: 15,
                            justifyContent: 'center', 
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                        onPress={() => {
                            SetModalVisible(true)
                        }}
                    >
                        <Text style={{color: 'back'}}>Show Moda</Text>
                    </TouchableHighlight>
                    
                          {/* --------- Modal ----------- */}
                    <Text style={{textAlign: 'center'}}>การใช้ Modal</Text>
                    <Text>&nbsp;</Text>
                    <Modal
                        animationType='slide' // fade, slide, none
                        transparent={true}
                        visible={modalVisible}
                        onShow={() => { console.log('Modal Show') }}
                        onRequestClose={() => { console.log('Modal Close') }}
                        >
                        <View style={{
                            flex: 1, 
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // ทำให้พื้นหลังเป็นกึ่งโปร่งใส
                            justifyContent: 'center', // จัดกลางในแนวตั้ง
                            alignItems: 'center', // จัดกลางในแนวนอน
                        }}>
                            <View style={{
                            width: 300, // กำหนดความกว้างของ Modal
                            backgroundColor: '#fff', // สีพื้นหลังของ Modal
                            borderRadius: 10, // มุมโค้งมนของ Modal
                            padding: 20, // ระยะห่างภายใน
                            alignItems: 'center', // จัดกลางในแนวนอนภายใน Modal
                            }}>
                            <Text style={{ marginBottom: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, consectetur est possimus incidunt eum? Saepe dolores sequi nam amet tempore laboriosam quasi, quam sint unde maiores modi delectus dolor?</Text>
                            <View style={{ 
                              flexDirection: 'row',
                              justifyContent: 'space-evenly', 
                              width: '100%' }}>
                                <Button
                                    title='Submit'
                                    onPress={() => {
                                        console.log('Submit Modal');
                                    }}
                                />
                                <Button
                                    title='X Close'
                                    onPress={() => {
                                        SetModalVisible(false);
                                    }}
                                />
                            </View>
                            </View>
                        </View>
                    </Modal>

                    <Button title='Go To From' 
                    onPress={()=> router.push("/textinputdemo")} />
                            <Text>&nbsp;</Text>
                    <Button title='Go To Switc' 
                    onPress={()=> router.push("/switchdemo")} />
                            <Text>&nbsp;</Text>
                    <Button title='Go To Flatlist' 
                    onPress={()=> router.push("/flatlistdemo")} />
                            <Text>&nbsp;</Text>
                            <Button title='Go To Profile' 
                    onPress={()=> router.push("/demo")} />

      <StatusBar style="auto"
       />
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}





