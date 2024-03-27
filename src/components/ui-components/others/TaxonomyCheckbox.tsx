import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Checkbox } from 'native-base'

type Props = {
    children:string
}

const TaxonomyCheckbox = ({children}:Props) => {
  return (
    <Checkbox value={children} mb='1'>{children}</Checkbox>
  )
}

export default TaxonomyCheckbox

const styles = StyleSheet.create({})