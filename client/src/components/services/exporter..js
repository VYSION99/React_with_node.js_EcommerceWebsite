export const filterArrayById =(arr, targetId) =>{
  return arr.filter((item) => item.id === targetId);
}

// Example usage:
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  // Add more objects as needed
];

export const BaseURL = `localhost:4000`
