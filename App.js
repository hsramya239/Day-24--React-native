import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={{ width: 500, height: 50, backgroundColor: 'red', marginTop: 20 }}>
      <Text>Header</Text>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={{ width: 500, height: 100, backgroundColor: 'red' }}>
      <Text>This is the Footer</Text>
    </View>
  );
};

const herolist = [
  { title: 'Ironman', poster: require('./assets/images/images/ironman.jpg') },
  { title: 'Batman', poster: require('./assets/images/images/batman.jpg') },
  { title: 'Superman', poster: require('./assets/images/images/superman.jpg') },
  { title: 'Spiderman', poster: require('./assets/images/images/spiderman.jpg') },
  { title: 'thor', poster: require('./assets/images/images/thor.jpg') },
];

const App = () => {
  const Images = () => {
    const Images = [];
    for (let index = 0; index < herolist.length; index += 2) {
      Images.push(
        <View key={index / 2} style={{ flexDirection: 'row', justifyContent: 'space-between',gap:10, marginBottom: 20 }}>
          {herolist.slice(index, index + 2).map((item, idx) => (
            <View key={idx} style={{ alignItems: 'center', position: 'relative' }}>
              <Image source={item.poster} style={{ width: 200, height: 300, borderRadius: 10, marginTop: 40 }} />
              <Text style={{ position: 'absolute', bottom: 5, left: 0, right: 0, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      );
    }
    return Images;
  };

  return (
    <SafeAreaView>
      <Header/>
      <ScrollView>
        {Images()}
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

export default App;
