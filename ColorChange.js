import React from 'react';


class ColorChange extends React.Component {

    constructor() {
        super();
        this.state = {textColor: 'white'};
    }

    render() {
        return (
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
        );
    }
}