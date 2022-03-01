import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

// COMPONENTS
import PersonListItem from './PersonListItem'

export default function PersonList(props) {
   const { people } = props

   const renderItem = ({ item }) => {
      return <PersonListItem person={item} />
   }

   return <FlatList data={people} renderItem={renderItem} keyExtractor={(item, index) => index} />

}
