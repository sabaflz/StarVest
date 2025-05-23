export type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
  Crops: undefined;
  Tips: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 