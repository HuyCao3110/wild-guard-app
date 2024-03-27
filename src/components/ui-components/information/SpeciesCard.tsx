import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Column, Row , Text, Image} from 'native-base'

const SpeciesCard = () => {
  return (
    <Row bg='#08B364' w='100%' p='3' justifyContent='space-between' alignItems='center' rounded='md'>
        <Column>
            <Text color='white' fontSize='lg'>AMPHIBIANS</Text>
            <Text color='white' fontSize='4xl' bold>41%</Text>
        </Column>
        <Image alt='' source={require('../../../assets/amphibians.png')}/>
    </Row>
  )
}

export default SpeciesCard

const styles = StyleSheet.create({})