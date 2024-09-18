import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ThemedText } from './ThemedText';
import { AcessorioProps } from '@/props/acessorio';

export default function AcessorioList() {
  const [isLoading, setLoading] = useState(true);
  const [acessorio, setAcessorio] = useState < AcessorioProps[] > ([]);
  const [nome, setNome] = useState("");

  const getAcessorios = async () => {
    try {
      const response = await fetch('http://localhost:3000/acessorio/');
      const json = await response.json();
      console.log('RECEBI');
      setAcessorio(json);
      setNome(json.nome);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAcessorios();
  }, []);

  // toda vez que recarregar a pagina trás novamente
  useFocusEffect(
    useCallback(() => {
      getAcessorios();
    }, [])
  );

  function AcessorioCard({ acessorioCard }: { acessorioCard: AcessorioProps }){

    return (
      <View style={styles.card}>
        <ThemedText>
          {acessorioCard.nome}
        </ThemedText>

        <View style={{ display: "flex", alignItems: "center" }}>

          <TouchableOpacity 
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={ async () => {
              try {
                  await fetch(`http://localhost:3000/acessorio/${acessorioCard.nome}`, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      }
                    })
              } catch (error){
                console.log('Não foi possivel apagar acessório: ' + error); 
              } finally {
                getAcessorios();
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
        data={acessorio}
        keyExtractor={item => item.nome}
        renderItem={({ item }) => <AcessorioCard acessorioCard={item} />}
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
    marginBottom: 5,
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