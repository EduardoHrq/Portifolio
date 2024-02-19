import axios from "axios";
import * as Realm from 'realm-web'

const app = new Realm.App({id: 'data-ufowq'})

async function user() {
  const credentials = Realm.Credentials.emailPassword('eduardohrq.silva06@gmail.com', 'apiduduport')
  
  const user = await app.logIn(credentials)
  
  return 'Bearer ' + user.accessToken
}



export const api = axios.create({
  baseURL: "https://sa-east-1.aws.data.mongodb-api.com/app/data-ufowq/endpoint/data/v1/action/",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': await user().then(),
  },
})
