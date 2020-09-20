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
                  left={() => <Button  onPress={() =>props.navigation.navigate('List')}>Mens</Button>}      
            >
                  
                  <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('List')} />

                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        onPress={()=>props.navigation.navigate('List')}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Second item" />

                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>

      {/** Nextt ***/}


            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('List')}>Womens</Button>}      
            >
                  
                  <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('List')} />

                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        onPress={()=>props.navigation.navigate('List')}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Second item" />

                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>

      {/** Nextt ***/}

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('List')}>Youths</Button>}      
            >
                  
                  <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('List')} />
                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Second item" />
                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>

      {/** Nextt ***/}

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('List')}>Mens</Button>}      
            >

            <List.Item left={props => <List.Icon {...props} icon="soccer" />} title="Football Kits" onPress={()=>props.navigation.navigate('List')} />

                  <List.Accordion
                        title="Clothings"
                        left={props => <List.Icon {...props} icon="tshirt-crew" />}
                        onPress={()=>props.navigation.navigate('List')}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Second item" />

                  </List.Accordion>

                  <List.Accordion
                        title="Accessories"
                        left={props => <List.Icon {...props} icon="basketball" />}
                        style={{marginLeft:10}}
                  >
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Bags and Luggage" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Drinks" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Gloves" />
                        <List.Item onPress={()=>props.navigation.navigate('List')} title="Jwelleries" />

                  </List.Accordion>
            
            </List.Accordion>


      {/** Nextt ***/}

            <List.Accordion
                  left={() => <Button  onPress={() =>props.navigation.navigate('List')}>Accessories</Button>}  
            >
                  <List.Item onPress={()=>props.navigation.navigate('List')} title="Bags and Luggage" />
                  <List.Item onPress={()=>props.navigation.navigate('List')} title="Drinks" />
                  <List.Item onPress={()=>props.navigation.navigate('List')} title="Gloves" />
                  <List.Item onPress={()=>props.navigation.navigate('List')} title="Jwelleries" />
            </List.Accordion>
            
      {/** Nextt ***/}
                  
            <List.Item left={() => <Button  onPress={() =>props.navigation.navigate('List')}>Sale !</Button>}   />

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