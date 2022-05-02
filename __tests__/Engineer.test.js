const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer('https://github.com/Callank21');

    expect(engineer.github).toBe('https://github.com/Callank21');
});

test('gets engineer github', () => {
    const engineer = new Engineer('https://github.com/Callank21');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(`https://github.com/`));
});

test('get engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});