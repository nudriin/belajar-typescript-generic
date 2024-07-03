describe('Generic Default Type', () => {
    // Gunakan tanda "=" untuk memberi nilai default pada generic
    class SimpleGeneric<T = string> {
        private data?: T;

        setData(data: T) {
            this.data = data;
        }

        getData(): T | undefined {
            return this.data;
        }
    }

    it('should support default generic types', () => {
        // tidak perlu menuliskan tipe dari generic nya karena generic nya sudah bernilai default string
        const simple = new SimpleGeneric();
        const data: string = 'Nurdin';
        simple.setData(data);
        console.log(simple.getData());

        expect(simple.getData()).toBe(data);

        // atau bisa juga dituliskan tipe genericnya sesuai yang di inginkan
        const simple2 = new SimpleGeneric<number>();
        const age: number = 20;
        simple2.setData(age);
        console.log(simple2.getData());

        expect(simple2.getData()).toBe(age);
    });
});
