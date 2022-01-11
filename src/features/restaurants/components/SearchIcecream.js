import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { LocationContext } from '../../../services/location/LocationContext';

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const SearchIcecream = (props) => {
  const { iceCream, searchIceCream } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(iceCream);

  useEffect(() => {
    setSearchKeyword(iceCream);
  }, [iceCream]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a flavour"
        value={searchKeyword}
        icon="ice-cream"
        onSubmitEditing={() => searchIceCream(searchKeyword)}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
