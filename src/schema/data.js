const data=`

type Data {
    prev:Int
    offset:Int
    next:Int
    count:Int
    total:Int
    topics:[Topic]


}
type Topic{
    href:String
    date:String
    label:String
    summary:String
    tages:Int
    products:[Product]
    
}

type Product{
    label:String
    href:String
}
`


module.exports = data;