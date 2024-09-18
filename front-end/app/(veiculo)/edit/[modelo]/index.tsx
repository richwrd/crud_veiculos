import ParallaxScrollView from "@/components/ParallaxScrollView";
import { router, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

import { VeiculoProps } from "@/props/veiculo";
import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";

export default function VeiculoEdit(){

  // pega parametro da rota
  const { modelo } = useLocalSearchParams();

  const [ veiculo, setVeiculo ] = useState<VeiculoProps>();

  const [ modeloText, setModelo ]               = useState("");
  const [ anoFabricacao, setAnoFabricacao ] = useState("");
  const [ placa, setPlaca ]                 = useState("");

  const getVeiculo = async () => {
    try{
      console.log( modelo );
      const response = await fetch(`http://localhost:3000/veiculo/${modelo}`)
      const json     = await response.json();

      setVeiculo(json);

      setModelo(json.modelo);
      setAnoFabricacao(json.anoFabricacao);
      setPlaca(json.placa);
    }catch (error) {
      console.error('Erro ao buscar veículo:', error);
    }
  }

  useEffect(()=> {
    getVeiculo();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#A1CEDC', dark: '#1D3D47'}}
      headerImage={
        <Image
          source={require('@/assets/images/gtr.jpg')}
          style={styles.reactLogo}
        />
      }>

        <View>
          <ThemedText>
            Modelo:
          </ThemedText>
          <TextInput
            style={styles.textInput}
            placeholder={modeloText}
            onChangeText={novoTexto => setModelo(novoTexto)}
            defaultValue={modeloText}
          />
        </View>

        <View style={{ marginTop: 20, marginBottom: 5 }}>
          <ThemedText>
            Ano:
          </ThemedText>
          <TextInput
            style={styles.textInput}
            placeholder={anoFabricacao}
            onChangeText={novoTexto => setAnoFabricacao(novoTexto)}
            defaultValue={anoFabricacao}
          />
        </View>

        <View style={{ marginTop: 20, marginBottom: 5 }}>
          <ThemedText>
            Placa:
          </ThemedText>
          <TextInput
            style={styles.textInput}
            placeholder={placa}
            onChangeText={novoTexto => setPlaca(novoTexto)}
            defaultValue={placa}
          />
        </View>

        <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                try {
                  await fetch(`http://localhost:3000/veiculo/${modelo}`, {
                    method: 'PATCH',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      modelo: modeloText,
                      anoFabricacao: anoFabricacao,
                      placa: placa,
                    })
                  });
                  console.log('ATUALIZADO');
                  router.push(`/(tabs)`);
                } catch (error) {
                  console.error('Erro ao alterar usuário:', error);
                }
              }
              }
            >
              <Text style={styles.buttonText}> Salvar </Text>
          </TouchableOpacity>
    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    top: -500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    height: 40,
    width: "50%",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    margin: 12,
    borderRadius: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});