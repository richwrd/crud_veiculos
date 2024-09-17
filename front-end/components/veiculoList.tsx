import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ThemedText } from './ThemedText';
import { VeiculoProps } from '@/props/veiculo';

export default function VeiculoList() {
  const [isLoading, setLoading] = useState(true);
  const [veiculo, setVeiculo] = useState < VeiculoProps[] > ([]);

  const getVeiculos = async () => {
    try {
      const response = await fetch('http://localhost:3000/veiculo/');
      const json = await response.json();
      console.log('RECEBI');
      setVeiculo(json);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  // toda vez que recarregar a pagina trás novamente
  useFocusEffect(
    useCallback(() => {
      getVeiculos();
    }, [])
  );

  function VeiculoCard({ veiculoCard }: { veiculoCard: VeiculoProps }){

    return (
      <View style={styles.card}>
        <ThemedText>
          {veiculoCard.modelo}
        </ThemedText>

        <ThemedText>
          {veiculoCard.anoFabricacao}
        </ThemedText>

        <ThemedText>
          {veiculoCard.placa}
        </ThemedText>

        <View style={{ display: "flex", alignItems: "center" }}>
          <TouchableOpacity 
            style={styles.button}
            onPress={ async () => {
              try {
                  await fetch(`http://localhost:3000/veiculo/${veiculoCard.modelo}`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      }
                    })
              } catch (error){
                console.log('Não foi possivel apagar veiculo: ' + error); 
              } finally {
                getVeiculos();
              }
            }}
          >

              <Text style={styles.buttonText}>
                Excluir
              </Text>

          </TouchableOpacity>
        </View>

      </View>
    )
  }

  return (
    <View>
        <FlatList
        data={veiculo}
        keyExtractor={item => item.modelo}
        renderItem={({ item }) => <VeiculoCard veiculoCard={item} />}
        />
    </View>
  );
  
};


const styles = StyleSheet.create({
  card: {
    flex:1,
    padding: 24,
    backgroundColor: "black",
    borderRadius: 15,
    marginBottom: 10  
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 1,
    borderRadius: 16,
    alignItems: 'center',
    width: "50%",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});