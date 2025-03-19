import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Center } from "@/components/ui/center";
import Header from "@/components/Header";
import { Data } from "@/interface/data";
import { VStack } from "@/components/ui/vstack";
import CustomLabel from "@/components/CustomLabel";
import { LinkProps } from "expo-router";
import { HStack } from "@/components/ui/hstack";

export default function Details() {
  const data = require("../../assets/data.json") as Data;
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Center className="flex-1 mx-auto">
        <Header data="Back" url="/tabs/" description={data.name} />
        <VStack className="items-center h-[80vh] justify-start space-y-4 pt-14">
          <HStack className="justify-between w-full px-2 h-[26px]">
            <CustomLabel data="Details" otherStyle="text-[26px] text-white" />
            <CustomLabel data="Forecast" otherStyle="text-[26px] text-gray" />
          </HStack>
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
