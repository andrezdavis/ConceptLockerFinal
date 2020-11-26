import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext} from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { FAB } from 'react-native-paper';

import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  // FlatList,
} from "react-native";
import {FlatList, ScrollView} from 'react-native-gesture-handler';




export default function DetailsSearch({navigation}) {
  let {flatText, textBox, loading, textInput, scrollContainer,button,buttonText,buttonText2,anotherFilebutton,fab} = styles;
  const [query, setQuery] = useState("");
  const [detailedSentences, setDS] = useState(["- using n-gram byte distribution analysis, if a packet is found to be 'lossy', this allows SLADE to determine whether it is suspicious or not.\n", "- With SLADE, a payload will be considered suspicious if the packet tends to not be recieved from trusted network services\n"])
  const [sentences, setSen] = useState([])
  const [similarityTrack, setST] = useState([])
  const addMessage = (newMessage) => setSen(state => [...state, newMessage])
  const addDS = (newMessage) => setDS(state => [...state, newMessage])
  const addST = (newMessage) => setST(state => [...state, newMessage])
  const [isLoading, setLoading] = useState(false);


  // function onSaveDetail() {
  //   navigation.state.params.addDetail({ query, detailedSentences})
  // }
  
  if(isLoading) {
    return(
        <View style={styles.loading}>
            <ActivityIndicator size="large"/>
        </View>
    );
  }

  
  
  
  
  return (
    <ImageBackground source={require('../images/bg2.png')} style={{width: '100%', height: '100%'}}>
      <View>
          <Text style={{fontSize:40,
            color:"#2F2F2F",
            alignSelf:"center",
            marginTop:50}}>Details</Text>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Query')}>
        <View style={styles.anotherFilebutton}>
          <Icon name="ios-undo" color="#2F2F2F" size={20}/>
          <Text style={styles.buttonText2}>  Make Another Query</Text>
        </View>
      </TouchableOpacity>

      <View> 
          <ScrollView style={scrollContainer}>
              <Text style={flatText}>{"Main Detail: \n" + detailedSentences[0]}</Text>
              <Text style={flatText}>{"Supporting Details: \n" + detailedSentences.slice(1)}</Text>
            </ScrollView>
      </View>

      <FAB style={fab} small icon='plus' label='Add details' onPress={()=> navigation.navigate('History', {query, detailedSentences})}/>

    </ImageBackground> 
  );
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 90,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
},
item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
flatText: {
  marginVertical: 5,
  marginLeft: 10,
  fontFamily: 'Cochin',
  fontSize: 20
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
deleteText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    color: 'red',
},
textBox: {
    flexDirection:"row",
    alignItems:"center",
    marginHorizontal:20,
    borderWidth:1,
    marginTop:15,
    paddingHorizontal:10,
    borderColor:"#969696",
    backgroundColor:"#FFF",
    borderRadius:23,
    paddingVertical:10,
},
textInput: {
    alignSelf: 'stretch',
    color: '#000000',
    backgroundColor: '#FFF',
},
listContainer: {
    flexDirection: 'row',
    padding: 5,
},
dataContainer:{
    padding: 10,
    paddingTop: 5,
},
scrollContainer: {
    marginTop: 20,
    backgroundColor: "#FFF",
    marginLeft: 10,
    marginRight: 10,
    bottom: 5,
    height: 400
},

button: {
    flexDirection:"row",
    marginHorizontal:20,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    backgroundColor:"#2F2F2F",
    paddingVertical:8,
    borderRadius:23
},
anotherFilebutton: {
  flexDirection:"row",
  marginHorizontal:20,
  alignItems:"center",
  justifyContent:"center",
  marginTop:30,
  marginBottom:70,
  borderWidth: 1,
  borderColor: '#2F2F2F',
  paddingVertical:7,
  borderRadius:23
},
buttonText: {
    fontSize:15,
    color:"white",
    fontWeight:"bold",
},
buttonText2: {
  fontSize:15,
  color:"#2F2F2F",

},
fab: {
  backgroundColor:'#3498DB',
  position: 'absolute',
  margin: 20,
  right:0,
  bottom: 0,
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
}
)
