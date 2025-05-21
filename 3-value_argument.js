const args = process.argv.slice(2);

// Check if the first argument exists
if (args[0] !== undefined) {
  console.log(args[0]);
} else {
  console.log("No argument");
}
