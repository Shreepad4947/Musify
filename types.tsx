/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type TabThreeParamList = {
  TabTwoScreen: undefined;
};
export type TabFourParamList = {
  TabTwoScreen: undefined;
};
export type Album = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}

export type Media  ={
      albumId:string,
      creationTime: number,
      duration: number,
      filename:string,
      height: number,
      id:string ,
      mediaType: string,
      modificationTime:number ,
      uri:string,
      width:number
}
