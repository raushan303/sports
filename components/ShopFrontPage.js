import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph, Appbar } from 'react-native-paper';


const styles = StyleSheet.create({
	s_container:{
		marginTop:"8%"
	},
	s_row:{
		marginTop:"3%",
		width:"100%",
		display:"flex",
		flexDirection:"row",
		justifyContent:"space-between"
	},
	s_col:{
		width:"49%",
		height:"100%",
	},
	s_price:{
		fontSize:20,
		marginTop:"5%",
		marginLeft:"35%"
	}
})





export default function ShopFrontPage(props) {
	return(

		<ScrollView style={styles.s_container}>

		<Appbar.Header style={{height:30}}>
			<Appbar.Content style={{marginTop:-30}} title="Title" subtitle="Subtitle" />
			<Appbar.Action  style={{marginTop:-25}} icon="menu" size={35} 
				onPress={()=>{
					if(props.navigation)
						props.navigation.openDrawer();
					else
						alert("hello")
				}} 
			/>
		</Appbar.Header>

	<View style={styles.s_row}>
		<View style={styles.s_col}>
		<Card>
			<Card.Cover source={require("../assets/tshirt1.jpg")} />

			<Card.Content>
				<Paragraph>Veirdo Men's Regular Fit T-Shirt</Paragraph>
				<Paragraph style={styles.s_price}>50$</Paragraph>
			</Card.Content>
		</Card>
		</View>

		<View style={styles.s_col}>
		<Card>
			<Card.Cover source={require("../assets/tshirt2.jpg")} />

			<Card.Content>
				<Paragraph>Wrath Men's Regular Fit T-Shirt</Paragraph>
				<Paragraph style={styles.s_price}>32$</Paragraph>
			</Card.Content>

		</Card>
		</View>
	</View>

	<View style={styles.s_row}>
		<View style={styles.s_col}>
		<Card>
			<Card.Cover source={require("../assets/tshirt3.jpg")} />

			<Card.Content>
				<Paragraph>CHKOKKO Men Gym Tank Tops Sports Sleeveless Vest</Paragraph>
				<Paragraph style={styles.s_price}>50$</Paragraph>
			</Card.Content>
		</Card>
		</View>

		<View style={styles.s_col}>
		<Card>
			<Card.Cover source={require("../assets/tshirt4.jpg")} />

			<Card.Content>
				<Paragraph>TRUEREVO Men's Sports Dry Fit Tank Top Vest for Running & Gym</Paragraph>
				<Paragraph style={styles.s_price}>32$</Paragraph>
			</Card.Content>

		</Card>
		</View>
	</View>

	<View style={[styles.s_row,{marginBottom:20}]}>
		<View style={styles.s_col}>
		<Card>
			<Card.Cover source={require("../assets/tshirt5.jpg")} />

			<Card.Content>
				<Paragraph>Sportsqvest Men's Racerback Black</Paragraph>
				<Paragraph style={styles.s_price}>50$</Paragraph>
			</Card.Content>
		</Card>
		</View>

		<View style={styles.s_col}>
		<Card>
			<Card.Cover source={require("../assets/tshirt6.jpg")} />

			<Card.Content>
				<Paragraph>Dixcy Scott Men's Vest (Pack of 2)</Paragraph>
				<Paragraph style={styles.s_price}>32$</Paragraph>
			</Card.Content>

		</Card>
		</View>
	</View>

		</ScrollView>
	
	);
}