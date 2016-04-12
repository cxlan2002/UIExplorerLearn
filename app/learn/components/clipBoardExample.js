import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Clipboard,
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

class ClipBoardExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Content will appear here'
    };
  }

  //异步获取
  async _setClipboardContent() {
    Clipboard.setString('Hello World');
    try {
      var content = await Clipboard.getString();
      this.setState({content});
    } catch (e) {
      this.setState({content:e.message});
    }
  }

  render() {
    return (
      <Md title="ClipBoard">
        <Text onPress={() => this._setClipboardContent()} style={{color: 'blue'}}>
          Tap to put "Hello World" in the clipboard
        </Text>
        <Text style={{color: 'red', marginTop: 20}}>
          {this.state.content}
        </Text>
      </Md>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10,alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
});

module.exports = ClipBoardExample;