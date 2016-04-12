import React, {
  Platform,
  Dimensions,
  TouchableOpacity,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  ScrollView,
  SwitchAndroid,
} from 'react-native';

var toolbarActions = [
  {title: 'Create', icon: require('../images/ic_create_black_48dp.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('../images/ic_settings_black_48dp.png'), show: 'always'},
];

var ToolbarAndroidExample = React.createClass({
  getInitialState: function() {
    return {
     actionToolBarText : 'Examples of using the Android toolbar.',
     toolbarSwitch: false,
     colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },

  onBack: function() {
    this.props.navigator.pop();
  },

  _onActionSelected: function(i){
    this.setState({
      actionToolBarText: 'selected ' + toolbarActions[i].title, 
    });
  },

  _onIconClicked: function(){
    this.setState({
      actionToolBarText: 'icon clicked', 
    });
  },

  switchState: function(){
    console.log(this.state.toolbarSwitch);
    return this.state.toolbarSwitch ? 'open' : 'close';
  },

  // *** ToolbarAndroid 属性
  // *** actions[{title: string, icon: optionalImageSource, show: enum('always', 'ifRoom', 'never'), showWithText: bool}]
      // 设置功能菜单中的可用功能。他们会显示为部件右侧的图标或文字。如果放不下，则会被放进一个弹出菜单里
      // 这个属性接受一个对象数组，每个对象可以有如下的字段:
      // title: 必须的, 功能的标题
      // icon: 这个功能的图标，例如require('./some_icon')
      // show: 是直接作为icon显示还是先隐藏，而在弹出菜单里显示：always总是显示，ifRoom如果放的下则显示，或者never从不显示。
      // showWithText: 值为布尔类型，指定是否在图标旁边同时还显示文字
  // *** onActionSelected 
      // 当一个功能被选中的时候调用此回调。传递给此回调的唯一参数是该功能在actions数组中的位置
  // *** onIconClicked 
      // 当图标被选中的时候调用此回调
  render: function() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>

        <ToolbarAndroid
          //logo={require('../images/launcher_icon.png')}
          navIcon={require('../images/ic_menu_black_24dp.png')}
          actions={toolbarActions}
          style={styles.toolbar}
          title={'ReactNative'}
          subtitle={this.state.actionToolBarText}
          onActionSelected = {this._onActionSelected}
          onIconClicked = {this._onIconClicked}/>
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>{this.state.actionToolBarText}</Text></View>
        
        <ToolbarAndroid
          logo={require('../images/launcher_icon.png')}
          navIcon={require('../images/ic_menu_black_24dp.png')}
          style={styles.toolbar}>
          <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
            <SwitchAndroid
              value={this.state.toolbarSwitch}
              onValueChange={(value) => this.setState({toolbarSwitch: value})} />
            <Text>{'\'Tis but a switch'}</Text>
          </View>
        </ToolbarAndroid>
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>{this.switchState()}</Text></View>
        
        <ToolbarAndroid
          actions={toolbarActions}
          style={styles.toolbar}
          subtitle="There be no icon here" />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>Toolbar with no icon</Text></View>
        
        <ToolbarAndroid
          navIcon={require('../images/ic_menu_black_24dp.png')}
          onIconClicked={() => this.setState({colorProps: {}})}
          title="Wow, such toolbar"
          style={styles.toolbar}
          subtitle="Much native"
          {...this.state.colorProps} />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>Toolbar with custom title colors.Touch the icon to reset the custom colors to the default</Text></View>

        <ToolbarAndroid
            actions={[{title: 'Bunny', icon: require('../images/bunny.png'), show: 'always'}]}
            logo={require('../images/hawk.png')}
            navIcon={require('../images/bunny.png')}
            title="Bunny and Hawk"
            style={styles.toolbar} />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>Toolbar with remote logo & navIcon</Text></View>

        <ToolbarAndroid
            actions={toolbarActions}
            overflowIcon={require('../images/bunny.png')}
            style={styles.toolbar} />
        <View style={{padding:15,backgroundColor:'#ddd',marginBottom:15,}}><Text>Toolbar with custom overflowIcon</Text></View>

      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  scrollView: {flex:1,},
  contentContainerStyle:{justifyContent:'flex-start', alignItems:'flex-start'},
  toolbar: {
    backgroundColor: '#a8d2fc',
    height: 56,
  },
});

module.exports = ToolbarAndroidExample;