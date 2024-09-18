import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import AcessorioList from '@/components/acessorioList';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/gtr.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Acessórios 🏷️</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push('../(veiculo)/create')
            }}
        >
          <Text style={styles.buttonText}> Cadastrar Veículo </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push('../(acessorio)/create')
            }}
        >
          <Text style={styles.buttonText}> Cadastrar Acessório </Text>
        </TouchableOpacity>
      </ThemedView>
        
      <ThemedView>
        < AcessorioList />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    top: -500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 65,
    borderRadius: 16,
    alignItems: 'center',
    width: "30%",
    marginRight: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
