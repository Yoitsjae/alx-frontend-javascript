namespace Subjects {
  export interface Teacher {
      firstName: string;
      lastName: string;
  }
}

namespace Subjects {
  export class Subject {
      private _teacher: Teacher;

      setTeacher(teacher: Teacher): void {
          this._teacher = teacher;
      }
  }
}

namespace Subjects {
  export interface Teacher {
      experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
      getRequirements(): string {
          return 'Here is the list of requirements for Cpp';
      }

      getAvailableTeacher(): string {
          if (this._teacher.experienceTeachingC) {
              return `Available Teacher: ${this._teacher.firstName}`;
          } else {
              return 'No available teacher';
          }
      }
  }
}

namespace Subjects {
  export interface Teacher {
      experienceTeachingReact?: number;
  }

  export class React extends Subject {
      getRequirements(): string {
          return 'Here is the list of requirements for React';
      }

      getAvailableTeacher(): string {
          if (this._teacher.experienceTeachingReact) {
              return `Available Teacher: ${this._teacher.firstName}`;
          } else {
              return 'No available teacher';
          }
      }
  }
}

namespace Subjects {
  export interface Teacher {
      experienceTeachingJava?: number;
  }

  export class Java extends Subject {
      getRequirements(): string {
          return 'Here is the list of requirements for Java';
      }

      getAvailableTeacher(): string {
          if (this._teacher.experienceTeachingJava) {
              return `Available Teacher: ${this._teacher.firstName}`;
          } else {
              return 'No available teacher';
          }
      }
  }
}

import { Subjects } from './subjects/Teacher';
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';

const cpp: Subjects.Cpp = new Cpp();
cpp.setTeacher({ firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 });
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java: Subjects.Java = new Java();
java.setTeacher({ firstName: 'John', lastName: 'Doe', experienceTeachingJava: 5 });
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react: Subjects.React = new React();
react.setTeacher({ firstName: 'John', lastName: 'Doe', experienceTeachingReact: 3 });
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
