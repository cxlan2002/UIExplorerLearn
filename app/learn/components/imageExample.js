import React, {
  TouchableOpacity,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  DrawerLayoutAndroid,
  Alert,
  Dimensions,
  ToolbarAndroid,
} from 'react-native';

var ImageExample = React.createClass({
  getInitialState: function() {
    return {
      events: [],
      mountTime: new Date(),
    };
  },

  componentWillMount: function() {
    this.setState({mountTime: new Date()});
  },

  onBack: function() {
    this.props.navigator.pop();
  },

  _loadEventFired(event) {
    this.setState((state) => {
      return state.events = [...state.events, event];
    });
  },

  render: function() {
    var { mountTime } = this.state;
    return (
      <View style={{flex:1, padding:10}}>
        <Image
          source={{uri: 'http://facebook.github.io/origami/public/images/blog-hero.jpg?r=1'}}
          style={{width: 100,height: 100}}
          onLoadStart={() => this._loadEventFired(`✔ onLoadStart (+${new Date() - mountTime}ms)`)}
          onLoad={() => this._loadEventFired(`✔ onLoad (+${new Date() - mountTime}ms)`)}
          onLoadEnd={() => this._loadEventFired(`✔ onLoadEnd (+${new Date() - mountTime}ms)`)}
        />

        <Text style={{marginTop:10, marginBottom:10}}>
          {this.state.events.join('\n')}
        </Text>

        <TouchableOpacity onPress={this.onBack}>
          <View style={{padding:10, alignItems: 'center',backgroundColor:'#3385ff'}}>
            <Text style={{fontSize: 15,color:'#fff'}}>Back!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({

});

module.exports = ImageExample;