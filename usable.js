//card

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
<Card style={styles.card}>
	
	<Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />

	<Card.Content>
		<Title>Card title</Title>
		<Paragraph>Card content</Paragraph>
	</Card.Content>

	<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
	
	<Card.Actions>
		<Button>Cancel</Button>
		<Button>Ok</Button>
	</Card.Actions>

</Card>
