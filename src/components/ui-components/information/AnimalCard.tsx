import React from 'react';
import { Box, Text, Image, Badge, Column, Row, Icon } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

type Props = {

}

const AnimalCard = () => {
  return (
    <Box h='80' rounded='2xl' borderWidth='1'>
      <Column >
        <Image roundedTop='2xl' height='40' alt='' source={require('../../../assets/albatross.png')}/>
      </Column>
      <Column flex='1' justifyContent='space-between' p='3' bg='white' roundedBottom='2xl'>
        <Row justifyContent='space-between'>
          <Text>ANIMALIA - AVES</Text>
          <Text>GLOBAL</Text>
        </Row>
        <Column>
          <Text bold fontSize='lg'>Wandering Albatross</Text>
          <Text italic>Diomedea exulans</Text>
        </Column>
        <Row justifyContent='space-between'>
          <Row alignItems='center' space='2'>
            <Icon as={AntDesign} name='arrowdown' color='warning.700' />
            <Text>Decreasing</Text>
          </Row>
          <Badge colorScheme='success' variant='solid' p='2' _text={{fontSize:'xs'}}>Vulnarable</Badge>
        </Row>
      </Column>
    </Box>
  );
};

export default AnimalCard;
