describe('Generic Function', () => {
    it('should support typescript generic function', () => {
        /** membuat generic menggunakan tanda <> dan tipe di dalamnya
         * misalnya pada function <TipeGeneric>(parameter: TipeGeneric) => {}        */
        const sayHello = <T>(name: T) => {
            console.log(name);
        };

        /**
         * Cara memanggilnya gunakan nama function diikuti dengan generic yang dapat menerima tipe
         * misal sayHello<string>('Parameter');
         * jadi tipe datanya dapat menjadi dinamis
         */

        sayHello<string>('Nurdin'); // * dapat bertipe string
        sayHello<number>(2); // * dapat bertipe number
    });

    it('should support multiple generic function type', () => {
        const sayhello = <T, S>(name: T, age: S) => {
            console.log(`Hello my name is ${name} and i'm ${age} years old`);
        };
        const letsIntroduce = <T, S, X>(name: T, age: S, isSingle: X) => {
            console.log(
                `My name is ${name}, my age is ${age} and i'm single is ${isSingle}`
            );
        };

        /**
         * Cara memangilnya cukup gunakan kode seperti ini,
         * sebutkan tipe pertama kemudian koma(,) tipe kedua
         * */
        sayhello<string, number>('Nurdin', 20);
        sayhello<number, string>(20, 'Nurdin'); // bisa juga dibuat seperti ini

        /**
         * Atau bisa juga seperti ini
         */
        letsIntroduce<string, number, boolean>('Nurdin', 20, false);
    });
});
