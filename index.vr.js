import React from 'react';
import ColorChange from  './ColorChange';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View, Model, VrButton, Image
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    render() {
        return (
            <View>

                <VrButton
                    style={{width: 0.7, transform: [{translate: [-10, 0, 0]}, {rotateY: 90}]}}
                    onClick={() => console.log("CLICK")}
                >
                    <Image style={{width: 1, height: 1}}
                           // source={{uri: 'Access-Control-Allow-Origin:https://devforum.ro/uploads/default/original/2X/c/c361aa024aeebdb8cfcebc4281a1ccf19d43f548.jpg'}}
                           inset={[0.2, 0.2, 0.2, 0.2]}
                           insetSize={[0.05, 0.45, 0.55, 0.15]}>
                    </Image>
                </VrButton>

                <Model
                    source={{
                        obj: asset('deskLight.obj'),
                        mtl: asset('deskLight.mtl'),
                    }}
                    style={{
                        transform: [{translate: [5, -2, 2]}, {scale: 0.05}, {rotateY: 60}],
                    }}
                />

                <Pano source={asset('forum.jpg')}/>
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.8,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0, -3]}],
                    }}>
                    high vive
                </Text>
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.8,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [-10, 0, 0]}, {rotateY: 90}],
                    }}>
                    further back
                </Text>
                {/*<ColorChange/>*/}
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
