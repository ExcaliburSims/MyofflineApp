import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const CardActu = props => {
  return (
    <View style={styles.card}>
      <Image source={{uri: props.picture}} style={styles.imageCard} />
      <View style={styles.boxCard}>
        <Text>{props.name}</Text>
        <Text>{props.country}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 300,
    width: '100%',
    backgroundColor: 'gray',
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
    borderRadius: 200,
  },
  cardText: {
    color: 'white',
    fontFamily: 'Times',
    fontSize: 18,
    fontWeight: '600',
  },
  /* boxCard: {
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
 */
});
export default CardActu;
