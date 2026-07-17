// modified code
// behind logic
//Uses the ternary operator (? :) instead of if-else.
'''>>>If num > 0, print Positive.
   >>>Otherwise, check if num < 0; if true, print Negative.
   >>>If neither condition is true, the number must be Zero.'''
// the third line is most importat logic ,because in either or setuation no execution will be done.

#include <stdio.h>

int main() {

    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    (num > 0)
        ? printf("%d is Positive.\n", num)
        : (num < 0)
            ? printf("%d is Negative.\n", num)
            : printf("The number is Zero.\n");

    return 0;
}