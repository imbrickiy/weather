import React from "react";
import Gradient from "@/assets/Icons/Gradient";
import DocumentData from "@/assets/Icons/DocumentData";
import LightBulbPerson from "@/assets/Icons/LightbulbPerson";
import Rocket from "@/assets/Icons/Rocket";
import Logo from "@/assets/Icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";
import { Text } from "@/components/ui/text";

import { Link } from "expo-router";
import { VStack } from "@/components/ui/vstack";

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      className="flex-column border border-w-1 border-outline-700 md:flex-1 m-2 p-4 rounded"
      key={name}
    >
      <Box className="items-center flex flex-row">
        <Text>
          <IconSvg />
        </Text>
        <Text className="text-typography-white font-medium ml-2 text-xl">
          {name}
        </Text>
      </Box>
      <Text className="text-typography-400 mt-2">{desc}</Text>
    </Box>
  );
};

export default function Home() {
  return (
    <Box className="flex-col bg-black h-[100vh] items-center justify-between">
      <Box className="flex w-full" />
      <Box className="">
        <Link href="/tabs">
          <Text className=" text-center text-4xl font-ubuntu text-white">
            Weather
          </Text>
        </Link>
      </Box>
      <Box className="flex w-full pb-4">
        <Text className=" text-[#616161] text-center ">
          A minimal weather app
        </Text>
      </Box>
    </Box>
  );
}
