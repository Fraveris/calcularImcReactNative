import React from "react"
import { View, Text } from "react-native"
import titlecss from "./titlecss"

export default function Title() {
    return(
        <View style={titlecss.boxTitle}>
            <Text style={titlecss.textTitle}>Calculador de IMC</Text>
        </View>
    )
}