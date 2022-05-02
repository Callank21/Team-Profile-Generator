const Manager = require('../lib/Manager');

test('create an manager object', () => {
    const manager = new Manager(1998);

    expect(manager.officeNumber).toBe(1998);
});

test('gets manager office number', () => {
    const manager = new Manager(1998);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test('get manager role', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});