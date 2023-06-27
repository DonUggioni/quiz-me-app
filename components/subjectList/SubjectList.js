import { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import SubjectCard from '../cards/subjectCard/SubjectCard';

import { COLORS, ICONS, MARGIN } from '../../constants';
import { styles } from './subjectList.styles';
import ActionButton from '../actionButton/ActionButton';

import { useRouter } from 'expo-router';
import useFetch from '../../hooks/useFetch';

function removeGeneralCategory(str) {
  if (!str.includes(':')) return str;

  let formattedStr = str.split(':').slice(1);

  return formattedStr.join('').trim();
}

export default function SubjectList() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch('api_category.php');
  const [activeSubject, setActiveSubject] = useState(null);

  function handleCardPress(subject) {
    setActiveSubject(subject);
  }

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Text style={styles.errorText}>Something went wrong.</Text>
        <Text style={styles.errorText}>Please try again.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Pick a subject</Text>
      <FlatList
        data={data.trivia_categories}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SubjectCard
            source={ICONS[`icon-${item.id}`]}
            subject={removeGeneralCategory(item.name)}
            onPress={() => handleCardPress(item)}
            isActive={activeSubject?.name === item.name}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          rowGap: MARGIN.medium,
        }}
      />
      <ActionButton
        onPress={() => router.push(`/questions/${activeSubject.id}`)}
      />
    </View>
  );
}
