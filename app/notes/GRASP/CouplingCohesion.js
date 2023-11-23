// https://github.com/HowProgrammingWorks/CouplingCohesion/tree/main/JavaScript/1-bad

// https://github.com/HowProgrammingWorks/CouplingCohesion/tree/main/JavaScript/2-good

class Person {
    static async load(id) {
        const sql = 'SELECT Person WHERE id = $1'
        const data = await db.queryRow(sql, [id]);
        const person = new Person();
        person.name = data.name;
        person.surname = data.surname;
        person.address = data.adress;
        return person;
    }
}