import React, { FC, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '~/hooks/hooks';
import { favoritesMapper } from '~/helpers/helpers';
import { selectCurrentUser, selectFavorites } from '~/store/selectors';
import { products as productsActions } from '~/store/actions';
import {
  ScreenWrapper,
  FlatList,
  Spinner,
  Text,
  View,
} from '~/components/components';
import { globalStyles } from '~/styles/styles';
import { FavoriteCard } from './components/favorite-card';

const Favorite: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const storedFavorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && user) {
      setIsLoading(true);
      dispatch(productsActions.fetchFavorites({ limit: 10 }))
        .unwrap()
        .finally(() => setIsLoading(false));
    }
  }, [dispatch, isFocused]);

  const favorites = favoritesMapper(storedFavorites);

  if (isLoading) {
    return (
      <ScreenWrapper style={globalStyles.justifyContentCenter}>
        <Spinner />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      {storedFavorites ? (
        <FlatList
          data={favorites}
          contentContainerStyle={[globalStyles.px4, globalStyles.mt3]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FavoriteCard product={item} />}
        />
      ) : (
        <View
          style={[
            globalStyles.mt7,
            globalStyles.justifyContentCenter,
            globalStyles.flex1,
          ]}
        >
          <Text>Your favorites would be place here</Text>
        </View>
      )}
    </ScreenWrapper>
  );
};

export { Favorite };
