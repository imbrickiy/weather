import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "./ui/hstack";

type Props = {
  title?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  clickHandler?: () => void;
};

export default function CustomButton({ title, icon, clickHandler }: Props) {
  return (
    <TouchableOpacity onPress={clickHandler}>
      {!title ? (
        <Ionicons name={icon} size={24} color={"#ffffff"} />
      ) : (
        <HStack className="items-center">
          <Ionicons name={icon} size={20} color={"#616161"} />
          <Text className="font-normal text-[23px] text-[#616161] font-ubuntu">
            {title}
          </Text>
        </HStack>
      )}
    </TouchableOpacity>
  );
}
