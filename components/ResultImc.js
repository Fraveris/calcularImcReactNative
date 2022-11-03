import React from "react"
import { View, Text } from "react-native"
import ResultImccss from "./ResultImccss"

export default function ResultImc(props) {
    return(
        <View style={ResultImccss.resultImc}>
        <Text style={ResultImccss.information}>{props.messageResultImc}</Text> 
          <Text style={ResultImccss.numberImc}>{props.resultImc}</Text>
        </View>
    )
}