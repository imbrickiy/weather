import { View, Text, SafeAreaView, PermissionsAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "@/components/ui/hstack";
import { Box } from "@/components/ui/box";
import CustomButton from "@/components/CustomButton";
import { NavigationProp, useRoute } from "@react-navigation/native";
import { VStack } from "@/components/ui/vstack";
import { Center } from "@/components/ui/center";
import { Data } from "@/interface/data";
import Header from "@/components/Header";

type Props = {
  navigation: NavigationProp<any>;
};
export default function LocationScreen({ navigation }: Props) {
  const route = useRoute();
  const data = route.params as Data;
  console.log(data);
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
            <View style={{ flex: 1 }}>
              <Text className="text-white text-lg">Location</Text>
            </View>
          </HStack>
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
