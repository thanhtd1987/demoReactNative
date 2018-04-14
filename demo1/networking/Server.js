import React, {Component} from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllTeas = 'https://my-json-server.typicode.com/thanhtd1987/demoReactNative/db'
async function getTeaFromServer(params) {
    try {
        let response = await fetch(apiGetAllTeas)
        let responseJson = await response.json()
        return responseJson.teas //list of teas
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export {getTeaFromServer}
