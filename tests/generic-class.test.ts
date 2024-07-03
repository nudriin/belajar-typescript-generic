describe('Generic Class', () => {
    // Membuat class generic
    class GenericData<T> {
        data: T;

        constructor(data: T) {
            this.data = data;
        }
    }

    it('should support generic class', () => {
        // cara menggunakan generic class
        const genericDataString: GenericData<string> = new GenericData<string>(
            'Nurdin'
        );
        console.log(genericDataString.data);
        const genericDataNumber: GenericData<number> = new GenericData<number>(
            20
        );
        console.log(genericDataNumber.data);

        expect(genericDataString.data).toBe('Nurdin');
        expect(genericDataNumber.data).toBe(20);
    });
});
