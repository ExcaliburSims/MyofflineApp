import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Share,
  TouchableOpacity,
} from 'react-native';
import {GlobalStyle} from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import dayjs from 'dayjs';
import {decode} from 'html-entities';

const CardActu = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardbox}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.dateBox}>
          <Icon name="clock-o" size={20} style={styles.clockText} />
          <Text style={[GlobalStyle.titleText, styles.clockbox]}>
            {dayjs(props.date).format('DD MMMM YYYY')}
          </Text>
        </View>
        <ImageBackground
          source={{uri: props.picture}}
          style={styles.imageCard}
          imageStyle={{borderRadius: 14}}>
          <LinearGradient
            colors={['rgba(3,3,3,0)', 'rgba(3,3,3,1)']}
            style={styles.linearGradient}
          />
          <View style={styles.boxCard}>
            <View style={styles.boxSubCard}>
              <View style={styles.branchActu}>
                <Text style={[GlobalStyle.titleText, styles.cardText]}>
                  {props.category}
                </Text>
              </View>
              <Text
                style={[GlobalStyle.titleText, styles.cardText]}
                onPress={props.button}>
                {decode(props.titleContent)}
              </Text>
            </View>
            <View style={styles.boxOption}>
              <Icon
                name="share-alt"
                size={30}
                color="white"
                style={styles.icon}
                onPress={onShare}
              />
              <TouchableOpacity onPress={props.favBtn}>
                <Icon name="star" size={30} style={props.styl} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    height: 300,
    width: '100%',
    //backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardbox: {
    //backgroundColor: 'green',
    height: 300,
    marginBottom: 15,
    width: '95%',
    borderBottomStartRadius: 14,
    borderBottomEndRadius: 14,
  },
  imageCard: {
    height: '90%',
    width: '100%',
    borderRadius: 14,
  },
  cardText: {
    color: 'white',
    fontFamily: 'Times',
    fontSize: 18,
    fontWeight: '600',
  },
  boxCard: {
    flexDirection: 'row',
    position: 'absolute',
    top: '50%',
    width: '100%',
    //backgroundColor: 'green',
  },
  boxSubCard: {
    //backgroundColor: 'gray',
    width: '80%',
    marginLeft: 5,
  },
  boxOption: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    //backgroundColor: 'yellow',
    width: '20%',
    marginHorizontal: -10,
  },
  icon: {
    marginHorizontal: 10,
  },
  branchActu: {
    backgroundColor: '#0000fe',
    width: '30%',
    borderRadius: 9,
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 14,
  },
  clockText: {
    color: '#17222b',
    fontFamily: 'Times',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
  clockbox: {
    color: '#17222b',
    fontFamily: 'Times',
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 5,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnNormal: {
    color: 'white',
  },
  btnPress: {
    color: 'red',
  },
});
export default CardActu;
