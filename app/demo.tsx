import { router } from 'expo-router'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function ProFileDemo() {

  // สร้างตัวแปร inputName, inputEmail, inputTel โดยใช้ useState()
  const [inputUserName, setInputUserName] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputFullName, setInputFullName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputTel, setInputTel] = useState("")

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Simple Form</Text>

      <Text>UserName</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputUserName}
        onChange={(e) => setInputUserName(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Name"
      />
        <Text style={{  fontSize: 10, color: "gray" }}>กรอกชื่อ</Text>

        <Text>Password</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputPassword}
        onChange={(e) => setInputPassword(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Password"
      />

<Text>FullName</Text>
      <TextInput
        keyboardType="default"
        defaultValue={inputFullName}
        onChange={(e) => setInputFullName(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Name"
      />

      <Text>Email</Text>
            <TextInput
              keyboardType="email-address"
              defaultValue={inputEmail}
              onChange={(e) => setInputEmail(e.nativeEvent.text)}
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                width: 200,
                padding: 10,
                margin: 10,
                borderRadius: 5,
                
              }}
              placeholder="Email"
            />

      <Text>Tel</Text>
      <TextInput
        keyboardType="phone-pad"
        defaultValue={inputTel}
        onChange={(e) => setInputTel(e.nativeEvent.text)}
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        placeholder="Tel"
      />

      
      <Button title='Submit'
       onPress={() => 
        router.push({
        pathname : "/profiledemo",
        params: {
          UserName:`${inputUserName}`,
          Password: `${inputPassword}`,
          Fullname: `${inputFullName}`,
          Email: `${inputEmail}`,
          Tel: `${inputTel}`
        },
       })} />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
})
  