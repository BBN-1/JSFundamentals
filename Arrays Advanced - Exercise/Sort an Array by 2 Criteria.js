function criteria(arr) {
  let array = arr;
  array.sort((a, b) => 
   a.length - b.length || a.localeCompare(b));

  console.log(array.join("\n"));
}
