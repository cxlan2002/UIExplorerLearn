import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Vibration,
  Component,
  StyleSheet,
} from 'react-native';

class Md extends React.Component {
    render() {
      return (
        <View style={styles.box}>
          <View style={styles.hd}><Text style={styles.title}>{this.props.title}</Text></View>
          <View style={styles.bd}>
            {this.props.children}
          </View>
        </View>
      );
    }
};

class VibrationExample extends React.Component {
  render() {
    return (
      <ScrollView>
        <Md title="vibration">
          <TouchableOpacity
            onPress={() => Vibration.vibrate()}>
            <Text>Click me.</Text>
          </TouchableOpacity>
        </Md>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:StyleSheet.hairlineWidth,borderRadius:5,borderColor:'#000',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,backgroundColor:'#eee',alignItems:'flex-start',borderTopLeftRadius:5,borderTopRightRadius:5,},
  bd:{padding:10,borderTopWidth:StyleSheet.hairlineWidth,borderColor:'#000',alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
});

module.exports = VibrationExample;