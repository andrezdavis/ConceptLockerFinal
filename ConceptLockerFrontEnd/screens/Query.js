
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Icon from 'react-native-vector-icons/Ionicons'
// import Spinner from 'react-native-loading-spinner-overlay'
import {TextInput,TouchableWithoutFeedback,Keyboard,Text,View,ImageBackground,Image,StyleSheet,TouchableOpacity,FlatList,Button,ActivityIndicator,loading} from 'react-native';

export default function Query({route, navigation}) {
    const [value, onChangeText] = useState('Put Query');
    const [multipleFile, setMF] = useState([])
    const [isLoading, setLoading] = useState(false); //loading spinner 
    // loading spinner 
    if(isLoading) {
        return(
            <View style={styles.loading}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    const addEntry = (data) => {
        console.log('addEntry Start');
        
       let newObj = {
            "id": randId(),
            "name" : data.filename,
            "text" : data.text,
        }
        console.log('Finish load');
        setMF([...multipleFile, newObj]);
        console.log(multipleFile)
    };
    const randId = () => {
        let id = ''
        for (var i = 0; i < 10; i++) {
            id += String.fromCharCode(Math.trunc(Math.random()*85) + 48)
        }
        return id
    }
    let remoteURL = 'https://stormy-lake-40009.herokuapp.com/';
    let localURL = 'http://localhost:9000/'
    const querySearch = () => {
        console.log('send File start');
        setLoading(true); //loading spinner true

        axios(
            
            {
            method: 'post',
            url: localURL,
            data: {
                "uri": "https://www.otago.ac.nz/classics/otago055219.pdf"
            }

        }).then((res) =>{
            console.log(res.data);
            getSentences(res.data.text)
            setLoading(false) //loading spinner false
            addEntry(res.data)
            navigation.navigate('Details Search')
           
        } 
        ).catch((err) => {
            console.log(err);
            setLoading(false)}); 
        
    }
  
    const getSentences = (text) => {
        text = text.replace(/(\r\n|\n|\r)/gm," ");
        text = text.replace(/\s+/g," ");
        text = text.replace(/(\\|-)/gm,"");
        text = text.replace(/\\/g, '');
        text = text.replace(/(“|”|’)/g, "")
        let i = 0
        let data = []
        for (i = 0; i < text.length;) {
          if (i + 40000 < text.length) {
          data.push(text.substring(i, text.substring(i, i + 40000).lastIndexOf(".")))
          i+=text.substring(i, i + 40000).lastIndexOf(".")
          } else {
            data.push(text.substring(i))
            i = text.length
          }
        }
        // data.forEach((element) => {
        //     let sentences = element.split(".")
        //     sentences.forEach((sentence) => {
        //         axios(
            
        //             {
        //             method: 'post',
        //             url: 'http://127.0.0.1:5000/',
        //             data: `${value}, ${sentence}`
        
        //         }).then((res) => {
        //             if (parseFloat(res) > .4) {
        //                 console.log(sentence)
        //             }
        //         }).catch((err) => {
        //             console.log(err)
        //         })
        //     })
            
        // })
        
      };

    
                
return (
    <ImageBackground source={require('../images/bg2.png')} 
      style={{width: '100%', height: '100%'}}>
        <View>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           
                    
                    <TextInput 
                        placeholder="Put Query"
                        placeholderTextColor="#696969"
                        style={{ height: 45, borderColor: 'gray', borderRadius:23, textAlign: 'center',borderWidth: 2, marginTop:300, marginBottom:90, width:"90%", alignSelf:'center' }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </TouchableWithoutFeedback>
        </View>
        

        
          
    <TouchableOpacity onPress={() => {
        // console.log(multipleFile[0].name)
        querySearch()
        }}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
        </View>
    </TouchableOpacity>
    
      
  </ImageBackground> 
);
}


const styles = StyleSheet.create({
  container: {
      marginTop: 90,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  image: {
      width: 380,
      height: 240,
      marginTop: 90
  },
  viewTextStyle: {
      flex:1,
      position: 'absolute',
      textAlign: 'center', 
      alignSelf:"center",
      alignItems: 'center',
      marginTop: 90
      // justifyContent: 'center',
      // alignItems: 'center'
  },
  textStyle: {
      fontSize: 30,
      color:"white",
      marginTop:60,
      //fontFamily:"SemiBold",
      textAlign: 'center', 
      alignSelf:"center",
      alignItems: 'center'
  },
  textStyle1: {
      fontSize: 12,
      color:"#FFFFFF",
      marginTop:10,
      alignSelf:"center",
      textAlign:"center",
  },
  uploadStyle: {
      color:"#FFFFFF",
      alignSelf:"center",
  },
  listHeader: {
      backgroundColor:"#C3C2C2",
      alignItems: "center",
      justifyContent: "center",
      marginTop:20,
      height: 30,
      borderBottomWidth: 1,
      borderBottomColor: "#5C5C5C",
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 30,
      backgroundColor: "#FFF",
  },
  flatText: {
      marginVertical: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems:'center',
  },
  button: {
      marginHorizontal:55,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:30,
      backgroundColor:"#2F2F2F",
      paddingVertical:12,
      borderRadius:23
  },
  buttonText: {
      fontSize:18,
      color:"white",
      //fontFamily:"SemiBold"
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    backgroundColor: 'transparent',
  }
  
});
