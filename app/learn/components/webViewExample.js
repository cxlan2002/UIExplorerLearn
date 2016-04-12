import React, {
  View,
  Image,
  Text,
  WebView,
  ProgressBarAndroid,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';

var webViewExample = React.createClass({
  getInitialState: function() {
    return {
      url: 'http://www.zhihu.com/',
      isloading: true
    };
  },

  loadEnd: function(){
    this.setState({
      isloading: false 
    });
  },

  render: function() {
    var styleVisable = this.state.isloading ? {height:Dimensions.get('window').height,width:Dimensions.get('window').width,justifyContent:'center',position:'absolute',top:0} : {opacity:0,position:'absolute',top:-300};
    return (
      <View style={{flex:1}}>
        <WebView
          style={styles.webView}
          source={{uri: this.state.url}}
          onLoadEnd={() => this.loadEnd()}
          javaScriptEnabled={true}
        />
        <View style={styleVisable}>
          <ProgressBarAndroid />
        </View>
      </View>
    )
  },
});

var styles = StyleSheet.create({
  webView:{}
});

module.exports = webViewExample;