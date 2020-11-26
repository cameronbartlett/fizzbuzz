const fizzbuzz = (num = 100) => {

    for(let i = 1; i <= num; i++){

        let output = '';

        if ( i % 3 == 0 ){
            output = output + 'Fizz';
        }
        if ( i % 5 == 0){
            output = output + 'Buzz';
        }
        if ( output == '' ){
            output = i;
        }

        console.log(output);

    }

}

const arg = process.argv[2];

if (arg) {
    fizzbuzz(arg);
} else {
    fizzbuzz();
}