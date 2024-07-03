describe('Optional Generic Type', () => {
    class OptionalGeneric<T, S> {
        name: T;
        age: S;

        constructor(name: T, age: S) {
            this.name = name;
            this.age = age;
        }
    }

    it('should support optional generic', () => {
        // karena pada constructor kita sebutkan tipe dari generic nya
        // pada saat membuat object tanpa menyebutkan generic nya
        // maka akan otomatis di deteksi oleh typescript tipe dari genericnya
        const optionalgeneric = new OptionalGeneric('Nurdin', 20); // * sama seperti new Optionalgeneric<string, number>('test', 2);]

        console.log(typeof optionalgeneric.name, ' = ', optionalgeneric.name);
        console.log(typeof optionalgeneric.age, ' = ', optionalgeneric.age);

        expect(typeof optionalgeneric.name).toBe('string');
        expect(typeof optionalgeneric.age).toBe('number');
    });
});
