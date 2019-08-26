class Matrix {
    constructor(rows, cols) {
        this.rows = rows
        this.cols = cols

        this.data = []
        for(let i = 0; i < rows; i++) {
            let arr = []
            for(let j = 0; j < cols; j++) {
                arr.push(0)
            }
            this.data.push(arr)
        }
    }

    static arrayToMatrix(arr) {
       let matrix =  new Matrix(arr.length, 1)
       matrix.map((el, i, j) => {
           return arr[i]
       })
       return matrix
    }

    static matrixToArray(obj) {
        let arr = []
        obj.map((el, i, j) => {
            arr.push(el)
        })
        return arr
     }

    static map(A, func){
        let aux = new Matrix(A.rows, A.cols)
        aux.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i , j);
            })
        })
        return aux
    }

    map(func){
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i , j);
            })
        })
        return this
    }

    static transpose(A) {
        var aux = new Matrix(A.cols, A.rows)
        aux.map((num, i, j) => {
            return A.data[j][i]
        })

        return aux
    }

    // static operators Matrix-Scalar

    static scalarMultiply(A, scalar) {
        var aux = new Matrix(A.rows, A.cols)
        aux.map((el, i, j) => {
            return A.data[i][j] * scalar
        })
        return aux
    }


    // static operators Matrix-Matrix

    static add(A, B) {
        var aux = new Matrix(A.rows, A.cols)
        aux.map((el, i, j) => {
            return A.data[i][j] + B.data[i][j]
        })
        return aux
    }

    static subtract(A, B) {
        var aux = new Matrix(A.rows, A.cols)
        aux.map((el, i, j) => {
            return A.data[i][j] - B.data[i][j]
        })
        return aux
    }

    static hadamard(A, B) {
        var aux = new Matrix(A.rows, A.cols)
        aux.map((el, i, j) => {
            return A.data[i][j] * B.data[i][j]
        })
        return aux
    }

    static multiply(A, B) {     
        let aux = new Matrix(A.rows, B.cols)

        aux.map((num, i, j) => {
            let sum = 0
            for(let k = 0; k < A.cols; k++) {
                let el1 = A.data[i][k]
                let el2 = B.data[k][j]
                sum += el1 * el2
            }
            return sum
        })

        return aux
    }

    randomize() {
        this.map((el, i, j) => {
            return Math.random() * 2 - 1
            // return Math.floor(Math.random() * 10)
        })
    }

    print() {
        console.table(this.data)
    }
}