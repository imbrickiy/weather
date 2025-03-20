import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import Header from "@/components/Header";
import { VStack } from "@/components/ui/vstack";

export default function SettingsScreen({ navigation }: any) {
  const onBackPressed = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Center className="flex-1 mx-auto">
        <Header
          title="Back"
          handlerPress={onBackPressed}
          navigation={navigation}
        />
        <VStack className="items-center h-[80vh] justify-start space-y-4 pt-14">
          <HStack className="justify-between w-full px-2 h-[26px]">
            <Box className="flex-1 justify-center items-center p-4">
              <Text className="text-white">Settings</Text>
            </Box>
          </HStack>
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
