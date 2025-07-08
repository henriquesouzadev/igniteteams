import { Image } from "expo-image";
import React from "react";
import styles from "./styles";

const Logo = () => {
  return (
    <Image
      source={require("@/src/assets/logo.png")}
      style={styles.logo}
      contentFit="contain"
      transition={1000}
    />
  );
};

export default Logo;
