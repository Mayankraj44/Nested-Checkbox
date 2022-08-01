const expectedsolution=[
    {
        name: "0-0",
        parentId: null,children:[{
            name:"0-0-0",
            children:[{
                name:"0-0-0-0",
                children:[]
            },{
                name:"0-0-0-1",
                children:[]
            },{
                name:"0-0-0-2",
                children:[]
            }]
        },{
            name:"0-0-2",
            children:[]
        }]
    }, {
        name: "0-1",
        parentId: null,children:[{
            name:"0-1-0",
            children:[]
        }]
    }, {
        name: "0-2",
        parentId: null,children:[]
    },
]

const data=[
    {
        name:"sports",
        parentId:null
    },
    {
        name:"sachin",
        parentId:"cricket"
    },
    
    {
        name:"cricket",
        parentId:"sports"
    }
]


export const tree=()=>{
let map={};
    data.forEach((element,ind) => {
    map[element.name]=ind;
    element.children=[]
});
console.log("map",map)


data.forEach((element,ind,array)=>{
    const node=element
    if(node.parentId){
        array[map[node.parentId]].children.push(node)
    }
})
console.log("data",data)
const result=data.filter(item=>item.parentId===null)
console.log("Result",result)

}