import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
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

class OpenURLButton extends React.Component {
  static propTypes:{
    url: React.PropTypes.string,
  };

  handleClick() {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.handleClick()}>
        <View style={styles.button}>
          <Text style={styles.text}>Open {this.props.url}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

class LinkingExample extends React.Component {
  render() {
    return (
      <Md title="Linking">
        <OpenURLButton url={'https://www.baidu.com'} />
        <OpenURLButton url={'http://www.163.com'} />
        <OpenURLButton url={'http://sina.com'} />
        <OpenURLButton url={'fb://notifications'} />
        <OpenURLButton url={'geo:37.484847,-122.148386'} />
        <OpenURLButton url={'tel:9876543210'} />
      </Md>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10,overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
  button:{padding:10,backgroundColor: '#3B5998',marginBottom: 10,},
  text:{color:'#fff',},
});

module.exports = LinkingExample;