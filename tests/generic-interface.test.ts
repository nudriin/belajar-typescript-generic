describe('Interface Generic', () => {
    interface StudentData {
        name: string;
        nim: string;
        program: string;
        faculty: string;
    }

    interface CourseData {
        name: string;
        sks: number;
    }

    /**
     * Pada interface dibawah ini terdapat duplikasi
     * dapat dilihat struktur dari StudentResponse dan CourseResponse terlihat sama
     * terdapat statusCode, message dan data. yang berbeda hanyalah data
     * hal ini dapat di atasi denga menggunakan generic
     * *LIHAT INTERFACE // ? RESPONSE
     */
    interface StudentResponse {
        statusCode: number;
        message: string;
        data: StudentData;
    }

    interface CourseResponse {
        statusCode: number;
        message: string;
        data: CourseData;
    }

    /**
     * Dengan kode ini kita dapat mengirimkan tipe data atau interface pada property data
     * sehingga kita tidak perlu membuat interface yang duplikat
     */
    interface Response<T> {
        statusCode: number;
        message: string;
        data: T;
    }

    it('should support without generic', () => {
        const studentResponse: StudentResponse = {
            statusCode: 200,
            message: 'Success',
            data: {
                name: 'Nurdin',
                nim: '213130503177',
                program: 'Computer Engineering',
                faculty: 'Engineering',
            },
        };

        const courseResponse: CourseResponse = {
            statusCode: 200,
            message: 'Success',
            data: {
                name: 'Database',
                sks: 3,
            },
        };

        console.log(studentResponse);
        console.log(courseResponse);
    });

    // bisa juga kita buatkan tipe baru misal
    // jadi tinggal gunakan tipe StudentRes dan CourseRes
    type StudentRes = Response<StudentData>;
    type CourseRes = Response<CourseData>;
    it('should support generic', () => {
        // Cukup menggunakan tipe Response saja
        // kita dapat mengirimkan tipde StudentData untuk property data
        const studentResponse: Response<StudentData> = {
            statusCode: 200,
            message: 'Success',
            data: {
                name: 'Nurdin',
                nim: '213130503177',
                program: 'Computer Engineering',
                faculty: 'Engineering',
            },
        };

        // begitu pula dengan course response
        // kita hanya perlu membuat dengan tipe Response
        const courseResponse: Response<CourseData> = {
            statusCode: 200,
            message: 'Success',
            data: {
                name: 'Database',
                sks: 3,
            },
        };

        // * dapat dilihat bahwa output menggunakan generic maupun tanpa generic sama saja
        console.log(studentResponse);
        console.log(courseResponse);
    });
});
