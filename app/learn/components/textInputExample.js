import React, {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  Component,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';

var TextInputLine = React.createClass({
  render: function() {
    return (
      <View style={styles.textInputLine}>
        <View style={styles.textInputLabel}><Text>{this.props.title}:</Text></View>
        <View style={styles.textInputBorder}>
          <TextInput style={styles.textInput}
            placeholderTextColor='#ccc'
            underlineColorAndroid='transparent'
            autoFocus={this.props._autoFocus} 
            placeholder={this.props._placeholder} 
            autoCapitalize={this.props._autoCapitalize}
            autoCorrect={this.props._autoCorrect}
            editable={this.props._editable}
            keyboardType={this.props._keyboardType}
            maxLength={this.props._maxLength}
            value={this.props._value}
            onChangeText={this.props._onChangeText}
            onSubmitEditing={this.props._onSubmitEditing}
            secureTextEntry={this.props._secureTextEntry} />
        </View>
      </View>
    );
  }
});

var Md = React.createClass({
  render: function() {
    return (
      <View style={styles.box}>
        <View style={styles.hd}><Text style={styles.title}>{this.props.title}</Text></View>
        <View style={styles.bd}>
          {this.props.content}
        </View>
      </View>
    );
  }
});

var textInputExample = React.createClass({
  getInitialState: function() {
    return {
      limit: 20,
      text: '',
      subEdit: '未提交'
    };
  },

  render: function() {
    var remainder = this.state.limit - this.state.text.length;
    return (
      <ScrollView>
        <Md title="大写切换autoCapitalize"
          content = {
            <View>
              <TextInputLine title="不切换" _autoFocus={true} _placeholder='none' _autoCapitalize='none'  />
              <TextInputLine title="全部切换" _placeholder='characters' _autoCapitalize='characters'  />
              <TextInputLine title="单词首字母" _placeholder='words' _autoCapitalize='words' />
              <TextInputLine title="句子首字母" _placeholder='sentences' _autoCapitalize='sentences' />
            </View>
        } />

        <Md title="拼写修正autoCorrect"
          content = {
            <View>
              <TextInputLine title="默认修正" _placeholder='true'   />
              <TextInputLine title="不修正" _autoCorrect={false} _placeholder='false'   />
            </View>
        } />

        <Md title="不可编辑editable"
          content = {
            <View>
              <TextInputLine title="不可编辑" _editable={false} _placeholder='false'   />
            </View>
        } />

        <Md title="弹出键盘keyboardType"
          content = {
            <View>
              <TextInputLine title='默认' _placeholder='default' _keyboardType='default' />
              <TextInputLine title='数字' _placeholder='numeric' _keyboardType='numeric'   />
              <TextInputLine title='邮箱' _placeholder='email-address' _keyboardType='email-address'   />
            </View>
        } />

        <Md title="最多的字符数maxLength"
          content = {
            <View>
              <TextInputLine title='最多字符' _maxLength={this.state.limit} _onChangeText={this.limitTextChange} _value={this.state.text} />
              <View style={{alignItems:'flex-end'}}><Text>还能输入{remainder}个字符</Text></View>
            </View>
        } />

        <Md title="软键盘提交onSubmitEditing"
          content = {
            <View>
              <TextInputLine title='软键盘提交' _onSubmitEditing={this.submitEditing} />
              <View style={{alignItems:'flex-end'}}><Text>{this.state.subEdit}</Text></View>
            </View>
        } />

        <Md title="密码输入secureTextEntry"
          content = {
            <View>
              <TextInputLine title='密码输入' _secureTextEntry={true} />
            </View>
        } />
             
      </ScrollView>
    );
  },

  limitTextChange: function(txt){
    this.setState({
      text: txt
    });
  },

  submitEditing: function(){
    this.setState({
      subEdit: '提交'
    });
  }
});

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10},
  title:{fontSize:16,color:'#000'},
  textInputLine:{marginBottom:10,flex:1,flexDirection:'row',alignItems:'center'},
  textInputLabel:{alignItems:'flex-end',width:120,marginRight:10},
  textInputBorder:{borderWidth:0.5,borderColor:'#000',flex:1,height:30,padding:3,},
  textInput:{padding:0,marginTop:-5,}
});

module.exports = textInputExample;