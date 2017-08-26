import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import Note from '../component/node'

export default class Home extends React.Component{
  
  // state={
  //   noteArr:[{note}]
  // }
  static navigationOptions=({navigation,screenProps})=>({
    headerTitle:"Notes",
    headerRight: <View>
    <TouchableOpacity onPress={()=>{navigation.navigate('EditForm')}}><Text>Add</Text></TouchableOpacity>
    </View>,
    headerTitleStyle:styles.headerstyle,
    headerLeft:<View></View>
  })
  
  render(){
    // let notes=this.state.noteArr.map((val,key)=>{
    //   return <Note key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNote(key)}/>
    // })
    return(
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <TouchableOpacity style={styles.headerCheck}>
            <Text style={styles.headerCheckText}>Edit</Text>
          </TouchableOpacity>
          <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>
            Notes
          </Text>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditForm')}
            style={styles.headerButtonAdd}>
            <Text style={styles.headerButtonAddText}>+</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.scrollViewContainer}>
          <ScrollView >
            {/* {notes} */}
          </ScrollView>
        </View>

      </View>
    );
  }
  // deleteNote(key){
  //   this.state.noteArr.splice(key,1);
  //   this.setState({noteArr:this.state.noteArr});
  // }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  headerstyle:{
    alignSelf:'center',
  },
  header:{
    flex:1,
    backgroundColor:'snow',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
  headerCheck:{
    flex:1,
    backgroundColor:'#E91E63',
    justifyContent:'flex-end',
  },
  headerCheckText:{
    fontFamily:'',
    color:'orangered',
    fontSize:20,
    paddingLeft:5,
    paddingBottom:3,
  },
  headerTitle:{
    flex:3,
    backgroundColor:'chocolate',
    justifyContent:'flex-end',
    alignItems:'center',
  },
  headerTitleText:{
    fontFamily:'',
    color:'orangered',
    fontSize:20,
    paddingBottom:3,
  },
  headerButtonAdd:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  headerButtonAddText:{
    fontFamily:'',
    color:'orangered',
    fontSize:25,
    paddingRight:5,
  },
  scrollViewContainer:{
    flex:7,
    backgroundColor:'skyblue',
  }
});