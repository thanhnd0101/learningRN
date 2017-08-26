import React from 'react';
import 
{View,
StyleSheet,
StatusBar
}from 'react-native';
import {AppLoading, Font} from 'expo';

import RootNavigation from './navigation/rootNavigation';

export default class App extends React.Component{
    state={
        assetsAreLoaded:false,
    };

    componentWillMount(){
        this._loadAssetAsync();
    }

    async _loadAssetAsync(){
        try{
            await Promise.all(
                Font.loadAsync(
                    {'space-mono':require('./assets/fonts/SpaceMono-Regular.ttf')},
                ),
            );
        }catch(err){
            console.warn('There was an error catching assets (see: App.js)');
            console.logog(err);
        }finally{
            this.setState({assetsAreLoaded:true});
        }
    }
    render(){
        if(!this.state.assetsAreLoaded){
            return <AppLoading/>
        }
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <RootNavigation/>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
});
