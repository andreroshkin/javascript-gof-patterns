interface Visitor {
    visit(employee: Employee): void;
}

interface Acceptor {
    accept(visitor: Visitor): void;
}

class Employee implements Acceptor {
    name: string;
    salary: number;
    vacation: number;

    constructor(name: string, salary: number, vacation: number) {
        this.name = name;
        this.salary = salary;
        this.vacation = vacation;
    }

    accept(visitor: Visitor) {
        visitor.visit(this);
    }

    getName() {
        return this.name;
    }

    getSalary() {
        return this.salary;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }

    getVacation() {
        return this.vacation;
    }

    setVacation(vacation: number) {
        this.vacation = vacation;
    }
}

class ExtraSalary implements Visitor {
    visit(employee: Employee) {
        employee.setSalary(employee.getSalary() * 1.1);
    }
}

class ExtraVacation implements Visitor {
    visit(employee: Employee) {
        employee.setVacation(employee.getVacation() + 2);
    }
}

const employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51),
];

const visitorSalary = new ExtraSalary();
const visitorVacation = new ExtraVacation();

for (const employee of employees) {
    employee.accept(visitorSalary);
    employee.accept(visitorVacation);
    console.log(
        `${employee.getName()}: ${employee.getSalary()} and ${employee.getVacation()} vacation days`
    );
}
