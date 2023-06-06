import React from "react";
import { View } from "react-native";
import Logo from "../../../../../assets/svg/logo.svg";
import styles from "./style";

export default function Mlogo(){
    return(
        <View style={styles.logoStyle}>
            <Logo width="150" height="150"/>
        </View>
    )
}