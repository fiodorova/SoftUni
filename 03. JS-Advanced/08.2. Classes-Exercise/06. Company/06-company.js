class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (
      name == "" ||
      name == undefined ||
      name == null ||
      salary == "" ||
      salary == undefined ||
      salary == null ||
      position == "" ||
      position == undefined ||
      position == null ||
      department == "" ||
      department == undefined ||
      department == null
    ) {
      throw new Error("Invalid input!");
    }

    if (salary < 0) {
      throw new Error("Invalid input!");
    }

    let newEmployee = {
      name,
      salary,
      position,
    };

    if (!this.departments[department]) {
      this.departments[department] = [];
    }
    this.departments[department].push(newEmployee);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let maxSalary = 0;
    let bestDepartment = "";

    Object.entries(this.departments).forEach(([key, value]) => {
      let salary = 0;
      value.forEach((v) => {
        // console.log(v.salary);
        salary += v.salary;
      });

      salary = salary / value.length;
      if (salary > maxSalary) {
        bestDepartment = key;
        maxSalary = salary;
      }
    });

    let sorted = Object.values(this.departments[bestDepartment]).sort(
      (a, b) => b.salary - a.salary || a.name.localeCompare(b.name)
    );
    let result = [];
    sorted.forEach((el) => {
      let res = `${el.name} ${el.salary} ${el.position}`;
      result.push(res);
    });

    return [
      `Best Department is: ${bestDepartment}`,
      `Average salary: ${maxSalary.toFixed(2)}`,
      result.join("\n"),
    ].join("\n");
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
//console.log(c);
console.log(c.bestDepartment());
c.bestDepartment();
