import React, {Component} from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetAllTeas = 'https://my-json-server.typicode.com/thanhtd1987/demoReactNative/teas'
const apiInsertTea = 'https://my-json-server.typicode.com/thanhtd1987/demoReactNative/teas'

async function getTeaFromServer(params) {
    try {
        let response = await fetch(apiGetAllTeas)
        let responseJson = await response.json()
        return responseJson //list of teas
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

async function insertNewTeaToServer (param) {
    try {
        let response = await fetch(apiInsertTea, {
            merthod: 'POST',
            headers: {
                'Accept':'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                name:'king of tea',
                description: 'tea with many flavors',
                image: '',
                id: param
            })
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export {getTeaFromServer}
