const rp1=require('request-promise')
const url1="https://www.ibm.com/support/knowledgecenter/v1/search?query=websphere&intitle=true&intext=true&offset=0&limit=10&dedup=true&fallback=false"

const options={

    uri:url1,
    json:true

}

let getdata=async () => { 

    let data1=await rp1(options)
    return data1;
    
}
 module.exports = { 
     getdata:getdata
 }