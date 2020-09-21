import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Button from 'apsl-react-native-button';

import Unorderedlist from 'react-native-unordered-list';
import InputSpinner from "react-native-input-spinner";

import { Avatar, Card, Title, Paragraph, Appbar} from 'react-native-paper';

const size_array=['S','XS','L','XL','M','L','T'];

const details=[
      "Regular fit is wider at the body, with a straight silhouette",
      "Ribbed V-Neck",
      "Short sleeves",
      "100% recycled polyester interlock",
      "Sweat-wicking Climalite fabric",
      "Real Madrid crest"
]

function RelatedItem(props){
      return(
		<Card onPress={()=>{props.navigation.navigate("Details")}} style={styles.sI_related_item}>
			<Card.Cover style={styles.sI_related_image} source={props.img} />

			<Card.Content>
				<Paragraph>CHKOKKO Men Gym Tank Tops Sports Sleeveless Vest</Paragraph>
				<Paragraph style={{marginLeft:100,fontSize:25,marginTop:5,lineHeight:30}}>50$</Paragraph>
			</Card.Content>
		</Card>
      );
}


export default function ShopDetailsPage(props){
      
      const [selected,setSelected]=useState(-1); 

      return(
            <ScrollView style={styles.sI_container} showsVerticalScrollIndicator={false}>

                  <Appbar.Header style={{height:30}}>
                        <Appbar.Action  style={{marginTop:-25}} icon="arrow-left" size={30} 
                              onPress={()=>{props.navigation.goBack();}} 
                        />
                        <Appbar.Content style={{marginTop:-30}} title="T-shirt" subtitle="Details" />
                        <Appbar.Action  style={{marginTop:-25}} icon="magnify" size={30} 
                              onPress={()=>{props.navigation.navigate("Search");}} 
                        />
                        <Appbar.Action  style={{marginTop:-25}} icon="cart" size={30} 
                              onPress={()=>{props.navigation.navigate("Cart");}} 
                        />
                  </Appbar.Header>
                 
                  <Card>

                  <ScrollView 
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        pagingEnabled
                        style={{marginTop:30}}
                  >
                        <View style={styles.sI_slider}>
			            <Card.Cover style={styles.sI_image} source={require("../assets/tshirt1.jpg")} />
			      </View>
                        <View style={styles.sI_slider}>
                              <Card.Cover style={styles.sI_image} source={require("../assets/tshirt1.jpg")} />
			      </View>
                        <View style={styles.sI_slider}>
                              <Card.Cover style={styles.sI_image} source={require("../assets/tshirt1.jpg")} />
                        </View>
                  </ScrollView>
                  
                  <View style={{backgroundColor:"#f5f6fa",marginTop:50}}>
                  <Card.Content style={styles.sI_content}>
				<Paragraph style={styles.sI_paragraph}>fitternity Marvel Strength Cotton Tshirt for Men - Official Disney Marvel Merchandise - Round Collar - Half Sleeves - White Colour</Paragraph>
				<Paragraph style={styles.sI_price}>50$</Paragraph>
                        <Title>Select Size</Title>
			</Card.Content>

                  <Card.Content style={styles.sI_content_button}>
                  {
                        size_array.map((size,index)=>{
                              return(
                                    <Button textStyle={selected===index?{color:"white"}:{color:"blue"}} onPress={()=>{setSelected(index)}} key={index} style={[styles.sI_select_size,(selected===index?styles.sI_selected_button:'')]}>{size}</Button>
                              );
                        })
                  }
                  </Card.Content>
                  </View>

                  <Title style={{marginLeft:155,marginTop:50}}>Quantity</Title>

                  <InputSpinner
                        min={1}
                        step={1}
                        value={1}
                        style={{marginLeft:100,marginTop:10,marginBottom:25,width:180}}
                        showBorder={true}
                        rounded={false}
                        color={"#58B19F"}
                        onChange={(num) => {
                              console.log(num);
                        }}
                  />

                  <Card.Actions>
		            <Button onPress={()=>{props.navigation.navigate('Cart')}} textStyle={{color:"white"}} style={styles.sI_addCart}>Add To Cart</Button>
	            </Card.Actions>

                  <Card.Content style={styles.sI_details}>
                        <Title style={styles.sI_prod_title1}>Product Details</Title>
                        <Paragraph style={styles.sI_prod_paragraph1}>As the stadium fills, the buzz cascades down onto the Bernabéu pitch. But Real Madrid's superstars only have their minds on the ninety minutes ahead of them. Soft and moisture-absorbing, this adidas pre-match jersey keeps them dry and confident throughout those last-minute preparations. Its lightweight build will ensure it's a mainstay in your kit bag.</Paragraph>
                        <Title style={styles.sI_prod_title2}>Details</Title>
                        
                        <View style={styles.sI_prod_paragraph2}>
                        {

                        details.map((detail,index)=>{
                              return(
                                    <Unorderedlist key={index}>
                                    <Paragraph>
                                          {detail}  
                                    </Paragraph>
                                    </Unorderedlist>
                              );
                        })
                             
                        }
                        </View>
                  </Card.Content>

		      </Card>

                  <View style={styles.sI_related_item_container}>

                        <Title style={{textAlign:"center",marginTop:40,fontSize:30}}>Finish The Look</Title>

                  <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop:40}}
                  >
                        <RelatedItem {...props} img={require("../assets/tshirt1.jpg")}/>
                        <RelatedItem {...props} img={require("../assets/tshirt2.jpg")}/>
                        <RelatedItem {...props} img={require("../assets/tshirt3.jpg")}/>
                        <RelatedItem {...props} img={require("../assets/tshirt4.jpg")}/>
                        <RelatedItem {...props} img={require("../assets/tshirt5.jpg")}/>
                        <RelatedItem {...props} img={require("../assets/tshirt6.jpg")}/>

                  </ScrollView>

                  </View>
                 
            </ScrollView>
      );
}



const styles = StyleSheet.create({
	sI_container:{
            marginTop:"8%",
            width:"100%"
	},
	sI_row:{
		marginTop:"3%",
            width:"100%"
      },
      sI_slider:{
            width:390,
            marginLeft:1,  
      },
      sI_image:{
            height:320,
            width:330,
            marginLeft:29
      },
      sI_content:{
            marginTop:"10%",    
      },
      sI_content_button:{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            marginBottom:50
      },
      sI_paragraph:{
            fontSize:20,
            width:"100%",
            lineHeight:25,
            letterSpacing:0,
            fontWeight:"bold"
      },
	sI_price:{
		fontSize:30,
		marginTop:"8%",
            marginLeft:"43%",
            fontWeight:"400",
            lineHeight:40
      },
      sI_select_size:{
            height:50,
            width:50,
            borderRadius:50,
            borderColor:"#686de0",
            borderWidth:1,
            justifyContent:"center",
            marginLeft:10,
            marginTop:"5%",
      },
      sI_selected_button:{
            backgroundColor:"blue",
      },
      sI_addCart:{
            width:"90%",
            marginLeft:"5%",
            marginTop:"5%",
            borderRadius:30,
            backgroundColor:"#58B19F",
            borderWidth:0,
            marginBottom:80
      },
      sI_details:{
            backgroundColor:"#CAD3C8",
            width:"100%",
      },
      sI_prod_paragraph1:{
            marginTop:"5%",
            fontSize:18
      },
      sI_prod_paragraph2:{
            marginTop:"2%",
            marginBottom:"10%"
      },
      sI_prod_title1:{
            marginTop:"10%"
      },
      sI_prod_title2:{
            marginTop:"5%"
      },
      sI_related_item_container:{
            height:500,
            marginBottom:40
      },
      sI_related_item:{
            width:250,
            height:400,
            marginLeft:20,
      },
      sI_related_image:{
            height:300,
      }
      
})
