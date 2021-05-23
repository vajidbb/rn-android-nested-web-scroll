import React from 'react';
import {Text,View, VirtualizedList, StyleSheet, FlatList, ScrollView } from 'react-native';
import WebView from 'react-native-webview';

const DATA = [
	{
		id:1,
		url:'https://www.instagram.com'
  	},
  	{
    	id:2,
    	url:'https://www.google.com'
  	},
  	{
    	id:3,
    	url:'https://www.github.com'
 	}
];

const ITEM_HEIGHT = 300;

const getItem = (data, index) => DATA[index]

const getItemCount = (data) => DATA.length;

const Item = ({ uri }) => (
	<View style={styles.item}>
		<WebView
			nestedScrollEnabled
			style={{height:ITEM_HEIGHT}}
			source={{uri}}
		/>
		{/* <ScrollView nestedScrollEnabled style={{height:ITEM_HEIGHT, backgroundColor:'red'}}>
			{new Array(50).fill(1).map((_,i) => <Text key={i.toString()}>{i}</Text>)}	
		</ScrollView> */}
	</View>

);

const App = () => {

	// return (
	// 	<View style={styles.container}>
	// 		<ScrollView nestedScrollEnabled>
	// 			{DATA.map(d=> <Item uri={d.url} key={d.url}/>)}
	// 		</ScrollView>
	// 	</View>
	// )

	// return (
	// 	<View style={styles.container}>
	// 		<FlatList
	// 			data={DATA}
	// 			nestedScrollEnabled
	// 			renderItem={({item}) => <Item uri={item.url}/>}
	// 			keyExtractor={item=>item.url}
	// 		/>
	// 	</View>
	// )

  	return (
		<View style={styles.container}>
			<VirtualizedList
				data={DATA}
				initialNumToRender={3}
				renderItem={( {item}) => <Item uri={item.url} />}
				keyExtractor={item => item.id}
				getItemCount={getItemCount}
				getItem={getItem}
      		/>
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
		padding:10,
		overflow:'hidden',
		backgroundColor:'cyan',
	},
	item:{
		margin:10,
	}

});

export default App;