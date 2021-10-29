import React from 'react';

import logo from '~/assets/Nubank_Logo.png'
import { Container, Top, Logo, Title } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Welinton</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
}