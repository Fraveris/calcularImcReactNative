import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
import ResultImc from "./ResultImc"
import formcss from "./formcss"

export default function Form() {

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual a:")
        setTextButton("Calcular")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
}

    return(
     <View style={formcss.formContext}>
        <View style={formcss.form}>
            <Text style={formcss.formLabel}>Altura</Text>
            <TextInput style={formcss.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric" />

            <Text style={formcss.formLabel}>Peso</Text>
            <TextInput style={formcss.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 65"
            keyboardType="numeric" />
            <TouchableOpacity onPress={() => validationImc()} style={formcss.buttonCalculator}>
                <Text style={formcss.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
     </View>
    )
}