// https://github.com/HowProgrammingWorks/CouplingCohesion/tree/main/JavaScript/1-bad

// https://github.com/HowProgrammingWorks/CouplingCohesion/tree/main/JavaScript/2-good

class Person {
    static async load(id) {
        const sql = 'SELECT Person WHERE id = $1'
        const data = await db.queryRow(sql, [id]);
        const person = new Person();
        // Object.assign(person, data)
        person.name = data.name;
        person.surname = data.surname;
        person.address = data.adress;
        return person;
    }
}
// domain - loader - db
 const loader = (db) => (entity) => {
    const Entity = class {};
    const desc = { value: entity };
    Object.defineProperty(Entity, 'name', desc);
    const sql = `SELECT ${entity} WHERE id = $1`;
    return async (id) => {
        const data = await db.queryRow(sql, [id]);
        return Object.assign(new Entity(), data)
    }
 }

 const load = loader(db);
 const loadPerson = load('Person');
 const person = await loadPerson(101);
 console.log(person)