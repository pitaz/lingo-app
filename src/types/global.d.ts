interface INavigation {
  goBack: () => void;
  navigate: (route: string) => void;
}

interface ILanguage {
  text: string;
  indexToTranslate: number;
}

interface IOptions {
  word: string;
  translation: string;
}

interface IDataModel {
  id: string;
  sentence?: ILanguage;
  target?: ILanguage;
  correctWord?: string;
  options?: IOptions[];
}
