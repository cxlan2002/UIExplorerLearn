import React, {
  View,
  Image,
  Text,
  ScrollView,
  RefreshControl,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

var ScrollViewExample = React.createClass({
  getInitialState: function() {
    return {
      isRefreshing: false,
      isOdd: true,
      length: 10,
      array: [],
    };
  },

  componentWillMount: function() {
    for (var i = this.state.length; i > 0; i--) {
      this.state.array.push(i);
    };
  },

  _onRefresh: function() {
    this.setState({
      isRefreshing: !this.state.isRefreshing,
    });
    
    setTimeout(() => {
      this.setState({
        array: [],
      });

      if(this.state.isOdd)
      {
        for (var i = 1; i <= this.state.length; i++) {
          this.state.array.push(i);
        };
      }
      else
      {
        for (var i = this.state.length; i > 0; i--) {
          this.state.array.push(i);
        };
      }
      
      this.setState({
        isRefreshing: !this.state.isRefreshing,
        isOdd: !this.state.isOdd,
      });
    }, 1000);
  },

  render: function() {
    var createItem = (i) => <View key={i} style={styles.item}><Text style={{alignItems:'center'}}>{i}</Text></View>;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"/>
        }>
        {this.state.array.map(createItem)}
        <ScrollView horizontal={true}>
          {this.state.array.map(createItem)}
        </ScrollView>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  item: {padding:30,borderWidth:5,borderColor:'#3f7fc9', borderTopLeftRadius:5,borderBottomRightRadius:5,margin:5}
});

module.exports = ScrollViewExample;