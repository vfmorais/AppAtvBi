import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Header = () => (
 
    <View style={styles.container}>
    
    <Text style={styles.text}>ETEC DE BARUERI</Text>
    <Text style={styles.text}>Curso | Técnico em Desenvolvimento de Sistemas</Text>
    <Text style={styles.text}>Aluno | Vinícius Ferreira de Morais</Text>
   
    </View>
    
)

const styles = StyleSheet.create({

    container: {    
        marginTop:240,
        backgroundColor:'#696969',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20           
    },

    text: {
        color:'#afff',
        textAlign: 'center',
        fontSize:18,
        padding:10        
    }  

})

   export default Header