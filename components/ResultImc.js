import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import ResultImccss from "./ResultImccss"

export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: "Meu imc hoje é: " +props.resultImc,
    })
  }

  return(
        <View style={ResultImccss.resultImc}>
          <View style={ResultImccss.boxShareButton}>
            {props.resultImc != null ?
            <TouchableOpacity
            onPress={onShare}
            style={ResultImccss.shared}>
              <Text style={ResultImccss.sharedText}>Share</Text>
            </TouchableOpacity>
            :
            <View/>
            }
            </View>
        <Text style={ResultImccss.information}>{props.messageResultImc}</Text> 
          <Text style={ResultImccss.numberImc}>{props.resultImc}</Text>
        </View>
    )
}
