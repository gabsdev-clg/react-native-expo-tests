import ThemedInput from '@/components/theme/ThemedInput';
import { ThemedText } from '@/components/theme/ThemedText';
import { ThemedView } from '@/components/theme/ThemedView';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
  });

  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    console.log('Login data:', data);
    router.push('/(tabs)');
  };

  return (
    <GestureHandlerRootView>
      <ThemedView style={styles.container}>
        <ThemedText>Login Screen</ThemedText>

        <Controller
          control={control}
          name="username"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ThemedInput placeholder="Username" value={value} onChangeText={onChange} />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <ThemedInput
              placeholder="Password"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <TouchableOpacity
          disabled={!isValid}
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleSubmit(onSubmit)}
        >
          <ThemedText style={{ color: '#fff' }}>Entrar</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </GestureHandlerRootView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
});
