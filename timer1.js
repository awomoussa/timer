const alarm = ['3', '5', '9', '10', '15'];


let hold = 0
for (const ding of alarm){
setTimeout(() => { 
  process.stdout.write('\x07');
  process.stdout.write(ding + "\n")}, hold += 2000)
}

setTimeout(() => {
  console.log('')}, hold += 2000)

