// //card

// // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
// <Card style={styles.card}>
	
// 	<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

// 	<Card.Content>
// 		<Title>Card title</Title>
// 		<Paragraph>Card content</Paragraph>
// 	</Card.Content>

// 	<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
	
// 	<Card.Actions>
// 		<Button>Cancel</Button>
// 		<Button>Ok</Button>
// 	</Card.Actions>

// </Card>

const [visible, setVisible] = React.useState(false);

const openMenu = () => setVisible(true);

const closeMenu = () => setVisible(false);

const [visible2, setVisible2] = React.useState(false);

const openMenu2 = () => setVisible2(true);

const closeMenu2 = () => setVisible2(false);


<Provider>

<View
	style={{
		paddingTop: 50,
		height:250,
		elevation:4
	}}
>

	<Menu
		visible={visible2}
		onDismiss={closeMenu2}
		anchor = {
		<View style={{flexDirection:"row"}}>
			<Button style={{marginLeft:75}} ><Text style={{fontSize:22}}>kholo</Text></Button>
			<Button style={{marginLeft:25}} onPress={openMenu2}><Icon name="arrow-down" size={28}></Icon></Button>
		</View>
		}
		style={{marginLeft:20,width:250,marginBottom:100}}
	>     
	     
		<Menu.Item style={styles.menuItem} onPress={() => {}} title="Item 1" />
		<Divider />
		<Menu.Item style={styles.menuItem} onPress={() => {}} title="Item 2" />
		<Divider />
		<Menu.Item style={styles.menuItem} onPress={() => {}} title="Item 3" />
	     
	</Menu>

	<Divider />

</View>

<View
	style={{
		height:350
	}}
>

	<Menu
		visible={visible}
		onDismiss={closeMenu}
		anchor = {
		<View style={{flexDirection:"row"}}>
			<Button style={{marginLeft:75}} ><Text style={{fontSize:22}}>kholo</Text></Button>
			<Button style={{marginLeft:25}} onPress={openMenu}><Icon name="arrow-down" size={28}></Icon></Button>
		</View>
		}
		style={{marginLeft:20,width:250,elevation: 0,
			shadowOpacity: 0,
			borderBottomWidth: 0,}}
		noShadow={true}
	>     
	     
		<Menu.Item style={styles.menuItem} onPress={() => {}} title="Item 1" />
		<Divider />
		<Menu.Item style={styles.menuItem} onPress={() => {}} title="Item 2" />
		<Divider />
		<Menu.Item style={styles.menuItem} onPress={() => {}} title="Item 3" />
	     
	</Menu>

	<Divider />
</View>

</Provider>




import React, { useContext,useState } from 'react'
import { View, StyleSheet } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Button, Menu, Divider, Provider,
    List
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props) {


      return (
            <View style={{flex: 1}}>

            <DrawerContentScrollView {...props}>
            <Drawer.Section style={styles.drawerSection}>

            <List.Section title="Shop">

                  <List.Accordion
                        left={() => 
                              <View style={{flexDirection:"row"}}>
                                    <Button onPress={()=>{props.navigation.navigate('List')}}>Item</Button>
                              </View>
                        }
                  >
                        <List.Item title="First item" onPress={()=>{props.navigation.navigate('List')}}/>
                        <List.Item title="Second item" onPress={()=>{props.navigation.navigate('List')}}/>                  
                  </List.Accordion>

                  <List.Accordion
                        left={() => 
                              <View style={{flexDirection:"row"}}>
                                    <Button onPress={()=>{props.navigation.navigate('List')}}>Item</Button>
                              </View>
                        }
                  >
                        <List.Item title="First item" onPress={()=>{props.navigation.navigate('List')}}/>
                        <List.Item title="Second item" onPress={()=>{props.navigation.navigate('List')}}/>                  
                  </List.Accordion>

                  <List.Accordion
                        left={() => 
                              <View style={{flexDirection:"row"}}>
                                    <Button onPress={()=>{props.navigation.navigate('List')}}>Item</Button>
                              </View>
                        }
                  >
                        <List.Item title="First item" onPress={()=>{props.navigation.navigate('List')}}/>
                        <List.Item title="Second item" onPress={()=>{props.navigation.navigate('List')}}/>                  
                  </List.Accordion>

            </List.Section>

            
            </Drawer.Section>
            </DrawerContentScrollView>

            </View>
      )
} 

const styles = StyleSheet.create({

      menuItem:{
            // marginLeft:80,
            height:50,
            shadowOpacity:0,
            elevation:0
      },
      nested_drawer:{
            width:"80%",
            marginLeft:"20%",
            borderWidth:0
      },
      drawerContent: {
            flex: 1,
      },
      userInfoSection: {
            paddingLeft: 20,
      },
      title: {
            fontSize: 16,
            marginTop: 3,
            fontWeight: 'bold',
      },
      caption: {
            fontSize: 14,
            lineHeight: 14,
      },
      row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
      },
      section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
      },
      paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
      },
      drawerSection: {
            marginTop: 15,
            // backgroundColor:"red"
      },
      bottomDrawerSection: {
            marginBottom: 15,
            borderTopColor: '#f4f4f4',
            borderTopWidth: 1
      },
      preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16,
      }
})