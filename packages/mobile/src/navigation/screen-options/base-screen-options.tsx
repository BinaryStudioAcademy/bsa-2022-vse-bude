import { HeaderLeft } from '~/components/components';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const baseScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 16 },
  headerLeft: HeaderLeft,
};

export { baseScreenOptions };
