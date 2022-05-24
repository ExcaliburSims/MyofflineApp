import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const CardActu = props => {
  return (
    <View style={styles.card}>
      <View style={styles.boximg}>
        <Image source={{uri: props.picture}} style={styles.imageCard} />
      </View>
      <View style={styles.boxCard}>
        <Text style={styles.cardText}>{props.name}</Text>
        <Text style={styles.cardText}>{props.country}</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    height: 300,
    width: '100%',
    backgroundColor: '#d90958',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
    marginTop: 10,
  },
  cardText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Times',
    fontSize: 18,
    fontWeight: '600',
  },
  boximg: {
    width: 300,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardActu;
