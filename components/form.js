import React, { useState } from "react"
import { View, TextInput, Text, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList, } from "react-native"
import ResultImc from "./ResultImc"
import formcss from "./formcss"

export default function Form() {

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState([])

function imcCalculator() {
    let heightFormat = height.replace(",",".")
    let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2)
    let classification
     if (totalImc < 18.5) {
        classification = "Abaixo do peso"
    } else if (totalImc >= 18.5 && totalImc < 25) {
        classification = "Peso normal"
    } else if (totalImc >= 25 && totalImc < 30) {
        classification = "Acima do peso"
    } else if (totalImc >= 30 && totalImc < 35) {
        classification = "Obesidade"
    } else if (totalImc >= 35 && totalImc < 40) {
        classification = "Obesidade severa" 
    } else {
        classification = "Obesidade mórbida"
    }
    setImcList ((arr) => [...arr, {id:new Date().getTime(), imc:totalImc, level:classification }])
    setImc(totalImc)
}

function verificationImc() {
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("Campo obrigatório")
    } else {

    }
}

function validationImc() {
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual a:")
        setTextButton("Calcular")
        setErrorMessage(null)
    } 
    else {
        verificationImc()  
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    } 
}

    return(
        <View style={formcss.formContext}>
            {imc == null ? 
        <Pressable onPress={Keyboard.dismiss} style={formcss.form}>
            <Text style={formcss.formLabel}>Altura</Text>
            <Text style={formcss.errorMessage}>{errorMessage}</Text>
            <TextInput style={formcss.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric" />

            <Text style={formcss.formLabel}>Peso</Text>
            <Text style={formcss.errorMessage}>{errorMessage}</Text>
            <TextInput style={formcss.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 65"
            keyboardType="numeric" />
            <TouchableOpacity onPress={() => validationImc()} style={formcss.buttonCalculator}>
                <Text style={formcss.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </Pressable>
        : 
        <View style={formcss.exhibitionResultImc}>
        <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        <TouchableOpacity onPress={() => validationImc()} style={formcss.buttonCalculator}>
                <Text style={formcss.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
        </View>
        }
        <FlatList style={formcss.listImcs} data={imcList.reverse()} renderItem={({item}) =>{
            return(
                <Text style={formcss.resultImcItem}>
                   Resultado IMC = <Text style={formcss.textResultItemList}>{item.imc}</Text>
                   <Text style={formcss.textLevel}> ({item.level})</Text>
                </Text>
            )
        }}
        KeyExtractor={(item) => {
            item.id
        }}>

        </FlatList>
     </View>
    )
}
