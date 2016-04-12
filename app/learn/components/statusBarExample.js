import React, {
  View,
  Image,
  Text,
  Component,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';

var StatusBarExample = React.createClass({
  render: function() {
    return (
      <View>
        <StatusBar
          backgroundColor='#ff0000'
          translucent={true}
         />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  item: {padding:30,borderWidth:5,borderColor:'#3f7fc9', borderTopLeftRadius:5,borderBottomRightRadius:5,margin:5}
});

module.exports = StatusBarExample;