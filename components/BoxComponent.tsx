// src/components/BoxSimple.jsx
import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
const BoxComponent = ({ children} : { children : any}) => (
    <View style={styles.boxSimple}>
        {children}
    </View>
)
const styles = StyleSheet.create({
    boxSimple: {
        backgroundColor: '#FFE0AA',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#000',
        padding: 10,
        margin: 20,
        color: '#D48149',
    },
})
BoxComponent.propTypes = {
    children: PropTypes.node.isRequired,
}
export default BoxComponent