import CustomButton from "@/components/CustomButton";
import CustomLabel from "@/components/CustomLabel";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <Center className="flex-1 mx-auto">
        <HStack className="justify-between w-full px-2 h-[26px] items-center">
          <Box>
            <CustomLabel data="Mumbai" otherStyle="text-[26px] text-white" />
            {/* <Text className="font-normal text-[24px] text-white font-ubuntu">
              Mumbai
            </Text> */}
            <CustomLabel data="Current Location" />
          </Box>
          <HStack className="items-center gap-5">
            <CustomButton
              link="/tabs/location"
              title="Home"
              icon="map-outline"
            />
            <CustomButton
              link="/tabs/settings"
              title="Settings"
              icon="settings-outline"
            />
          </HStack>
        </HStack>
        <VStack className="items-center h-[80vh] justify-between space-y-4 pt-14">
          <CustomLabel data="in sync" />
          <CustomLabel data="Friday, 25 December 2020" />

          <Text className="font-normal text-white text-[110px] font-ubuntu">
            22°C
          </Text>
          <HStack className="justify-between" space="4xl">
            <CustomLabel icon="arrow-down" data="16°C" />
            <CustomLabel icon="arrow-up" data="16°C" />
          </HStack>
          <VStack className="items-center  pt-14">
            <MaterialCommunityIcons
              name="weather-pouring"
              size={160}
              color={"#ffffff"}
            />
          </VStack>
          <CustomLabel data="Light Drizzle" />
          <HStack className="justify-between" space="4xl">
            <CustomLabel icon="weather-sunset-up" data="16°C" />
            <CustomLabel icon="weather-sunset-down" data="16°C" />
          </HStack>
        </VStack>
      </Center>
    </SafeAreaView>
  );
}
