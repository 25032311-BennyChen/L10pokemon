import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const datasource = [
  {
    data: [
      {name: 'Raichu',card: 26},
      {name: 'Magneton',card: 82},
    ],
    title: "ELECTRIC",bgcolor: 'yellow', icon:'bolt'
  },
  {
    data: [
      {name: 'Tentacool',card: 72},
      {name: 'Poliwrath',card: 62},

    ],
    title: "WATER",bgcolor: 'skyblue', icon:'droplet'
  },
  {
    data: [
      {name: 'Arcanie',card: 59},
      {name: 'Rapidash',card: 78},

    ],
    title: "FIRE",bgcolor: 'red', icon:'fire'
  }
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={[styles.opacityStyle, {backgroundColor: section.bgcolor}]}
                        onPress={() => Alert.alert(item.name +" "+ "is selected!")}>
        <Text style={styles.textStyle}> {item.name} </Text>
        <Image source={{uri:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_'+ item.card +'-2x.png'}}
               style={{width:150, height:200}}
        />
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>L10 Pokemon </Text>
        <View style={styles.buttonContainer}>
          <Button
              onPress={() => Alert.alert("Coming Soon")}
              title="Add Pokemon" />
        </View>

        <SectionList sections={datasource}
                     renderItem={renderItem}
                     contentContainerStyle={{padding:20}}
                     renderSectionHeader={({section:{title,bgcolor,icon}})=>(
                         <View style={[styles.headerContainer,{backgroundColor:bgcolor}]}>
                           <FontAwesome6 name={icon} size={25} color="black" />
                           <Text style={styles.headerText}>{title}</Text>
                         </View>
                     )}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 15,
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  buttonContainer:{
    margin:10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
});
