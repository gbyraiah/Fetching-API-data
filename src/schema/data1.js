const data1=`

type Data1 {
    prev:Int
    offset:Int
    next:Int
    count:Int
    total:Int
    topics:[Topic1]


}
type Topic1{
    href:String
    date:String
    label:String
    summary:String
    tages:Int
    products:[Product1]
    
}

type Product1{
    label:String
    href:String
}
`


module.exports = data1;