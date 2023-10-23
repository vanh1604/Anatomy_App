import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Part = () => {
    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/tiger-part.png')}
                style={{ width: '100%', height: 187, position: 'absolute' }}
            />
            <View style={{ marginTop: 165, backgroundColor: 'white', height: 605, borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
                <View
                    style={{ width: '90%', marginHorizontal: '5%' }}
                >
                    <Text style={{ fontSize: 18, color: '#3D7944', fontWeight: '700', marginVertical: 15 }}>Bộ phận 1</Text>
                    <Text style={{marginBottom: 15, fontSize: 14, fontWeight: '600',}}>Đặc điểm 1: Nội dung</Text>
                    <Text style={{marginBottom: 15, fontSize: 14, fontWeight: '600',}}>Đặc điểm 2: Nội dung</Text>
                    <Text style={{marginBottom: 15, fontSize: 14, fontWeight: '600',}}>Đặc điểm 3: Nội dung</Text>
                    <Text style={{marginBottom: 15, fontSize: 14, fontWeight: '600',}}>Note:
                        <Text>
                            Note: Tigers also have a prominent white spot on the back of their ears, surrounded by black.
                            These spots are thought to play an important role in communication between individuals.
                        </Text>
                    </Text>
                </View>
                <ImageBackground
                    source={require('../../assets/images/footer-part.png')}
                    style={{ width: '100%', height: 242, position:'absolute', bottom: 0}}
                />
            </View>
        </View>
    )
}

export default Part