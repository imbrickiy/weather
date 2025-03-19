import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Center } from "@/components/ui/center";
import Header from "@/components/Header";
import { Data } from "@/interface/data";
import { VStack } from "@/components/ui/vstack";
import CustomLabel from "@/components/CustomLabel";

type Props = {
  data: string;
};

export default function Details({ data }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Center className="flex-1 mx-auto">
        <Header data={data} />
        <VStack className="items-center h-[80vh] justify-start space-y-4 pt-14">
          <CustomLabel data="Details" otherStyle="text-[26px] text-white" />
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
