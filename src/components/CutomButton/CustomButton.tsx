import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
type TCustomButtono = {
  handlePress?: () => void;
  text?: string;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  buttonStyle: ViewStyle;
};
const CustomButton = ({
  handlePress,
  text,
  textStyle,
  icon,
  buttonStyle,
}: TCustomButtono) => {
  const GetIconOrText = () => {
    if (!icon && text) {
      return <Text style={textStyle}>{text}</Text>;
    } else if (icon && !text) return icon;
    else
      return (
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={textStyle}>{text}</Text>
          <View>{icon}</View>
        </View>
      );
  };
  return (
    <TouchableOpacity style={buttonStyle} onPress={handlePress}>
      <GetIconOrText />
    </TouchableOpacity>
  );
};

export default CustomButton;
