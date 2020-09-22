import React,{useState} from 'react';

import{View,StyleSheet} from 'react-native'

import{DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'

import {
    Button,
    List
} from 'react-native-paper';

export function DrawerContent(props){

      return (
            
      <View style={styles.drawerContent}>

      <DrawerContentScrollView {...props}>

      <List.Section title="Shop">

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('Items')}>Mens</Button>}      
            >
                  
                  <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('Items')} />

                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        onPress={()=>props.navigation.navigate('Items')}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Second item" />

                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>

      {/** Nextt ***/}


            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('Items')}>Womens</Button>}      
            >
                  
                  <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('Items')} />

                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        onPress={()=>props.navigation.navigate('Items')}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Second item" />

                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>

      {/** Nextt ***/}

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('Items')}>Youths</Button>}      
            >
                  
                  <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('Items')} />
                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Second item" />
                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>

      {/** Nextt ***/}

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('Items')}>Mens</Button>}      
            >

            <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('Items')} />

                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        onPress={()=>props.navigation.navigate('Items')}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Second item" />

                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('Items')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>


      {/** Nextt ***/}

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('Items')}>Accessories</Button>}  
            >
                  <List.Item onPress={()=>props.navigation.navigate('Items')} title="Bags and Luggage" />
                  <List.Item onPress={()=>props.navigation.navigate('Items')} title="Drinks" />
                  <List.Item onPress={()=>props.navigation.navigate('Items')} title="Gloves" />
                  <List.Item onPress={()=>props.navigation.navigate('Items')} title="Jwelleries" />
            </List.Accordion>
            
      {/** Nextt ***/}
                  
            <List.Item left={() => <Button  onPress={() =>props.navigation.navigate('Items')}>Sale !</Button>}   />

      </List.Section>

      </DrawerContentScrollView>

      </View>

      )
}

const styles = StyleSheet.create({
      drawerContent: {
            flex: 1,
            marginTop:0
      },
      drawerSection: {
            marginTop: 15,
      },
});