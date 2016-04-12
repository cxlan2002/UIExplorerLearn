import React, {
  View,
  Image,
  Text,
  Picker,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

var PickerExample = React.createClass({
  getInitialState: function() {
    return {
      language: "Java",
      country: "China"
    };
  },

  _onValueChange: function(lang){
    this.setState({
      language: lang,
    })
  },

  _onValueChange2: function(country){
    this.setState({
      country: country,
    })
  },

  // *** Picker
      // onValueChange
      // 某一项被选中时执行此回调。调用时带有如下参数：
      // itemValue: 被选中项的value属性
      // itemPosition: 被选中项在picker中的索引位置
  render: function(){
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          onValueChange={this._onValueChange}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Picker
          selectedValue={this.state.country}
          onValueChange={this._onValueChange2}>
          <Picker.Item label="China" value="china" />
          <Picker.Item label="USA" value="usa" />
        </Picker>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  
});

module.exports = PickerExample;