import { StyleSheet } from "react-native";

const formcss = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: "100%",
        paddingTop: 20,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "92%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "92%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color:"#ffffff",
    },
    errorMessage: {
        fontSize: 12,
        color: "#FF0043",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exhibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    listImcs: {
        marginTop: 20,
        paddingLeft: 24,
    },
    resultImcItem: {
        fontSize: 16,
        color: "#FF0043",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItemList: {
        fontSize: 28,
    }
})

export default formcss
