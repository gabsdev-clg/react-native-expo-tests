import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export type ThemedInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedInput = ({ lightColor, darkColor, ...rest }: ThemedInputProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <TextInput
      style={[
        {
          color,

          borderColor: color,
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        },
      ]}
      placeholderTextColor={color}
      {...rest}
    />
  );
};

export default ThemedInput;
