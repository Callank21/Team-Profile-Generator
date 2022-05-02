const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee('Callan', 201921, 'callankeesling@gmail.com');

    expect(employee.name).toBe('Callan');
    expect(employee.id).toBe(201921);
    expect(employee.email).toBe('callankeesling@gmail.com')
    
});

test('gets employee name', () => {
    const employee = new Employee('Callan', 201921, 'callankeesling@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Callan'));
});

test('gets employee Id', () => {
    const employee = new Employee('Callan', 201921, 'callankeesling@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Callan', 201921, 'callankeesling@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('callankeesling@gmail.com'));
});

test('gets employee Role', () => {
    const employee = new Employee('Callan', 201921, 'callankeesling@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});