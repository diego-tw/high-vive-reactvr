import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View, Model,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    render() {
        return (
            <View>

                <Model
                    source={{
                        obj: asset('deskLight.obj'),
                        mtl: asset('deskLight.mtl'),
                    }}
                    style={{
                        transform: [{translate: [5,-2,2]},  {scale: 0.05}, {rotateY:60}],
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
