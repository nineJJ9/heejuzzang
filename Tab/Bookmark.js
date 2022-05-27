import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Bookmark;