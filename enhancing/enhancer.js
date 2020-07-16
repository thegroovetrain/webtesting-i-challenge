module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { 
    ...item, 
    enhancement: Math.min(20, item.enhancement + 1)
  };
}

function fail(item) {
  return { 
    ...item,
    durability: (item.enhancement < 15) ? (item.durability - 5) : (item.durability - 10),
    enhancement: (item.enhancement > 16) ? (item.enhancement - 1) : (item.enhancement)
  };
}

function repair(item) {
  return { 
    ...item, 
    durability: 100 
  };
}

function get(item) {
  return { 
    ...item,
    name: (item.enhancement === 0) ? item.name : (`[+${item.enhancement}] ${item.name}`) 
  };
}
