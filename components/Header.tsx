import { View, Text } from "react-native";
import React from "react";
import { HStack } from "./ui/hstack";
import { Box } from "./ui/box";
import CustomLabel from "./CustomLabel";
import CustomButton from "./CustomButton";
import { Data } from "@/interface/data";
import { Link, router } from "expo-router";

type Props = {
  data: string;
};

export default function Header({ data }: Props) {
  return (
    <HStack className="justify-between w-full px-2 h-[26px]">
      <Box>
        <Link href="/tabs/details">
          <CustomLabel data={data} otherStyle="text-[26px] text-white" />
        </Link>
        <CustomLabel data="Current Location" />
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
