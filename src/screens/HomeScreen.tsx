import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Icon} from './../img/Icon'

export function HomeScreen({navigation}: any) {
    return (
        <View style={styles.container}>
          <LinearGradient
            colors={['#43BCF0', '#541896', '#711280']}
            start={{ x: 1, y: 0 }}  
            end={{ x: 0, y: 1 }}
            style={styles.background}
          />
          <Icon icon="my_mind" size={250}/>  
          <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate('Game')}>
            <Text style={styles.text}>
                 START
            </Text>
            </TouchableOpacity>
        </View>
      );
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1300,
      },
      button: {
        alignItems: 'center',        
        justifyContent: 'center',    
        borderRadius: 20,
        backgroundColor: '#6EBCF7',
        width: 160,                  
        height: 40,  
      },
      text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
      },
    });