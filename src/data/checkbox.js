export const data = [
   
    {
        name: "0-0-0", 
        parentId: "0-0",
    }, {
        name: "0-0-0-0", 
        parentId: "0-0-0",
    }, {
        name: "0-0-0-1", 
        parentId: "0-0-0",
    }, {
        name: "0-0-0-2", 
        parentId: "0-0-0",
    }, {
        name: "0-0-1-0",
        parentId: "0-0-1",
    }, {
        name: "0-0-1-1",
        parentId: "0-0-1",
    }, {
        name: "0-0-1-2",
        parentId: "0-0-1",
    }, {
        name: "0-0-2", 
        parentId: "0-0",
    }, {
        name: "0-1-0", 
        parentId: "0-1",
    }, 
    {
        name: "0-0", 
        parentId: null
    }, {
        name: "0-1", 
        parentId: null,
    }, {
        name: "0-2", 
        parentId: null,
    },
    
]

export const tree=()=>{
    let map={};
        data.forEach((element,ind) => {
        map[element.name]=ind;
        element.children=[]
    });
    console.log("map",map)
    console.log("Data",data)
    
    
    data.forEach((element,ind,array)=>{
        console.log("Index",ind)
        const node=element
        if(node.parentId !== null && map.hasOwnProperty(node.parentId)){
            array[map[node.parentId]].children.push(node)
        }
    })
    console.log("data",data)
    const result=data.filter(item=>item.parentId===null)
    console.log("Result",JSON.stringify(result))
    return result
    }