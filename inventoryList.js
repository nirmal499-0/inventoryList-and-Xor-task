let inventoryList = [];

function getList() {
  let list = [];
  inventoryList.forEach((e) => list.push(e.name));
  return list;
}

function add(name) {
  if (inventoryList.filter((e) => e.name == name).length <= 0) {
    inventoryList.push({ name });
  }
}

function remove(name) {
  inventoryList = inventoryList.filter((e) => e.name !== name);
}
