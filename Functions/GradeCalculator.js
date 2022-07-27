/**
 * students score, total possible score
 * 15/20 => You got a C (75%)
 * A 90-100, B 80-89, C 70-79, D 60-69, F 0-59
 */

let calculator = function (score, totalPossibleScore) {
    let percent = score / totalPossibleScore * 100;
    let letterGrade

    if (typeof score === 'number' && typeof totalPossibleScore === 'number') {
        if (percent >= 90) letterGrade = 'A'
        else if (percent >= 80) letterGrade = 'B'
        else if (percent >= 70) letterGrade = 'C'
        else if (percent >= 60) letterGrade = 'D'
        else letterGrade = 'F'

        return `You got a ${letterGrade} (${percent}%)!`;
    } else {
        throw Error('Invalid numbers were received')
    }

}

try {
    console.log(calculator(15, '20'));
} catch (error) {
    console.log(error.message);
}
