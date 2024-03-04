export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDeptIndex = 0;
  let currentEmpIndex = 0;

  return {
      next() {
          const employees = departments[currentDeptIndex];
          if (currentEmpIndex >= employees.length) {
              currentEmpIndex = 0;
              currentDeptIndex++;
          }
          if (currentDeptIndex >= departments.length) {
              return { done: true };
          }
          return { value: employees[currentEmpIndex++], done: false };
      },
      [Symbol.iterator]() {
          return this;
      }
  };
}
