import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import { Avatar, Card, Title, Paragraph, Appbar } from 'react-native-paper';
import Button from 'apsl-react-native-button';

import { Data } from '../../shared/TshirtData';

const styles = StyleSheet.create({
	s_container:{
		marginTop:"8%"
	},
	s_row:{
		width:"100%",
		display:"flex",
		flexDirection:"row",
		justifyContent:"space-between",
		flexWrap:"wrap",
		marginBottom:20
	},
	s_col:{
		marginTop:"3%",
		width:"49%",
		height:290,
		borderWidth:0,
	},
	s_price:{
		fontSize:20,
		marginTop:"5%",
		textAlign:"center"
	}
})

function ItemCard(props){

	var ItemName = props.item.Paragraph;

	if(ItemName.length>30){
		ItemName = ItemName.substring(0,30)+"....";
	}		

	return(
	<Card onPress={()=>{props.navigation.navigate("Details",{item:props.item})}} style={styles.s_col}>
		<Card.Cover source={props.item.img} />
		<Card.Content>
			<Paragraph>{ItemName}</Paragraph>
			<Paragraph style={styles.s_price}>{props.item.price}$</Paragraph>
		</Card.Content>
	</Card>
	);
}

export default function ShopFrontPage(props) {
	
	return(

		<ScrollView style={styles.s_container}>

		<Appbar.Header style={{height:30}}>
			
			<Appbar.Action  style={{marginTop:-25}} icon="menu" size={30} 
				onPress={()=>{props.navigation.openDrawer();}} 
			/>
			<Appbar.Content style={{marginTop:-30}} title="Item" subtitle="Special Offer" />
			<Appbar.Action  style={{marginTop:-25}} icon="magnify" size={30} 
                        onPress={()=>{props.navigation.navigate("Search");}} 
                  />
			<Appbar.Action  style={{marginTop:-25}} icon="cart" size={30} 
                        onPress={()=>{props.navigation.navigate("Cart");}} 
                  />
		</Appbar.Header>

		<View style={styles.s_row}>
		{
			Data.map((item,index)=>{
				return( <ItemCard key={index} {...props} item={item}/>);
			})
		}
		</View>
	
		</ScrollView>
	
	);
}