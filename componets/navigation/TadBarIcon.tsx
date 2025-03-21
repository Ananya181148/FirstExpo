import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Login from "@/constants/Login ";

import { FontAwesome } from "@expo/vector-icons";
import { Icon, type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export default function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof FontAwesome>["name"]>) {
  return <FontAwesome size={20} style={[{ marginBottom: -3 }, style]} {...rest} />;
}
