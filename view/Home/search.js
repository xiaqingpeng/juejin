import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import native from 'react-native';
import {ListItem, Button,Input} from 'react-native-elements';
import {Spinner} from 'native-base';
import Header from '../../Components/Header';
const leftIcon = require('../../images/car/back.png');
class Introduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  handleHeaderClick = e => {
    console.log(e);
    if (e === 'leftBtn') {
      this.props.navigation.goBack();
    } else if (e === 'rightBtn') {
      console.log('等会');
      this.popActionBuy();
    } else {
      console.log('不跳');
    }
  };
  render() {
    const {navigation} = this.props;
    const styleHeader = {
      style: {
        height: 70,
        backgroundColor: 'rgb(3,127,254)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      contentText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      leftImageUrl: leftIcon,
      leftImage: {
        width: 30,
        height: 30,
      },
      rightImageUrl: '',
      content: '',
      rightImage: {
        width: 30,
        height: 30,
      },
    };
    const inputStyle = {color: 'white', paddingLeft:15,};
    const containerStyle = {width: 300};
    return (
      <Fragment>
        <View style={styles.blank}></View>
        <Header
          styleHeader={styleHeader}
          handleClick={e => this.handleHeaderClick(e)}>
              <Input placeholder='搜索文章,内容,标签' inputStyle={inputStyle} 
              placeholderTextColor='white'
              containerStyle={containerStyle}/>
          </Header>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
  left_header_image: {
    width: 10,
    height: 10,
  },
  right_header_image: {
    width: 20,
    height: 20,
  },
  left_image: {
    width: 50,
    height: 75,
  },
  bottom_btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#767676',
  },
  listView: {
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  open_view: {
    alignItems: 'center',
    width: '20%',
  },
  open_view_list: {
    backgroundColor: 'pink',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  open_view_list_image1: {
    width: 40,
    height: 40,
  },
  open_view_list_image2: {
    width: 30,
    height: 30,
  },
  open_view_list_text: {
    fontSize: 16,
    color: '#767676',
    marginTop: 5,
    marginBottom: 5,
  },
});
export default Introduce;
