import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <HStack space="4xl" className="p-2">
        <HStack className="items-center">
          <Link href="/tabs">
            <Ionicons name="chevron-back" size={20} color={"#616161"} />
          </Link>
          <Text className="font-normal text-[23px] text-[#616161] font-ubuntu">
            Settings
          </Text>
        </HStack>
      </HStack>
      <Box className="flex-1 justify-center items-center p-4">
        <Text className="text-white">Settings</Text>
      </Box>
    </SafeAreaView>
  );
}
