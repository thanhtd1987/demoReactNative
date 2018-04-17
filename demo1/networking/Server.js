import React, {Component} from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';

const apiGetAllTeas = 'https://my-json-server.typicode.com/thanhtd1987/demoReactNative/teas'
const apiInsertTea = 'https://my-json-server.typicode.com/thanhtd1987/demoReactNative/teas'
const apiEditTea = 'https://my-json-server.typicode.com/thanhtd1987/demoReactNative/teas/'

async function getTeaFromServer(params) {
    try {
        let response = await fetch(apiGetAllTeas)
        let responseJson = await response.json()
        return responseJson //list of teas
    } catch (error) {
        console.error(`GET error: ${error}`)
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
        console.error(`POST Error: ${error}`)
    }
}

async function editTeaInServer(param) {
  let api = apiEditTea + param.id.toString()
  try {
    let response = await fetch(api, {
      method: 'PUT',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(param)
    })
    let responseJson = await response.json()
    return responseJson
  } catch (e) {
    console.log(`PUT Error: ${e}`);
  }
}

async function deleteTeaInServer(id) {
    let api = apiDeleteTea + id
    try {
        let response = await fetch(api, {
            method: 'DELETE'
        })
        // let responseJson = await response.json()
        alert(`delete ${response}`)
        return responseJson
    } catch (error) {
        console.log(`DELETE error: ${error}`)
    }
}

export {getTeaFromServer, insertNewTeaToServer, editTeaInServer, deleteTeaInServer}
