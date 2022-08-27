/*  The Problem:
Number Generator
A digit-only keyboard contains all 10 digits from 0 to 9. They all exist in one line. Give a string of 10 digits illustrating how the keys are positioned. To type a digit, you start from index zero to the index of the target digit. It takes |a - b| milliseconds to move from index a to index b.

Write a function to calculate the number of milliseconds needed to type a number with one finger.
*/

//Solution:

 function calcTime (digits, num ){
        const digits_arr = Array.from(digits);
        let last_index = 0, new_index, time =0;
        for (const n of num) {
            new_index =digits_arr.findIndex(x => x===n);
            time += Math.abs(new_index - last_index);
            last_index = new_index;
        }
        return time;
    }