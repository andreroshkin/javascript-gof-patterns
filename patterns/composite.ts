class Employee {
    private name: string;
    private salary: number;
    private dept: string;
    private subordinates: Employee[];

    constructor(name: string, dept: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.dept = dept;
        this.subordinates = [];
    }

    add(employee: Employee) {
        this.subordinates.push(employee);
    }

    remove(employee: Employee) {
        const index = this.subordinates.indexOf(employee);
        this.subordinates.splice(index, 1);
    }

    getSubordinates() {
        return this.subordinates;
    }  
}

const CEO = new Employee("John", "CEO", 30000);

const headSales = new Employee("Robert", "Head Sales", 20000);

const headMarketing = new Employee("Michel", "Head Marketing", 20000);

const clerk1 = new Employee("Laura", "Marketing", 10000);
const clerk2 = new Employee("Bob", "Marketing", 10000);

const salesExecutive1 = new Employee("Richard", "Sales", 10000);
const salesExecutive2 = new Employee("Rob", "Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

console.log(CEO);
for (const headEmployee of CEO.getSubordinates()) {
    console.log(headEmployee);
    for (const employee of headEmployee.getSubordinates()) {
        console.log(employee);
    }
}
