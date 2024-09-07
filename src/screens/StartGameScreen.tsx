import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Icon} from './../img/Icon'
import {StartGameButton} from '../components/StartGame'

export function StartGameScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#43BCF0', '#571280']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <Icon icon='my_mind_text' style={styles.icon} size={62}/>
      </LinearGradient>

      <LinearGradient
        colors={['#571280', '#43BCF0']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.background}
      />

      <View style={styles.buttons}>
        <StartGameButton icon="god" />
        <StartGameButton icon="dogs" />
        <StartGameButton icon="girl" />
        <StartGameButton icon="tiger" />
        <StartGameButton icon="space" />
        <StartGameButton icon="slime" />
        <StartGameButton icon="magic" />
        <StartGameButton icon="robots" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'flex-end', 
    alignItems: 'center',    
    zIndex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  icon: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: '#fff',
  },
});