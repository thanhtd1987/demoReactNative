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
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(param)
        })
        let responseJson = await response.json()
        return responseJson
    } catch (error) {
        console.error(`Error: ${error}`)
    }
}

export {getTeaFromServer, insertNewTeaToServer}
