import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Stars extends React.Component {
  render () {
    return (
      <View style={styleStars.body}>
        <View style={styleStars.average}>
          <Text style={styleStars.averageText}>{this.props.average}</Text>
        </View>
        {
          [...Array(10)].map((e, index) => index + 1).map(e => {
            const average = this.props.average;
            if (e <= average) {
              return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/10.png')} />);
            } else if (e - average < 1) {
              const n = 10 * average - 10 * (e - 1);
              switch (n) {
                case 1: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/1.png')} />); break;
                case 2: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/2.png')} />); break;
                case 3: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/3.png')} />); break;
                case 4: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/4.png')} />); break;
                case 5: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/5.png')} />); break;
                case 6: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/6.png')} />); break;
                case 7: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/7.png')} />); break;
                case 8: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/8.png')} />); break;
                case 9: return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/9.png')} />); break;
                default: break;
              }
            } else {
              return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/0.png')} />);
            }
          })
        }
      </View>
    )
  }
}
const styleStars = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginTop: 5
  },
  average: {
    height: 14,
    borderRadius: 2,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#FECD2F',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  averageText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold'
  },
  star: {
    height: 14,
    width: 14,
    marginRight: 2
  }
})