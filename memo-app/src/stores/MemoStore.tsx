import AsyncStorage from '@react-native-async-storage/async-storage';

export const save = async (text: string, createdAt: number) => {
  const key: string = `${createdAt}`
  const value: string = JSON.stringify({
    text,
    createdAt,
  });

  await AsyncStorage.setItem(key, value);
}

export const loadAll = async () => {
  const keys: string[] = await AsyncStorage.getAllKeys();
  keys.sort();
  const entryList: [string, string | null][] = await AsyncStorage.multiGet(keys);
  return entryList.map(entry => JSON.parse(entry[1]))
}
