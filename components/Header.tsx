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

type Props = {
  data: string;
  url: any;
  description?: string;
};

export default function Header({ data, url, description }: Props) {
  return (
    <HStack className="justify-between w-full px-2 h-[26px]">
      <Box>
        <Pressable onPress={() => router.push(url)} className="text-white">
          <CustomLabel data={data} otherStyle="text-[26px] text-white" />
        </Pressable>
        <CustomLabel data={description || "Current Location"} />
      </Box>
      <HStack className="gap-5">
        <CustomButton link="/tabs/location" title="Home" icon="map-outline" />
        <CustomButton
          link="/tabs/settings"
          title="Settings"
          icon="settings-outline"
        />
      </HStack>
    </HStack>
  );
}
