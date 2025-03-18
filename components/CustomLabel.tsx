import { View, Text } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  data: string;
  otherStyle?: string;
};

export default function CustomLabel({ icon, data, otherStyle }: Props) {
  return (
    <HStack className="items-center justify-between">
      {icon && <MaterialCommunityIcons name={icon} size={22} color="#616161" />}
      <Text
        className={`text-[#616161] font-ubuntu text-2xl not-italic font-normal leading-[normal] ${otherStyle}`}
      >
        {data}
      </Text>
    </HStack>
  );
}
