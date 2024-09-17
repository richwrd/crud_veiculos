import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { useState } from "react";

import { Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default function VeiculoCreate(){
  const [modelo, setModelo] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState("");
  const [placa, setPlaca] = useState("");

  return (

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/gtr.jpg')}
          style={styles.reactLogo}
        />
    }>
      <ThemedView>

        <TextInput
          style={styles.TextInput}
          placeholder="Modelo"
          onChangeText={novoTexto => setModelo(novoTexto)}
          defaultValue={modelo}
        >  
        </TextInput>

        <TextInput
          style={styles.TextInput}
          placeholder="Ano Fabricação"
          onChangeText={novoTexto => setAnoFabricacao(novoTexto)}
          defaultValue={anoFabricacao}
        >
        </TextInput>

        <TextInput
          style={styles.TextInput}
          placeholder="Placa do veículo"
          onChangeText={novoTexto => setPlaca(novoTexto)}
          defaultValue={placa}
        >
        </TextInput>

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
                                  try {
                                  await fetch('http://localhost:3000/veiculo', {
                                                                                  method: 'POST',
                                                                                  headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                  },
                                                                                  body: JSON.stringify({
                                                                                    modelo: modelo,
                                                                                    anoFabricacao: anoFabricacao,
                                                                                    placa: placa,
                                                                                  })
                                                                                });
                                    console.log('ENVIADO');
                                    router.push('../(tabs)');
                                  } catch (error) {
                                    console.log('Erro ao salvar veiculo' + error )
                                  }
                                }
                  }
        >
          <Text> Salvar </Text>
        </TouchableOpacity>
    </ThemedView>

    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  reactLogo: {
    top: -500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  TextInput: {
      height: 40,
      width: "50%",
      color: "white",
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 16,
      paddingLeft: 10,
  },
  button: {
      backgroundColor: 'green',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 16,
      alignItems: 'center',
      width: "50%",
      marginTop: 40
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});
