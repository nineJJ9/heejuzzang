import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MYpage = () => {
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginBottom: 30
        }}>
        <Text style={{fontSize: 20}}>3월 1일 거문오름</Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginBottom: 30
        }}>
        <Text style={{fontSize: 20}}>3월 1일 거문오름</Text>
        <Ionicons name="pencil" size={25} color="black" />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 50,
        marginBottom: 30
        }}>
        <Text style={{fontSize: 20}}>3월 1일 거문오름</Text>
        <Ionicons name="pencil" size={25} color="black" />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -270
  },
});

export default MYpage;