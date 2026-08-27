import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
        <Stack.Screen name="index" options={{ title: 'Gerenciador de Tarefas' }} />
        <Stack.Screen name="nova-tarefa" options={{ title: 'Nova Tarefa' }} />
        </Stack>
    );
    }
