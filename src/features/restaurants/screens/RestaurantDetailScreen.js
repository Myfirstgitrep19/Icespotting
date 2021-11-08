import React, { useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';

import { SafeArea } from '../../../components/SafeArea/SafeArea';
import { Spacer } from '../../../components/Spacer/Spacer';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { OrderButton } from '../components/RestaurantList.styles';

import { CartContext } from '../../../services/cart/CartContext';

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [flavorsExpanded, setFlavorsExpanded] = useState(false);
  const [sundaeExpanded, setSundaeExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Accordion
          title="Ice Cream Flavors"
          left={(props) => <List.Icon {...props} icon="fruit-watermelon" />}
          expanded={flavorsExpanded}
          onPress={() => setFlavorsExpanded(!flavorsExpanded)}
        >
          <List.Item title="Extra Vanilla" />
          <Divider />
          <List.Item title="Chocolate" />
          <Divider />
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Strawberry" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Sundae"
          left={(props) => <List.Icon {...props} icon="ice-cream"/>}
          expanded={sundaeExpanded}
          onPress={() => setSundaeExpanded(!sundaeExpanded)}
        >
          <List.Item title="Brownie Sundae" />
          <Divider />
          <List.Item title="Banana Sundae" />
          <Divider />
          <List.Item title="ChocolateParty Sundae" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Milk Shakes"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Vanilla" />
          <Divider />
          <List.Item title="Strawberry" />
          <Divider />
          <List.Item title="Chocolate" />
        </List.Accordion>
        <Divider />        
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: 'special', price: 1299 }, restaurant);
            navigation.navigate('Checkout');
          }}
        >
          Single Scoop Only $3.00!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
