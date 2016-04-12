import React, {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  Modal,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  Component,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

class Md extends React.Component {
    render() {
      return (
        <View style={styles.box}>
          <View style={styles.hd}><Text style={styles.title}>{this.props.title}</Text></View>
          <View style={styles.bd}>
            {this.props.content}
          </View>
        </View>
      );
    }
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  _onHighlight() {
    this.setState({active: true});
  }

  _onUnhighlight() {
    this.setState({active: false});
  }

  render() {
    var colorStyle = {
      color: this.state.active ? '#fff' : '#000',
    };
    return (

      <TouchableHighlight
        onHideUnderlay={() => this._onUnhighlight()}
        onPress={this.props.onPress}
        onShowUnderlay={() => this._onHighlight()}
        style={[styles.button, this.props.style]}
        underlayColor="#a9d9d4">
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
};

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      modalVisible: false,
      transparent: false,
    };
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _toggleAnimated() {
    this.setState({animated: !this.state.animated});
  }

  _toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  }

  render() {
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;

    return (
      <Md title="Model"
        content = {
          <View>
            <Modal
              animated={this.state.animated}
              transparent={this.state.transparent}
              visible={this.state.modalVisible}>
              <View style={[styles.container, modalBackgroundStyle]}>
                <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                  <Text>This modal was presented {this.state.animated ? 'with' : 'without'} animation.</Text>
                  <Button
                    onPress={() => this._setModalVisible(false)}
                    style={styles.modalButton}>
                    Close
                  </Button>
                </View>
              </View>
            </Modal>

            <View style={styles.row}>
              <Text style={styles.rowTitle}>Animated</Text>
              <Switch value={this.state.animated} onValueChange={() => this._toggleAnimated()} />
            </View>

            <View style={styles.row}>
              <Text style={styles.rowTitle}>Transparent</Text>
              <Switch value={this.state.transparent} onValueChange={() => this._toggleTransparent()} />
            </View>

            <Button onPress={() => this._setModalVisible(true)}>
              Present
            </Button>
          </View>
        }/>
    );
  }
};

var styles = StyleSheet.create({
  box:{margin:10,borderWidth:0.5,borderRadius:5,borderColor:'#ccc',backgroundColor:'#fff',marginBottom:10},
  hd:{height:35,paddingTop:7,paddingBottom:7,paddingLeft:10,paddingRight:10,borderBottomWidth:0.5,borderColor:'#ccc',backgroundColor:'#eee',alignItems:'flex-start'},
  bd:{padding:10,alignItems:'center',overflow:'hidden'},
  title:{fontSize:16,color:'#000'},
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor:'#3385ff'
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

module.exports = ModalExample;