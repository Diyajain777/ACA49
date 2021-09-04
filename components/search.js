import React, {useState} from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import Card from './cards'

export default function Search() {
  const [scr, setScr] = useState('');
  const [scrc,setScrc] = useState('')

  function handleChange(val){
    setScr(val)
  }

  function handleClicked(){
    setScrc(scr);

  }
  return (
    <View style={s.main}>
      <View style={s.inputbox}>
        <TextInput placeholder ="Enter name of the city"  
         value={scr} 
         onChangeText={(val)=>handleChange(val)}
                  />
         
      </View>

      <View style={s.button}>
        <Button title="Search" color="#ff9642" onPress={handleClicked} />
      </View>
      <Card title={scrc} />
      
    </View>
  );
}

const s = StyleSheet.create({
  inputbox: {
    padding: 20,
    margin: 20,
    bordercolor: 'Black',
    borderWidth: 3,
  },
  main: {
    margin: 20,
  },
  button: {
    margin: 20,
    marginTop: 5
  }
});
