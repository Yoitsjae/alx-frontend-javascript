export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var
  let task2 = true; // Use let instead of var

  if (trueOrFalse) {
    task = true; // Update the existing task variable
    task2 = false; // Update the existing task2 variable
  }

  return [task, task2];
}
