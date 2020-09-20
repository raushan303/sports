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