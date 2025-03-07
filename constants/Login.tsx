import { StyleSheet } from "react-native";

const Login = StyleSheet.create ({

    container :{
        flex: 1,
        backgroundColor: "#fff8dc",
        alignItems: "center",
        justifyContent: "center",
    },

    spacing: {
        height: 5,
    },

    logo: {
        width: 280,
        height: 200,
        marginBottom: 20,
    },

    title: {
        color: "#836953",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    
    button : {
        backgroundColor: "#9E826B",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },

    buttonText : {
        color: "#f0f8ff",
        fontSize: 20 ,
        fontWeight: "bold",
    },

});

export default Login;