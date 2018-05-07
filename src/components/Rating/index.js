import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Rating extends React.Component {

  static defaultProps = {
    unit: '分',
    average: 0,
    stars: 0,
    starsMax: 5
  };

  render () {
    return (
      <View style={styleStars.body}>
        <View style={styleStars.average}>
          <Text style={styleStars.averageText}>{this.props.average}{this.props.unit}</Text>
        </View>
        {
          [...Array(this.props.starsMax)].map((e, index) => index + 1).map(e => {
            const stars = this.props.stars / 10;
            if (e <= stars) {
              return (<Image key={e} style={styleStars.star} source={require('../../image/icon/star/10.png')} />);
            } else if (e - stars < 1) {
              const n = 10 * stars - 10 * (e - 1);
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