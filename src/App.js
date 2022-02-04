import React from "react"
import {View, Text, StyleSheet} from 'react-native'
import Aleatorio from "./components/Aleatorio"
import Titulo from "./components/Titulo"
// import CompPadrao, {Comp1, Comp2} from "./components/mult"
// import Primerio from './components/primeiro'
import MimMax from "./components/MimMax"
import Botao from "./components/botao"
import Contador from "./components/Contador"
import ContadorV2 from "./components/contador/contadorV2"

export default () => (

    <View style={style.App}>

        <ContadorV2/>
        {/* <Contador inicial={100} /> */}
        {/* <Botao /> */}
        {/* <Titulo 
            principal="Cadastro" 
            secundario="Tela de Cadastro do Produto"
        /> */}
        {/* <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/> */}
        {/* <MimMax min={3} max="20"/> */}
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primerio /> */}
    </View>

)

const style = StyleSheet.create({
    App:{
        flexGrow: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
    }
})