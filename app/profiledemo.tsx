import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import Login from '@/constants/Login ';
import {  useRouter, useLocalSearchParams } from 'expo-router';


export default function profiledemo() {
    
  const router = useRouter();   //userouter
  const { UserName, Password, FullName, Email ,Tel } = useLocalSearchParams();  //use localSearch

  return (
    <View style={Login.container}>
      <Text>Profile</Text>
      <Text> Username : {UserName} </Text>
      <Text> Password : {Password} </Text>
      <Text> Fullname : {FullName} </Text>
      <Text> Email : {Email} </Text>
      <Text>Tel : {Tel} </Text>
      <Button title='Back' onPress={()=> router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({})