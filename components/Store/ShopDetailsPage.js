import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, AsyncStorage} from 'react-native';
import Button from 'apsl-react-native-button';
import { useIsFocused } from "@react-navigation/native";

import Unorderedlist from 'react-native-unordered-list';
import InputSpinner from "react-native-input-spinner";
import Swiper from 'react-native-swiper'

import { Avatar, Card, Title, Paragraph, Appbar} from 'react-native-paper';

import { Data } from '../../shared/TshirtData';
import { set } from 'react-native-reanimated';

function RelatedItem(props){

      var ItemName= props.item.Paragraph;

      if(ItemName.length>70){
            ItemName = ItemName.substring(0,65)+"....";
      }

      return(
		<Card onPress={()=>{props.navigation.navigate("Details",{item:props.item})}} style={styles.sI_related_item}>
			<Card.Cover style={styles.sI_related_image} source={props.item.img} />

			<Card.Content>
                        <Paragraph>{ItemName}</Paragraph>
                        <Paragraph style={{textAlign:"center",fontSize:25,marginTop:5,lineHeight:30}}>{props.item.price}$</Paragraph>
			</Card.Content>
		</Card>
      );
}


export default function ShopDetailsPage(props){
      
      const [selected,setSelected] = useState(-1);
      const [size,setSize] = useState('');
      const [quantity,setQuantity] = useState(1);

      const [Added,setAdded] = useState(false); 

      const isFocused = useIsFocused();

      var ItemDetails = props.route.params.item;
      

      useEffect(() => {
            const isAdded=async()=>{
                  var tmp,found=0;
                  tmp = await AsyncStorage.getItem('Cart');
                  
                  if(tmp===null){
                        tmp=[];
                        await AsyncStorage.setItem('Cart',JSON.stringify(tmp));
                  }

                  tmp=JSON.parse(tmp);

                  for(var i in tmp){
                        if(tmp[i]._id === ItemDetails._id && tmp[i].selectedSize===size){
                              found=1;
                              setAdded(true);
                              break;
                        }
                  }  
                  if(!found)
                        setAdded(false)
            }
            isAdded();
      },[isFocused,ItemDetails,size])
      

      const AddToCart = async ()=> {

            if(size===''){
                  alert('Select size pls');
            }
            else{
                  if(Added){
                        props.navigation.navigate("Cart");
                  }
                  else{
                        var tmp
                        tmp=await AsyncStorage.getItem('Cart');
                        tmp=JSON.parse(tmp);
                        ItemDetails.selectedSize=size;
                        ItemDetails.selectedQuantity=quantity;
                        tmp=[...tmp,ItemDetails];
                        await AsyncStorage.setItem('Cart',JSON.stringify(tmp));
                        setAdded(true)
                  }
            }
      }
      
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

                  <Swiper showsButtons={false}
                        style={{marginTop:30,height:400}}
                        dotStyle={{marginLeft:10,marginRight:10,marginBottom:12}}
                        activeDotStyle={{marginLeft:10,marginRight:10,marginBottom:12}}
                  >
                        {
                              ItemDetails.img_collection.map((img,index)=>{
                                    return(
                                          <View key={index.toString()} style={styles.sI_slider}>
                                                <Card.Cover style={styles.sI_image} source={img} />
                                          </View>
                                    );
                              })
                        }
                  </Swiper>
                  
                  <View style={{backgroundColor:"#f5f6fa"}}>
                  <Card.Content style={styles.sI_content}>
                  <Paragraph style={styles.sI_paragraph}>{ItemDetails.Paragraph}</Paragraph>
                  <Paragraph style={styles.sI_price}>{ItemDetails.price}$</Paragraph>
                        <Title>Select Size</Title>
			</Card.Content>

                  <Card.Content style={styles.sI_content_button}>
                  {
                        ItemDetails.size.map((size,index)=>{
                              return(
                                    <Button textStyle={selected===index?{color:"white"}:{color:"blue"}} onPress={()=>{setSelected(index);setSize(size);}} key={index.toString()} style={[styles.sI_select_size,(selected===index?styles.sI_selected_button:'')]}>{size}</Button>
                              );
                        })
                  }
                  </Card.Content>
                  </View>

                  <Title style={{marginLeft:155,marginTop:50}}>Quantity</Title>

                  <InputSpinner
                        min={1}
                        max={ItemDetails.quantity}
                        step={1}
                        value={1}
                        style={{marginLeft:100,marginTop:10,marginBottom:25,width:180}}
                        showBorder={true}
                        rounded={false}
                        color={"#58B19F"}
                        onChange={(num) => {
                              setQuantity(num);
                        }}
                  />

                  <Card.Actions>
		            <Button onPress={()=>{AddToCart();}} textStyle={{color:"white"}} style={styles.sI_addCart}>{Added?"Go To Cart":"Add To Cart"}</Button>
	            </Card.Actions>

                  <Card.Content style={styles.sI_details}>
                        <Title style={styles.sI_prod_title1}>Product Details</Title>
                        <Paragraph style={styles.sI_prod_paragraph1}>{ItemDetails.ProductDetails}</Paragraph>
                        
                        <Title style={styles.sI_prod_title2}>Details</Title>
                        <View style={styles.sI_prod_paragraph2}>
                        {

                        ItemDetails.Details.map((detail,index)=>{
                              return(
                                    <Unorderedlist key={index.toString()}>
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
                        {
                              Data.map((item,index)=>{
                                    if(item._id===ItemDetails._id){
                                          return (<View key={index.toString()}></View>)
                                    }
                                    else{
                                          return (<RelatedItem key={index.toString()} {...props} item={item}/>)
                                    }
                              })
                        }
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
		marginTop:"5%",
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

