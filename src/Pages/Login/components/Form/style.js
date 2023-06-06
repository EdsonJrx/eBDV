import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Main: {
        position:'relative',
        flexDirection : "column",
        justifyContent: 'space-around',
        alignItems: 'center',
        height:300,
        paddingVertical:10

    },
    EmailContext: {
        position:'relative',
        flexDirection : "row",
        backgroundColor:'#BDBFC1',
        borderRadius:50,
        //flex: 1,
        width: 300,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10,
        
    },
    Icon: {
        position:'relative',
        zIndex:1,
        width:30,
        justifyContent: 'center',

    },
    Text: {
        position:'relative',
        paddingLeft:10,
        flex: 6,
        width: 300,
        height: 50,
        fontSize: 20,
    },
});

export default styles