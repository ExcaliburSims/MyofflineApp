import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import CardActu from './components/Card';
import Modal from 'react-native-modal';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isoffline, setIsoffline] = useState([]);
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

  const Button2 = ({children, ...props}) => {
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    );
  };

  const NoInternetModal = ({show, onRetrying, onRetry}) => {
    return (
      <Modal isVisible={show} style={styles.modal} animationInTiming={600}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Erreur de connexion</Text>
          <Text style={styles.modalText}>Tsha mega stp</Text>
          <Button2 onPress={onRetry} disabled={onRetrying}>
            Try again
          </Button2>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        onRefresh={fetchUsers}
        refreshing={loading}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <NoInternetModal
        show={isoffline}
        onRetry={fetchUsers}
        isRetrying={loading}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  modalText: {
    fontSize: 16,
    color: '#555',
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
  },
});

export default App;
