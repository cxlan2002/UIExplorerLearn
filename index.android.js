/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Navigator,
  Platform,
} from 'react-native';

var DemoList = require('./app/learn/components/demoList');

var UIExplorerLearn = React.createClass({
  // *** initialRoute 指定默认的页面
  // *** configureScene 页面跳转时候的动画
  // *** renderScene 参数route里为我们传递的name、component, 参数navigator是一个Navigator的对象(有push pop jump...等方法)
  //     renderScene里有一个判断，也就是如果传递进来的component存在，那我们就是返回一个这个component，结合前面 initialRoute 的参数，我们就是知道，这是一个会被render出来给用户看到的component，然后navigator作为props传递给了这个component
  
  // *** StatusBar 状态栏
  // <StatusBar backgroundColor="#3f7fc9" translucent={true} animated={true} hidden={true}/>
  render: function() {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor='blue' hidden={true} translucent={true} barStyle='light-content'/>
        <Navigator
          initialRoute={{name: 'DemoList', component: DemoList}}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('UIExplorerLearn', () => UIExplorerLearn);
