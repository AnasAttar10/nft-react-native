import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { DATA } from "@constants/data";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { COLORS, FONTS, SIZES } from "@constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "components/CutomButton/CustomButton";
import { RootStackParamList } from "navigations/AppNavigation";
// Define the route prop type for NftDetails
type NftDetailsScreenRouteProp = RouteProp<RootStackParamList, "NftDetails">;

// Define the navigation prop type for NftDetails
type NftDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "NftDetails"
>;
type Props = {
  route: NftDetailsScreenRouteProp;
  navigation: NftDetailsScreenNavigationProp;
};
const NftDetails = ({ route, navigation }: Props) => {
  const targetItem = DATA.find((d) => d.id === route.params.id);
  const moveAnimated = useRef(new Animated.Value(0)).current;
  const fadeAnimated = useRef(new Animated.Value(0)).current;
  const handleMoveAnimated = () => {
    Animated.sequence([
      Animated.spring(moveAnimated, {
        toValue: 1,
        friction: 6,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimated, {
        toValue: 1,
        duration: 1000,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };
  useEffect(() => {
    handleMoveAnimated();
  }, [handleMoveAnimated]);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateY: moveAnimated.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image source={targetItem?.image} style={styles.image} />
            <View style={styles.avatarsContainer}>
              {targetItem?.avatars.map((a, idx) => (
                <View style={[styles.avatarWrapper]} key={a.id}>
                  <Image style={styles.avatarImage} source={a.image} />
                </View>
              ))}
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{targetItem?.name}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text style={styles.cardInfo}>{targetItem?.creator}</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 2,
                    borderRadius: 50,
                  }}
                >
                  <Icon name="check" size={15} />
                </View>
              </View>

              <Text style={styles.cardInfo}>{targetItem?.date}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.btnsContainer}>
          <CustomButton
            text={targetItem?.views}
            icon={<Icon name="eye" color={"#fff"} size={15} />}
            textStyle={styles.textButton}
            buttonStyle={styles.button}
          />
          <CustomButton
            text={String(targetItem?.comments)}
            textStyle={styles.textButton}
            icon={<Icon name="comment" color={"#fff"} size={15} />}
            buttonStyle={styles.button}
          />
          <CustomButton
            text={String(targetItem?.price)}
            textStyle={styles.textButton}
            icon={<Icon name="money" color={"#fff"} size={15} />}
            buttonStyle={styles.button}
          />
        </View>
        <View>
          <View style={styles.otherInfoContainer}>
            <Text style={styles.otherInfoText}>Contract Address</Text>
            <Text style={styles.otherInfoText}>{targetItem?.address}</Text>
          </View>
          <View style={styles.otherInfoContainer}>
            <Text style={styles.otherInfoText}>Token ID</Text>
            <Text style={styles.otherInfoText}>{targetItem?.tokenId}</Text>
          </View>
          <View style={styles.otherInfoContainer}>
            <Text style={styles.otherInfoText}>Token Standerd</Text>
            <Text style={styles.otherInfoText}>{targetItem?.tokenSt}</Text>
          </View>
          <View style={styles.otherInfoContainer}>
            <Text style={styles.otherInfoText}>Blockchain</Text>
            <Text style={styles.otherInfoText}>{targetItem?.blockchain}</Text>
          </View>
        </View>
        <Animated.View
          style={[
            styles.btnContainer,
            {
              opacity: fadeAnimated,
            },
          ]}
        >
          <View>
            <Text style={styles.otherInfoText}>Top Bid</Text>
            <Text style={[styles.otherInfoText, { paddingTop: 10 }]}>
              {targetItem?.topBid}
            </Text>
          </View>
          <CustomButton
            text="Place a bid"
            textStyle={styles.textMainButton}
            buttonStyle={styles.mainbutton}
            handlePress={() => console.log("anas")}
          />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default NftDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imageContainer: {
    width: "100%",
    marginHorizontal: "auto",
    height: SIZES.medium * 30,
    position: "relative",
    padding: SIZES.small,
    borderRadius: SIZES.large,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.large,
  },
  avatarsContainer: {
    position: "absolute",
    bottom: 0,
    left: SIZES.xlarge + 6,
    flexDirection: "row",
  },
  avatarWrapper: {
    width: 50,
    height: 50,
    marginLeft: -5,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.xlarge * 2,
  },
  textContainer: { height: SIZES.xlarge * 2, margin: SIZES.large },
  name: {
    color: COLORS.white,
    fontSize: SIZES.xlarge,
    fontFamily: FONTS.bold,
  },
  cardInfo: {
    color: COLORS.gray,
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    marginVertical: SIZES.small,
  },
  btnsContainer: {
    margin: SIZES.xlarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textButton: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.small,
    color: "white",
  },
  button: {
    backgroundColor: COLORS.second,
    borderRadius: SIZES.large,
    height: SIZES.xlarge + 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  otherInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  otherInfoText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  btnContainer: {
    width: "80%",
    margin: "auto",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.cardBg,
  },
  mainbutton: {
    backgroundColor: COLORS.second,
    padding: SIZES.small + 4,
    width: 200,
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  textMainButton: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
  },
});
