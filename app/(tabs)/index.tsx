import { Image, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';
import Constants from 'expo-constants';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const link = 'demonstrate?text=hello%0Aworld'
  const mobile = Platform.OS === 'android' || Platform.OS === 'ios'
  const { expoConfig } = Constants
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Approach 1: Visit internally</ThemedText>
        <ThemedText>
          Visit the demonstration page
          <Link href={`/${link}`}>
            <ThemedText type="link">
              {' '}via an internal link to /{link}
            </ThemedText>
          </Link>
        </ThemedText>
      </ThemedView>
      {mobile && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Approach 2: Deep link</ThemedText>
          <ThemedText>
            Open a deep link using the command:
          </ThemedText>
          <ThemedText type="defaultSemiBold">
            npx uri-scheme open "exp://{expoConfig!.hostUri}/--/{link}" --{Platform.OS}
          </ThemedText>
        </ThemedView>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
