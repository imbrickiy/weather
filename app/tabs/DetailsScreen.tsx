import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Center } from "@/components/ui/center";
import Header from "@/components/Header";
import { Data } from "@/interface/data";
import { VStack } from "@/components/ui/vstack";
import CustomLabel from "@/components/CustomLabel";
import { LinkProps } from "expo-router";
import { HStack } from "@/components/ui/hstack";
import { NavigationProp, useRoute } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

export default function DetailsScreen({ navigation }: Props) {
  const route = useRoute();
  const onBackPressed = () => {
    navigation.goBack();
  };
  const data = route.params as Data;
  console.log(data);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <Center className="flex-1 mx-auto">
        <Header
          title="Back"
          handlerPress={onBackPressed}
          description={data.name}
          navigation={navigation}
        />
        <VStack className="items-center h-[80vh] justify-start space-y-4 pt-14">
          <HStack className="justify-between w-full px-2 h-[26px]">
            <CustomLabel data="Details" className="text-2xl text-white" />
            <CustomLabel data="Forecast" className="text-2xl" />
          </HStack>
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
