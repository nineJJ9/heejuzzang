import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';

const HomeTab = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder='검색'
        onChangeText = {onChangeSearch}
        value = {searchQuery}
        style = {{
          borderRadius: 10,
          marginHorizontal: 20,
          marginTop: 40,
          width: 340,
          zIndex: 10,
          position: 'absolute'
        }}
      />
      <MapView
        style={styles.map}
        provide={PROVIDER_GOOGLE}
        region={{
          latitude: 33.45594224084678,
          longitude: 126.56190413060305,
          latitudeDelta: 0.6,
          longitudeDelta: 0.6
        }} />
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: "100%",
  },
});

export default HomeTab;