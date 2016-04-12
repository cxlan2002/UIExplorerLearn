import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
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

class DimensionsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nostate : {true}
    };
  }

  render() {
    return (
      <ScrollView>
        <Md title="Dimensions">
          <Text>设备宽：{Dimensions.get('window').width}</Text>
          <Text>设备高：{Dimensions.get('window').height}</Text>
        </Md>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10,alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
});

module.exports = DimensionsExample;