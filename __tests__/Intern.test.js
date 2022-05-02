const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('UCR');

    expect(intern.school).toBe('UCR');
});

test('gets intern school', () => {
    const intern = new Intern('UCR');

    expect(intern.getSchool()).toEqual(expect.stringContaining(`UCR`));
});

test('get intern role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});