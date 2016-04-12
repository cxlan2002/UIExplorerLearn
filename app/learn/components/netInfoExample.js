import React, {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  NetInfo,
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

class NetInfoExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        connectionInfoHistory : [],
        connectionInfo : null
      }
    }

    componentDidMount() {
      NetInfo.addEventListener(
        'change',
        this._handleConnectionInfoChange
      );
      NetInfo.fetch().done(
        (connectionInfo) => { this.setState({connectionInfo}); }
      );
    }

    componentWillUnmount() {
      NetInfo.removeEventListener(
        'change',
        this._handleConnectionInfoChange
      );
    }

    _handleConnectionInfoChange(connectionInfo) {
      const connectionInfoHistory = this.state.connectionInfoHistory.slice();
      connectionInfoHistory.push(connectionInfo);
      this.setState({
        connectionInfo,
        connectionInfoHistory
      });
    }

    render() {
      return (
        <Md title='NetInfo'>
          <View>
           <Text>{JSON.stringify(this.state.connectionInfoHistory)}</Text>
           <Text>{this.state.connectionInfo}</Text>
          </View>
        </Md>
      )
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

module.exports = NetInfoExample;