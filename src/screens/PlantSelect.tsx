import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import EnvironmentButton from '../components/EnvironmentButton';
import Header from '../components/Header';
import PlantCardPrimary from '../components/PlantCardPrimary';
import Loading from '../components/Loading';

import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export default function PlantSelect() {
  const [active, setActive] = useState('all');
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);
    
    if (!data) return setLoadedAll(true);

    if (page > 1) {
      setPlants([...plants, ...data]);
    } else {
      setPlants(data)
    }

    setLoadingMore(false);
    setLoading(false);
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api
        .get('plants_environments?_sort=title&_order=asc');
      setEnvironments([
        {key: 'all', title: 'Todos'},
        ...data,
      ]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, [page]);

  useEffect(() => {
    setFilteredPlants(
      active === 'all'
        ? plants
        : plants.filter(({environments}) => environments.includes(active))
    );
  }, [active, plants]);

  const handleFetchMore = (distance: number) => {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage(page + 1);
  }

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>
      </View>

      <View>
        <FlatList
          data={environments}
          horizontal
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            !loadedAll && handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator /> : <></>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          renderItem={({item: {title, key}}) => (
            <EnvironmentButton
              onPress={() => setActive(key)}
              active={active === key}
            >{title}</EnvironmentButton>
          )}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  titleContainer: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },

  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },

  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
});
