import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function Profile( { navigation }){
    const githubusername = navigation.getParam('github_username');
    return <WebView style={style.webview}  source={{ uri: `https://github.com/${githubusername}`}}/>

}

export default Profile;

const style = StyleSheet.create({
    webview:{
        flex: 1,
    }
})