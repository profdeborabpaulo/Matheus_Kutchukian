import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const[tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([
    "Esttudar React Native",
    "Aprender UseState",
    "Criar Primeira Tela"
  ]);
  function adicionarTarefa() {
    if(!tarefa.trim())
      return;
      setTarefa([...tarefas, tarefa]);
      setTarefa('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Gerenciador de Tarefas</Text>
      <TextInput style={styles.input} placeholder="Digite uma tarefa..." />
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
})