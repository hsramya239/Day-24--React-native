import React, { useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import axios from 'axios';

export default function App() {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUserData(response.data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  fetchData();

  return (
    <ScrollView>
      {userData.map((val) => (
        <View key={val.id}>
          <Text>{val.first_name + ' ' + val.last_name}</Text>
          <Image style={{ width: 100, height: 100 }} source={{ uri: val.avatar }} />
          <Text>{val.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
