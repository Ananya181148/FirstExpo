import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Login from '@/constants/Login '
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Name } from 'ajv/lib/compile/codegen/code';

export default function Contact() {
    const router = useRouter();
    const { name, majior, email } = useLocalSearchParams();
  return (
    <View style={Login.container}>
      <Text>contact Page</Text>
      <Text>Name : { name }</Text>
      <Text>Majior : { majior }</Text>
      <Text>Email : { email }</Text>
      <Button title= 'Back' onPress={()=> router.back()} />
    </View>
  )
};

const styles = StyleSheet.create({})