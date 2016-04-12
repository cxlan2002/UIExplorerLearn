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

var DRAWER_WIDTH_LEFT = 56;
var DrawerLayoutAndroidExample = React.createClass({
  onBack: function() {
    this.props.navigator.pop();
  },

  _renderNavigation: function(){
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I am in the Drawer!</Text>
      </View>
    );
  },

  _renderNavigationView: function(){
    return (
      <View style={{flex:1}}>
        <ToolbarAndroid
          logo={require('../images/launcher_icon.png')}
          navIcon={require('../images/ic_menu_black_24dp.png')}
          onIconClicked={() => this.drawer.openDrawer()}
          style={styles.toolbar}
          title={'DrawerLayoutAndroid'}
        />
        <View style={{padding:10}}>
          <View style={{paddingTop:20, paddingBottom:20, alignItems: 'center'}}>
            <Text style={{fontSize: 15}}>DrawerLayoutAndroid!</Text>
            <Text style={{fontSize: 15}}>获得的参数: componentName={ this.props.componentName } id={ this.props.id }</Text>
          </View>

          <TouchableOpacity onPress={() => this.onBack()}>
            <View style={{padding:10, alignItems: 'center',backgroundColor:'#3385ff'}}>
              <Text style={{fontSize: 15,color:'#fff'}}>Back!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  },

  // *** drawerWidth : 抽屉宽度
  // *** drawerPosition : 滑出位置
  // *** keyboardDismissMode : 拖拽的过程中是否要隐藏软键盘 ('none'默认值/'on-drag')
  // *** onDrawerClose 关闭后调用
  // *** onDrawerSlide 产生交互时调用
  // *** renderNavigationView 渲染抽屉内容
  // *** onDrawerStateChanged 抽屉的状态变化时调用此回调函数 (三种状态：idle空闲/dragging拖拽中/settling停靠中)
  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        keyboardDismissMode={'on-drag'}
        renderNavigationView={() => this._renderNavigation()}
        ref={(drawer) => { this.drawer = drawer; }}
        onDrawerClose={() => {
          console.log('关闭')
        }}
        onDrawerSlide={() => {
          console.log('交互')
        }}
        onDrawerStateChanged={() => {
          console.log('状态变化')
        }}
        style={{flex:1,justifyContent:'flex-start', alignItems:'flex-start'}}>
        {this._renderNavigationView()}
      </DrawerLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#E9EAED',
    height: 56,
  },
});

module.exports = DrawerLayoutAndroidExample;