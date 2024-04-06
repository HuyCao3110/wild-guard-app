import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, IButtonProps } from 'native-base'

type Props = {
    label:string
} & IButtonProps

const PrimaryButton = ({label, ...buttonProps}:Props) => {
  return (
    <Button {...buttonProps} colorScheme='green' _text={{fontSize:'md'}}>{label}</Button>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({})