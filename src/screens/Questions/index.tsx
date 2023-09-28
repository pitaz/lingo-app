import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import QuestionRow from './QuestionRow';
import {styles} from './styles';

const Questions: React.FC<any> = () => {
  const ref = useRef<any>();
  const [data, setData] = React.useState<any>([]);
  const [result, setResult] = React.useState<[]>([]);
  const [loading, setLoading] = React.useState<Boolean>(false);

  const scrollToIndex = (index: number) => {
    ref.current?.scrollToIndex({animated: true, index: index + 1});
  };
  useEffect(() => {
    const subscriber = firestore()
      .collection('questions')
      .onSnapshot(querySnapshot => {
        const res: IDataModel[] = [];

        querySnapshot.forEach(documentSnapshot => {
          res.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setData(res);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        ref={ref}
        horizontal
        data={data}
        scrollEnabled={false}
        renderItem={(item: any) => (
          <QuestionRow
            data={item}
            scrollToIndex={scrollToIndex}
            setResult={setResult}
            result={result}
            questions={data}
          />
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default Questions;
