import { Alert, Button, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

export default function HomeScreen() {
  const [numeroSorteado, setNumeroSorteado] = useState(null);

  const sortearNumero = () => {
    const numero = Math.floor(Math.random() * 10) + 1; 
    setNumeroSorteado(numero);
    Alert.alert(`Número sorteado: ${numero}`);
  };
  return (
    

    
    <ThemedView style={styles.titleContainer}>
    <ThemedText type="title">Sortear!</ThemedText>
    {numeroSorteado && <ThemedText type="subtitle">Último número sorteado: {numeroSorteado}</ThemedText>}
    <View style={styles.buttonContainer}>
      <Button title="Clique para sortear" onPress={sortearNumero} />
    </View>
  </ThemedView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1, // Faz o contêiner ocupar todo o espaço disponível
    justifyContent: 'center', // Alinha verticalmente ao centro
    alignItems: 'center', // Alinha horizontalmente ao centro
    gap: 8, // Espaçamento entre os itens
    
    
  },
  buttonContainer: {
    marginTop: 16, // Espaçamento entre o texto e o botão
    width: '80%', // Largura do botão (ajuste conforme necessário)
  },
});
