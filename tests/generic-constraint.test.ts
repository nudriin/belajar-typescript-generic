describe('Generic Constraint', () => {
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
     * Dengen constraint kita dapat membatasi tipe apa saja yang dapat diterima oleh generic
     * misal pada Response, normalnya data akan menerima tipe object
     * namun karena tidak menggunakan constraint makan data dapat menerima tipe string, number, boolean dll
     * maka dari itu dapat kita batasi menggunakan kata kunci extends
     */
    // * Generic response hanya dapat menerima tipe berupa object
    // * apabila di inputkan tipe string, number dll maka akan ditolak
    interface Response<T extends object> {
        statusCode: number;
        message: string;
        data: T;
    }

    it('should support constraint', () => {
        const student: Response<StudentData> = {
            statusCode: 200,
            message: 'Success',
            data: {
                name: 'Nurdin',
                nim: '213130503177',
                program: 'Computer Engineering',
                faculty: 'Engineering',
            },
        };

        // ! Jika kita kirim tipe string maka akan terjadi error
        // ! DIBAWAH INI TIDAK DIPERBOLEHKAN
        // const studentError: Response<string> = {
        //     statusCode: 200,
        //     message: 'Success',
        //     data: {
        //         name: 'Nurdin',
        //         nim: '213130503177',
        //         program: 'Computer Engineering',
        //         faculty: 'Engineering',
        //     },
        // };
    });
});
