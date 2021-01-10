//Start the matrix construction
//The variable c,d,t,e are the initials of my name, I used these letters as variables to can build the matrix
var getMatrix = {
    rightDiagonal: (m) => {
        var c, d, t, e,
            o = [];
        for (c = 0; c < m.length; c++) {
            e = [];
            for (t = c, d = 0; t >= 0; t--, d++)
                e.push(m[t][d]);
            o.push(e);
        }
        for (c = 1; c < m[0].length; c++) {
            e = [];
            for (t = m.length - 1, d = c; d < m[0].length; t--, d++)
                e.push(m[t][d]);
            o.push(e);
        }
        return o.map((array) => {
            return array.join('');
        });
    },

    leftDiagonal: (m) => {
        let reverseData = getMatrix.reverseMatrix(m);
        return getMatrix.rightDiagonal(reverseData);
    },

    reverseString: (string) => {
        return string.split("").reverse().join("");
    },

    reverseMatrix: (m) => {
        return m.map((string) => {
            return getMatrix.reverseString(string);
        });
    },

};
//End the matrix construction

//Create the class for can test the matrix
class checkMutant {
    constructor(transformer) {
        this.transformer = transformer;

        //Section to can find if some DNA is from a mutant
        this.findMutant = function(matrix) {

            let matrixValues = /([ATGC])\1{3,4}/;
            let straight = matrix.filter((string) => {
                return matrixValues.test(string);
            });

            let right = this.transformer.rightDiagonal(matrix).filter((string) => {
                return matrixValues.test(string);
            });

            let left = this.transformer.leftDiagonal(matrix).filter((string) => {
                return matrixValues.test(string);
            });

            return straight.concat(right).concat(left);
        };

        this.isMutant = function(matrix) {
            let blocks = this.findMutant(matrix);
            return blocks.length > 1;
        };

        this.showMutant = function(matrix) {
            let blocks = this.findMutant(matrix);
            if (blocks.length > 1) {
                //console.log('Blocks: ', blocks)
                return blocks;
            } else {
                return [];
            }
        };
    }
}

//Test DNA
//DNA matrix for tests
const adn1 = [
    "ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"
];

const adn2 = [
    "AAAAGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCAA", "TCACTG"
];

const adn3 = [
    "ATGCGA", "ATCGTA", "AGCGTA", "ATGCGA", "CCACAA", "CACACA"
];

const adn4 = [
    "ATGCCC", "CAGTGC", "TTATGT", "AGAAGG", "TTTCA", "TCACTG"
];

const adn5 = [
    "CTTTAG", "GGGGAT", "AGCGTA", "ATGCGA", "CCACAA", "AAAACC"
];

const adn6 = [
    "ATGCGA", "TTCCCA", "AGCGTA", "GTACGA", "CCACAA", "GGGGCT"
];

const checkMatrix = new checkMutant(getMatrix);

console.log('Firts test DNA: ', checkMatrix.isMutant(adn1));
console.log('Results of the first test: ', checkMatrix.showMutant(adn1));

console.log('Second test for DNA: ', checkMatrix.isMutant(adn2));
console.log('Results of the second test: ', checkMatrix.showMutant(adn2));

console.log('Third test for DNA: ', checkMatrix.isMutant(adn3));
console.log('Results of the third test: ', checkMatrix.showMutant(adn3));

console.log('Fourth test for DNA: ', checkMatrix.isMutant(adn4));
console.log('Results of the fourth test: ', checkMatrix.showMutant(adn4));

console.log('Fifth test for DNA: ', checkMatrix.isMutant(adn5));
console.log('Results of the fifht test: ', checkMatrix.showMutant(adn5));

console.log('Sixth test for DNA: ', checkMatrix.isMutant(adn6));
console.log('Results of the sixth test: ', checkMatrix.showMutant(adn6));
//DNA matrix for tests