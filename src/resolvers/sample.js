const rp=require('request-promise')
const url="https://www.ibm.com/support/knowledgecenter/v1/search?query=graphql&intitle=true&intext=true&offset=0&limit=10&dedup=true&fallback=false"

const options={

    uri:url,
    json:true

}

let getdata=async () => { 

    let data=await rp(options)
    return data;
    
}
 module.exports = { 
     getdata:getdata
 }
