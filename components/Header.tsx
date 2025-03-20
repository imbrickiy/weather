import { View, Text } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { Box } from "./ui/box";
import CustomLabel from "./CustomLabel";
import CustomButton from "./CustomButton";
import { Data } from "@/interface/data";
import { router } from "expo-router";
import { Link, LinkText } from "@/components/ui/link";
import { Pressable } from "@/components/ui/pressable";
import { LinkProps } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  title: string;
  handlerPress?: () => void;
  description?: string;
  navigation: NavigationProp<any>;
};

export default function Header({
  title,
  handlerPress,
  description,
  navigation,
}: Props) {
  const handlerToLocation = () => {
    navigation.navigate("Location", { screen: "Location" });
  };
  const handlerToSettings = () => {
    navigation.navigate("Settings", { screen: "Settings" });
  };
  return (
    <HStack className="justify-between w-full px-2 h-[26px]">
      <Box>
        <Pressable onPress={handlerPress}>
          <CustomLabel data={title} className="text-2xl text-white" />
        </Pressable>
        <CustomLabel
          data={description || "Current Location"}
          className="text-2xl"
        />
      </Box>
      <HStack className="gap-5">
        <CustomButton icon="map-outline" clickHandler={handlerToLocation} />
        <CustomButton
          icon="settings-outline"
          clickHandler={handlerToSettings}
        />
      </HStack>
    </HStack>
  );
}
