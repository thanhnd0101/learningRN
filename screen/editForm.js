import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

import {StackNavigator} from 'react-navigation';
import Node from '../component/node';

export default class RditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      height: 0,
    };

    //Keyborad Avoiding View Animation
    this.keyboardHeight = new Animated.Value(0);
    
  };
  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    );
  };
  componentWillUnMount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  };
  _keyboardDidShow = (event) => {
    Animated.timing(this.keyboardHeight, {
      duration: event.duration,
      toValue: event.endCoordinates.height,
    }).start();
  };
  _keyboardDidHide = (event) => {
    Animated.timing(this.keyboardHeight, {
      duration: 500,
      toValue: 0,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}
          style={styles.headerBackHome}>
            <Text style={styles.headerBackHomeText}>Cancle</Text>
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Edit</Text>
          </View>
          <TouchableOpacity 
           onPress={this.addNodeMethod.bind(this)} 
          style={styles.DoneEdit}>
            <Text style={styles.DoneEditText}>Done</Text>
          </TouchableOpacity>
        </View> */}
        <Animated.View style={[styles.body,{paddingBottom:this.keyboardHeight}]}>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView style={{paddingBottom:3}}
              ref="scrollView"
              onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}>
              <TextInput
                {...this.props}
                multiline={true}
                onContentSizeChange={event => {
                this.setState({
                height: event.nativeEvent.contentSize.height
                });
                }}
                underlineColorAndroid="transparent"
                style={[
                styles.default,{
                height: Math.max(30, this.state.height),
                fontFamily: "",
                fontSize: 20,
                }
                ]}
                onChangeText={(text)=>{this.setState({text})}}
                value={this.state.text} 
                />
            </ScrollView>
          </KeyboardAvoidingView>
        </Animated.View>
        <View style={styles.footer} />
      </View>
    );
  };

  // addNodeMethod(){
  //   if(this.state.text){
  //     let d=new Date();
  //     this.props
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "#fffafa",//snow
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  headerBackHome: {
    flex: 1,
    backgroundColor: "#E91E63",
    justifyContent: "flex-end"
  },
  headerBackHomeText: {
    fontFamily: "",
    color: "#ff4500",//oranged
    fontSize: 20,
    paddingLeft: 5,
    paddingBottom: 3
  },
  headerTitle: {
    flex: 3,
    backgroundColor: "#d2691e",//chocolate
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headerTitleText: {
    fontFamily: "",
    color: "#ff4500",//oranged
    fontSize: 20,
    paddingBottom: 3
  },
  DoneEdit:{
    flex: 1,
    backgroundColor: "#6b8e23",//Olivedrab
    justifyContent: "flex-end"
  },
  DoneEditText:{
    fontFamily: "",
    color: "#ff4500",//oranged
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  body: {
    flex: 6,
    backgroundColor: "#87ceeb"//sky blue
  },
  bodyInput: {
    fontFamily: "",
    fontSize: 20
  },
  footer: {
    flex: 0.8
  }
});