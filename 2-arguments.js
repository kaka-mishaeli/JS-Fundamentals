// Use const to declare the variable holding the arguments
const args = process.argv.slice(2);

// Check the number of arguments and print the correct message
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
