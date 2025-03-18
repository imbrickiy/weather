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
import { SafeAreaView, Image } from "react-native";
import useFetch from "@/hooks/useFetch";
import { Data } from "@/interface/data";
import { formatUnixToUTC } from "@/utils/formatUnixToUTC";
import { kelvinToCelsius } from "@/utils/kelvinToCelsius";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";

const KEY = "672d3a04afaebefd5f2060053085fd65";
const URI =
  "https://api.openweathermap.org/data/2.5/weather?lat={LAT}&lon={LON}&appid={API_KEY}";
const URI_ICON = "https://openweathermap.org/img/wn/";
const URI_IZMIR =
  "https://api.openweathermap.org/data/2.5/weather?lat=38.4224548&lon=27.1310699&appid=672d3a04afaebefd5f2060053085fd65&units=metric";

export default function Home() {
  const data = require("../../assets/data.json");
  // const { data, loading, error } = useFetch(URI_IZMIR);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Начальное значение для анимации

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Продолжительность анимации в миллисекундах
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // if (loading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error: {error}</Text>;

  const currentDate = getCurrentDate();

  return (
    <SafeAreaView className="flex-1 bg-black">
      {data && (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <Center className="flex-1 mx-auto">
            <HStack className="justify-between w-full px-2 h-[26px]">
              <Box>
                <CustomLabel
                  data={data.name}
                  otherStyle="text-[26px] text-white"
                />
                <CustomLabel data="Current Location" />
              </Box>
              <HStack className="gap-5">
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
              <CustomLabel data={currentDate} />

              <Text className="font-normal text-white text-[110px] font-ubuntu">
                {data.main.temp.toFixed(0)}°C
              </Text>
              <HStack space="4xl">
                <CustomLabel
                  icon="arrow-down"
                  data={data.main.temp_min.toFixed(1) + "°C"}
                />
                <CustomLabel
                  icon="arrow-up"
                  data={data.main.temp_max.toFixed(1) + "°C"}
                />
              </HStack>
              <HStack space="4xl">
                <CustomLabel
                  icon="water-outline"
                  data={data.main.humidity + "%"}
                />
                <CustomLabel
                  icon="weather-windy"
                  data={data.wind.speed + " m/s"}
                />
              </HStack>
              <VStack className="items-center">
                <Image
                  source={{ uri: URI_ICON + data.weather[0].icon + "@4x.png" }}
                  className="text-white w-[200px] h-[200px]"
                  resizeMode="contain"
                />
              </VStack>
              <CustomLabel data={data.weather[0].main} />
              <HStack space="4xl">
                <CustomLabel
                  icon="weather-sunset-up"
                  data={formatUnixToUTC(data.sys.sunrise)}
                />
                <CustomLabel
                  icon="weather-sunset-down"
                  data={formatUnixToUTC(data.sys.sunset)}
                />
              </HStack>
            </VStack>
          </Center>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}
