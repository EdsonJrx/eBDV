import React from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    LogBox
} from 'react-native';

import { styles } from "./styles";
import  Mlogo  from "../Login/components/Logo"
import Form from "../Login/components/Form"

export function Login() {
    return (
        <View style={styles.container}>
            <Mlogo width={120} height={40}/>
            <Form/>
        </View>
    )
}