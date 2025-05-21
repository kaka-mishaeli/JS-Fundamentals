// Get the number of arguments passed (excluding the first two default args)
const args = process.argv;

// Determine and print the appropriate message
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
