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
import { Link, router } from "expo-router";
import { SafeAreaView, Image, Pressable } from "react-native";
import useFetch from "@/hooks/useFetch";
import { Data } from "@/interface/data";
import { formatUnixToUTC } from "@/utils/formatUnixToUTC";
import { kelvinToCelsius } from "@/utils/kelvinToCelsius";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { Animated } from "react-native";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Spinner } from "@/components/ui/spinner";
import colors from "tailwindcss/colors";
import { Alert, AlertText, AlertIcon } from "@/components/ui/alert";
import { InfoIcon } from "@/components/ui/icon";

const iconUrl = "https://openweathermap.org/img/wn/";
export default function HomeScreen({ navigation }: any) {
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
  // if (loading) return <Spinner size="large" color={colors.gray[500]} />;
  // if (error) return (
  //   <Alert action="error" variant="outline">
  //     <AlertIcon as={InfoIcon} />
  //     <AlertText>{error}</AlertText>
  //   </Alert>
  // );

  const currentDate = getCurrentDate();
  const navigateToDetails = () => {
    navigation.navigate("Details", data);
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      {data && (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <Center className="flex-1 mx-auto">
            <Header title={data.name} navigation={navigation} />
            <VStack className="items-center h-[80vh] justify-between space-y-4 pt-14">
              <Pressable onPress={navigateToDetails}>
                <CustomLabel
                  icon="cursor-default-click"
                  size={30}
                  color="#ffffff"
                />
              </Pressable>
              <CustomLabel data={currentDate} className="text-2xl" />

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
                  source={{ uri: iconUrl + data.weather[0].icon + "@4x.png" }}
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
