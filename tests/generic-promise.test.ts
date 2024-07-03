describe('Generic Promise', () => {
    // pada promise kita dapat menggunakan tipe data generic
    // yang akan dikembalikan oleh promise itu sendiri
    // pada function ini  kiat membuat data yang dapat mengembalikan promise bertipe string
    const fetchData = async (name: string): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            if (name.toLocaleLowerCase() === 'nurdin') {
                resolve(`Hello ${name}`);
            } else {
                reject('Data not found');
            }
        });
    };

    it('should support generic promise', async () => {
        const response = await fetchData('Nurdin');
        expect(response).toBe('Hello Nurdin');
        console.log(response);

        try {
            await fetchData('Jakara');
        } catch (error) {
            console.log(error);
            expect(error).toBe('Data not found');
        }
    });
});
