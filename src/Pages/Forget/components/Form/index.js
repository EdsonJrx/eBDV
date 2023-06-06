import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./style";
import auth from '@react-native-firebase/auth';

export default function Form(){

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [shw, setShw] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    function login() {
        setIsLoading(true);

        if(user === '' || password === '') {
            Alert.alert('Algo deu errado', 'Preencha todos os campor!');
            return;
        };
        auth()
            .signInWithEmailAndPassword(user,password)
            .then(() => Alert.alert("Login","LOgin com sucesso"))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    };

    return(
        <View style={styles.Main}>
            <View style={styles.EmailContext}>
                <Icon style={styles.Icon}
                    name="envelope"
                    size={25} 
                    color="#004692"
                />
                <TextInput style={styles.Text}
                    onChangeText={setUser}
                    value={user}
                    placeholder="E-mail"
                />
            </View>
            <View style={styles.EmailContext}>
                <Icon style={styles.Icon}
                    name="lock"
                    size={30}
                    color="#004692"
                />
                <TextInput style={styles.Text}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry= {visible}
                />
                <TouchableOpacity style={styles.Icon}
                    onPress={
                        () =>{
                            setShw(!shw)
                            setVisible(!visible)
                        }
                    }>
                    <Icon
                        name={shw === false ? "eye":"eye-slash"}
                        size={25} 
                        color="#565451"
                    />
                </TouchableOpacity>
            </View>
            <View  style={{height:140,justifyContent:'space-around',}} >
                <TouchableOpacity style={{backgroundColor:'#004692',justifyContent:"center",alignItems:'center',height:40,}}
                    title="Login"
                    onPress={() => login()}   
                >
                    <Text style={{fontSize:20,color:"white",}}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={{ height:50,alignItems:'center'}}>
                    <Text>Esqueceu a Senha?</Text>
                    <TouchableOpacity style={{ height:30,justifyContent:"center"}}>
                        <Text style={{fontSize:20, color:"#004692"}}>
                            Clique Aqui
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}