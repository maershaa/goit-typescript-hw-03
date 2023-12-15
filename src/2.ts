/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

// Класс Employee описывает основные свойства сотрудника.
class Employee {
  // Конструктор принимает общедоступное имя (name), приватное отделение (department) и защищенную заработную плату (salary).
  constructor(public name: string, private department: string, protected salary: number) {}

  // Метод getEmployeeDetails() возвращает строку, содержащую имя, отделение и заработную плату сотрудника.
  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

// Класс Manager наследует функциональность класса Employee.
class Manager extends Employee {
  // Метод getCount() добавляет 10 000 к заработной плате менеджера.
  getCount(): number {
    return this.salary * 10000;
  }

  // Конструктор класса Manager принимает имя, отделение и заработную плату менеджера.
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary); // Вызываем конструктор суперкласса с переданными значениями

    // Используем метод getCount() для корректного вычисления заработной платы менеджера.
    const newSalary = this.getCount();
    // Передаем скорректированную заработную плату в конструктор суперкласса.
    super(name, department, newSalary);
  }
}

// Создаем экземпляр класса Manager для тестирования функциональности.
const manager = new Manager('John Doe', 'Management', 50000);
console.log(manager.getEmployeeDetails()); // Вывод: Name: John Doe, Department: Management, Salary: 60000

// Экспортируем классы, чтобы они были доступны извне.
export {};

