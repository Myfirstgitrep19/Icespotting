import React from 'react';
import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../../components/Spacer/Spacer';
import { CustomText as Text } from '../../../components/CustomText/CustomText';
import { Favourite } from '../../../components/Favourite/Favourite';
import { MaterialIcons } from '@expo/vector-icons';
import star from '../../../../assets/icons/star';
import open from '../../../../assets/icons/open';

import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Section,
  Rating,
  OperationStatus,
  Icon,
} from './RestaurantInfoCard.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const navigation = useNavigation();
  const {
    name = 'Sick Eats',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    address = '100 random sick avenue',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={2}>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={`star-${placeId}-${index}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <OperationStatus>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </OperationStatus>
        </Section>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Address>{address}</Address>
          <IconButton
            onPress={() =>
              navigation.navigate('Camera', { userPlaceId: restaurant.placeId })
            }
            icon="camera"
            style={{ alignSelf: 'flex-end' }}
          />
        </View>
        <Button
          icon={() => (
            <MaterialIcons name="photo-library" size={24} color="white" />
          )}
          mode="contained"
          onPress={() =>
            navigation.navigate('PhotoLibrary', {
              userPlaceId: restaurant.placeId,
            })
          }
        >
          Zdjęcia klientów
        </Button>
      </Info>
    </RestaurantCard>
  );
};
