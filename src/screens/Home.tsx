import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { COLORS, FONTS, SIZES } from "@constants/theme";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { DATA } from "@constants/data";
import NFTCard from "components/NFTCard/NFTCard";
const avatar03 = require("@assets/avatars/avatar03.jpg");
const Home = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const [search, setSearch] = useState("");
  const handleSearch = (text: string) => {
    setSearch(text);
  };
  const handleMoveAnimation = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  const handleRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => {
      console.log("anas");
      setIsRefresh(false);
    }, 5000);
  };
  useEffect(() => {
    handleMoveAnimation();
  }, [handleMoveAnimation]);
  const filterationData = search
    ? DATA.filter((d) => d.name.toLowerCase().includes(search))
    : DATA;

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          alignItems: "center",
          margin: SIZES.small,
          top: -100,
          transform: [
            {
              translateY: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 100],
              }),
            },
          ],
        }}
      >
        <View style={styles.userInfo}>
          <View style={styles.imageWrapper}>
            <Image source={avatar03} style={styles.image} />
          </View>

          <Text style={styles.userName}>Anas Attar</Text>
          <View
            style={{
              backgroundColor: "white",
              padding: 2,
              borderRadius: 50,
              width: 20,
              height: 20,
            }}
          >
            <Icon name="check" size={15} />
          </View>
        </View>
        <Text style={styles.userJob}>React Native Developer </Text>
      </Animated.View>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search ... "
          onChangeText={handleSearch}
        />
        <View style={styles.iconWrapper}>
          <Icon name="search" color={"gray"} size={20} />
        </View>
      </View>
      <FlatList
        data={filterationData}
        renderItem={({ item }) => <NFTCard {...item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />
        }
      />
      <Link to={"/welcome"} style={{ color: "white" }}>
        welcome page
      </Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  imageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  userName: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.xlarge,
    color: COLORS.white,
  },
  userJob: {
    fontFamily: FONTS.light,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  searchWrapper: {
    position: "relative",
  },
  searchInput: {
    width: "90%",
    padding: SIZES.small,
    marginHorizontal: "auto",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    marginVertical: SIZES.large,
    fontSize: SIZES.large,
  },
  iconWrapper: {
    position: "absolute",
    right: SIZES.xlarge + 10,
    top: SIZES.xlarge + 5,
  },
});
