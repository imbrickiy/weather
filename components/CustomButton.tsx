import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinkProps, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  link: LinkProps["href"];
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  clickHandler?: () => void;
};

export default function CustomButton({
  link,
  title,
  icon,
  clickHandler,
}: Props) {
  return (
    <TouchableOpacity onPress={() => router.push(link)}>
      {icon ? (
        <Ionicons name={icon} size={24} color={"#ffffff"} />
      ) : (
        <Text>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
