describe('Generic Collection', () => {
    it('should support array generic', () => {
        // array  termasuk ke dalam sebuah generic collection
        // jadi kita dapat membuat generic menggunakan Array
        // menggunakan kode seperti dibawah ini
        const arr: Array<string> = new Array<string>();
        arr.push('nurdin');
        arr.push('hishasy');

        console.log(arr);

        expect(arr[0]).toBe('nurdin');
        expect(arr[1]).toBe('hishasy');
    });

    it('should support set generic', () => {
        // set adalah kumpulan data yang isi nya harus unique
        // set merupakan bagian dari generic juga
        const set: Set<string> = new Set<string>();
        set.add('nurdin');
        set.add('hishasy');
        set.add('hishasy'); // ketika di tambah lagi ke set maka tidak akan terinput
        // hal ini dikarena set haruslah bernilai unique
        // apabila tedapat duplicate maka tidak akan diinputkan

        console.log(set);
        expect(set.size).toBe(2);
        expect(set.has('nurdin')).toBe(true);
        expect(set.has('hishasy')).toBe(true);
    });

    it('should support map generic', () => {
        // map adalah kumpulan data berupa key dan values
        // Map<key, value>
        const map: Map<string, number> = new Map<string, number>();

        map.set('Nurdin', 1);
        // apabila di lakukan duplikasi seperti ini, maka data terbaru lah yang akan disimpan ke dalam map
        map.set('Hishasy', 2);
        map.set('Hishasy', 10);

        console.log(map);
        console.log(map.get('nurdin')); // map bersifat case sensitive

        expect(map.size).toBe(2);
        expect(map.get('Nurdin')).toBe(1);
        expect(map.get('Hishasy')).toBe(10);
    });
});
