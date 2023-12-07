import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  box: { width: '50%', height: 200, backgroundColor: 'grey', marginBottom: 10 },
  expandedBox: { width: '100%' },
  firstbox: { marginTop: 10 }
});

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBoxClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleBoxClick}>
        <View style={[styles.box, styles.firstbox, isExpanded ? styles.expandedBox : null]}></View>
      </TouchableOpacity>
      <View style={{ ...styles.box, backgroundColor: 'cyan' }}></View>
      <View style={{ ...styles.box, backgroundColor: 'yellow' }}></View>
      <View style={{ ...styles.box, backgroundColor: 'black' }}></View>
    </View>
  );
}
