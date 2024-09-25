import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const params = useLocalSearchParams()
  const [textParam, textParamValid] = useMemo(() => {
    if (typeof params.text === 'string') {
      return [params.text, true]
    }
    return ['', false]
  }, [params])
  const hasNewline = useMemo(() => {
    return textParam.indexOf('\n') !== -1
  }, [textParam])
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Demonstrate</ThemedText>
      </ThemedView>
      <ThemedText>This page was linked to with the following query param:</ThemedText>
      <ThemedText>{params.text}</ThemedText>
      {textParamValid && (<>
        {hasNewline && (
          <ThemedText>In this case it correctly has a newline.</ThemedText>
        )}
        {!hasNewline && (
          <ThemedText>
            In this case it{' '}
            <ThemedText type="defaultSemiBold">does not</ThemedText>{' '}
            contain a newline.
          </ThemedText>
        )}
      </>)}
      {!textParamValid && (
        <ThemedText>For some reason the parameter was invalid (missing or array?).</ThemedText>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
