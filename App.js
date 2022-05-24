import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import axios from 'axios';
import CardActu from './components/Card';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    setLoading(true);
    axios
      .get('https://example-data.draftbit.com/restaurants?_limit=50')
      .then(({data}) => {
        setUsers(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const renderItem = ({item}) => {
    return (
      <CardActu name={item.name} country={item.country} picture={item.image} />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
