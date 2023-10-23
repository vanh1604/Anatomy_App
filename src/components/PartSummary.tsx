import { View, Text, StyleSheet, ImageBackground, ImageSourcePropType, Image } from "react-native";
import React from "react";

export interface PartSummaryProps {
  image: ImageSourcePropType,
  title: string,
  summary: string,
  icon: ImageSourcePropType,
}

export default function PartSummary(props: PartSummaryProps) {
  const {image, title, summary, icon} = props;
  return (
    <View style={{
      width: '100%',
      height: 200,
      borderRadius: 10,
      backgroundColor:  '#3D7944',
      flexDirection: 'row',
      marginVertical: 10,
    }}>
      <Image
        source={image}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10
        }}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '55%', marginLeft: 10, marginRight: 5}}>
          <Text style={{color:'white', fontSize: 18, fontWeight: '700', marginTop: 10, marginBottom: 5,}}>{title}</Text>
          <Text style={{color:'white', fontSize: 12}}>{summary}</Text>  
        </View> 
        <ImageBackground 
        source={icon}
        style={{
          width: 10,
          height: 20,
          marginTop: 90,
        }}
      />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({})
