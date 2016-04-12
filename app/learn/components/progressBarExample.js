import React, {
  View,
  Image,
  Text,
  ScrollView,
  ProgressBarAndroid,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

var ProgressBarExample = React.createClass({

  render: function(){
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>

        <View style={styles.item}>
          <ProgressBarAndroid />
        </View>

        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="Small" />
        </View>

        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="Large" />
        </View>

        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="Inverse" />
        </View>

        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="SmallInverse" />
        </View>
        
        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="LargeInverse" color="red" />
        </View>

        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="Horizontal" />
        </View>

        <View style={styles.item}>
          <ProgressBarAndroid styleAttr="Horizontal" color="red" />
        </View>

      </ScrollView>
    )
  }

});

var styles = StyleSheet.create({
  scrollView: {flex:1},
  contentContainerStyle: {justifyContent:'flex-start', alignItems:'flex-start'},
  item: {padding:15, marginBottom:15, backgroundColor:'#e4f0fd'},
});

module.exports = ProgressBarExample;