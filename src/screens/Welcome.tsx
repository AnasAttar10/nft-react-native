import { Animated, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, FONTS, SIZES } from "@constants/theme";
import CustomButton from "components/CutomButton/CustomButton";
const nft04 = require("@assets/images/nft04.jpg");
const nft06 = require("@assets/images/nft06.jpg");
const nft08 = require("@assets/images/nft08.jpg");
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
type RootStackParamList = {
  home: undefined; // Define 'home' route with no parameters
};
type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "home"
>;
const Welcome = () => {
  const navigate = useNavigation<WelcomeScreenNavigationProp>();
  const handlePress = () => {
    navigate.navigate("home");
  };
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
  const fadeTexts = useRef(new Animated.Value(0)).current;
  const fadeBtn = useRef(new Animated.Value(1)).current;
  const handleAnimation = () => {
    Animated.timing(fadeImagesAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const handleAnimation1 = () => {
    Animated.spring(moveImagesAnimation, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
  };
  const handleAnimation2 = () => {
    Animated.timing(fadeTexts, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };
  const handleAnimation3 = () => {
    Animated.spring(fadeBtn, {
      toValue: 0,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    handleAnimation();
    handleAnimation1();
    handleAnimation2();
    handleAnimation3();
  }, [handleAnimation, handleAnimation1, handleAnimation2, handleAnimation3]);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageAndTitlesContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageContainer}>
          <View style={styles.imageCard}>
            <Image style={styles.image} source={nft04} />
          </View>
          <View style={[styles.imageCard, { marginTop: SIZES.medium + 15 }]}>
            <Image style={styles.image} source={nft06} />
          </View>
          <View style={styles.imageCard}>
            <Image style={styles.image} source={nft08} />
          </View>
        </View>
        <Animated.View style={[styles.textContainer, { opacity: fadeTexts }]}>
          <Text style={styles.title}>Find, Collect and Sell Amazing NFTs</Text>
          <Text style={styles.subTitle}>
            Explore the top collection of NFTs and buy and sell your NFTs as
            well
          </Text>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[
          styles.getStartedBtn,
          {
            transform: [
              {
                translateY: fadeBtn.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <CustomButton
          text="Get Started"
          buttonStyle={styles.button}
          textStyle={styles.textButton}
          handlePress={handlePress}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.small + 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imageAndTitlesContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2 / 3,
  },
  imageContainer: {
    top: -SIZES.medium,
    flexDirection: "row",
    gap: SIZES.small,
  },
  imageCard: {
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    backgroundColor: COLORS.cardBg,
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  textContainer: {},
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xlarge,
    color: COLORS.white,
    textAlign: "center",
    margin: 20,
  },
  subTitle: {
    fontFamily: FONTS.light,
    fontSize: SIZES.medium,
    color: COLORS.gray,
    textAlign: "center",
  },
  getStartedBtn: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textButton: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
});
