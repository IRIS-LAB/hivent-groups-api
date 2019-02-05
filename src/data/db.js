import Firestore from '@google-cloud/firestore'

 export const db = new Firestore({
  projectId: 'hivent-groups-api', 
  keyFilename: 'firestore/hivent-groups-api-c99293719063.json'
})