import React, {
  View,
  Image,
  Text,
  Switch,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

var SwitchExample = React.createClass({
  getInitialState: function() {
    return {
      falseSwitchIsOn: false,
      trueSwitchIsOn: true,
      eventSwitchIsOn: false,
    };
  },

  render: function() {
    return (
      <View style={{flex:1}}>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10,width:50}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
           style={{marginBottom: 10,width:50}}
          value={this.state.trueSwitchIsOn} />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>Switches can be set to true or false</Text></View>

        <Switch style={{marginBottom: 10,width:50}} disabled={true} value={true} />
        <Switch style={{marginBottom: 10,width:50}} disabled={true} value={false} />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>Switches can be disabled</Text></View>

        <Switch
          onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
          style={{marginBottom: 10,width:50}}
          value={this.state.eventSwitchIsOn} />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>{this.state.eventSwitchIsOn ? 'On' : 'Off'}</Text></View>

        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  item: {padding:30,borderWidth:5,borderColor:'#3f7fc9', borderTopLeftRadius:5,borderBottomRightRadius:5,margin:5}
});

module.exports = SwitchExample;