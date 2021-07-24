import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [date, setDate] = useState(() => new Date());

  // 副作用とそのクリーンアップを 1 度だけ（マウント時とアンマウント時にのみ）実行したいという場合、空の配列 ([]) を第 2 引数として渡すことができます。
  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID);
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>現在時刻</Text>
      <Text>{date.toLocaleTimeString()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
