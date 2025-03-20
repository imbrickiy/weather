import { View, Text } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleAttribute } from "react-native-css-interop/dist/types";
import { Box } from "./ui/box";

type Props = {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  data?: string;
  size?: number;
  color?: string;
  className?: StyleAttribute;
};

export default function CustomLabel({
  icon,
  data,
  size = 24,
  color = "#616161",
  className,
}: Props) {
  return (
    <HStack className="items-center justify-between">
      {!data ? (
        <MaterialCommunityIcons name={icon} size={size} color={color} />
      ) : (
        <HStack className="items-center justify-between">
          <MaterialCommunityIcons name={icon} size={size} color={color} />
          <Text
            className={`text-[${color}] text-2xl font-ubuntu not-italic font-normal leading-[normal] ${className}`}
          >
            {data}
          </Text>
        </HStack>
      )}
    </HStack>
  );
}
