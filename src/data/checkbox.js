export const data = [
  {
    name: "Cricket",
    parentId: "Games",
  },
  {
    name: "Bat",
    parentId: "Cricket",
  },
  {
    name: "Ball",
    parentId: "Cricket",
  },
  {
    name: "Stump",
    parentId: "Cricket",
  },
  {
    name: "Handle",
    parentId: "Bat",
  },
  {
    name: "Body",
    parentId: "Bat",
  },
  {
    name: "Mango",
    parentId: "Fruits",
  },
  {
    name: "Apple",
    parentId: "Fruits",
  },
  {
    name: "Orange",
    parentId: "Fruits",
  },
  {
    name: "Hockey",
    parentId: "Games",
  },
  {
    name: "Kiwi",
    parentId: "Fruits",
  },
  {
    name: "Table",
    parentId: "Furniture",
  },
  {
    name: "Games",
    parentId: null,
  },
  {
    name: "Fruits",
    parentId: null,
  },
  {
    name: "Furniture",
    parentId: null,
  },
  {
    name: "Sports",
    parentId: null,
  },
  {
    name: "Tennis",
    parentId: "Sports",
  },
  
  
];

export const tree = () => {
  let map = {};
  data.forEach((element, ind) => {
    map[element.name] = ind;
    element.children = [];
  });

  data.forEach((element, ind, array) => {
    // console.log("Index",ind)
    const node = element;
    if (node.parentId !== null && map.hasOwnProperty(node.parentId)) {
      array[map[node.parentId]].children.push(node);
    }
  });
  // console.log("data",data)
  const result = data.filter((item) => item.parentId === null);
  // console.log("Result",JSON.stringify(result))
  return result;
};
