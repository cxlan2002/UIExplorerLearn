import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
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

class PixelRatioExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nostate: {true}
    };
  }

  render() {
    var ImageSource = require('../images/Icon-40.png');
    if(PixelRatio.get() >= 3)
    {
      ImageSource = require('../images/Icon-40@3x.png');
    }
    else if(PixelRatio.get() <3 && PixelRatio.get() <= 2)
    {
      ImageSource = require('../images/Icon-40@2x.png');
    };
    return (
      <Md title="PixelRatio">
        <Image source={ImageSource} style={{width:40,height:40}} />
        <Text>{PixelRatio.get()}</Text>
      </Md>
    );
  }
};

//StyleSheet.hairlineWidth 当前平台上的最细的宽度
var styles = StyleSheet.create({
  box:{margin:10,borderWidth:StyleSheet.hairlineWidth,borderRadius:5,borderColor:'#000',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,backgroundColor:'#eee',alignItems:'flex-start',borderTopLeftRadius:5,borderTopRightRadius:5,},
  bd:{padding:10,borderTopWidth:StyleSheet.hairlineWidth,borderColor:'#000',alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
});

module.exports = PixelRatioExample;