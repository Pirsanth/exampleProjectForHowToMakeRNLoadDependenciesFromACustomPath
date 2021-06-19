import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ImageWithProgressBar from 'react-native-image-with-progress-bar';

const App = () => {

 const anImageUrlToALargeImage = "https://wallpaperaccess.com/full/251618.jpg"

 return (
   <SafeAreaView style={{
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }}>
     <ImageWithProgressBar 
         mode="bar"
         barColor="red"
         trackColor="black"

         style={{ 
             width: 250, 
             height: 250,
             borderWidth: 0.5,
         }}
         
         imageUrl={anImageUrlToALargeImage}
         
         onLoadError={(error)=> {
           console.log("An error occured while loading the image");
           console.log(error);
         }}
   />        
   </SafeAreaView> 
 );
}
export default App;
