import * as React from 'react';
import { Searchbar, Appbar } from 'react-native-paper';

import {View, ScrollView} from 'react-native';


export default function ShopSearchPage(props){

      const [searchQuery, setSearchQuery] = React.useState('');
      const onChangeSearch = query => setSearchQuery(query);

      return (
      <ScrollView style={{ marginTop:"8%",width:"100%"}}>
            <Appbar.Header style={{height:30}}>
                        <Appbar.Action  style={{marginTop:-25}} icon="arrow-left" size={30} 
                              onPress={()=>{props.navigation.goBack();}} 
                        />
                        <Appbar.Content style={{marginTop:-30}} title="Serach" subtitle="Your desire" />
                        <Appbar.Action  style={{marginTop:-25}} icon="cart" size={30} 
                              onPress={()=>{props.navigation.navigate("Cart");}} 
                        />
            </Appbar.Header>
            <Searchbar
                  placeholder="Search"
                  onChangeText={onChangeSearch}
                  value={searchQuery}
            />
      </ScrollView>
      );

}