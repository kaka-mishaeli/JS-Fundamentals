const size = Number(process.argv[2]);

if (Number.isInteger(size)) {
  const line = 'X'.repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
} else {
  console.log("Missing size");
}
