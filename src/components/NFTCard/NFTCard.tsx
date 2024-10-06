import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@constants/theme";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "components/CutomButton/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "navigations/AppNavigation";
type NTFDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "NftDetails"
>;
type TAvatar = { id: string; image: ImageSourcePropType };
type TNFTCard = {
  id: string;
  name: string;
  creator: string;
  date: string;
  views: string;
  comments: number;
  price: number;
  image: ImageSourcePropType;
  avatars: TAvatar[];
};
const NFTCard = ({
  id,
  name,
  creator,
  views,
  comments,
  price,
  date,
  image,
  avatars,
}: TNFTCard) => {
  const navigate = useNavigation<NTFDetailsScreenNavigationProp>();
  const handleNavigation = (id: string) => {
    navigate.navigate("NftDetails", { id }); // Passing 'id' as a parameter
  };
  const handleViews = () => {
    console.log("Views");
  };
  const handleComments = () => {
    console.log("Comments");
  };
  const handleMoney = () => {
    console.log("money");
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => handleNavigation(id)}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.avatarsContainer}>
            {avatars.map((a, idx) => (
              <View style={[styles.avatarWrapper]} key={a.id}>
                <Image style={styles.avatarImage} source={a.image} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Text style={styles.cardInfo}>{creator}</Text>
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

            <Text style={styles.cardInfo}>{date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.btnsContainer}>
        <CustomButton
          text={views}
          icon={<Icon name="eye" color={"#fff"} size={15} />}
          textStyle={styles.textButton}
          buttonStyle={styles.button}
          handlePress={handleViews}
        />
        <CustomButton
          text={String(comments)}
          textStyle={styles.textButton}
          icon={<Icon name="comment" color={"#fff"} size={15} />}
          buttonStyle={styles.button}
          handlePress={handleComments}
        />
        <CustomButton
          text={String(price)}
          textStyle={styles.textButton}
          icon={<Icon name="money" color={"#fff"} size={15} />}
          buttonStyle={styles.button}
          handlePress={handleMoney}
        />
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "98%",
    marginHorizontal: "auto",
    backgroundColor: COLORS.cardBg,
    marginBottom: SIZES.xlarge * 2,
  },
  imageContainer: {
    width: "100%",
    marginHorizontal: "auto",
    height: SIZES.small * 30,
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
});
