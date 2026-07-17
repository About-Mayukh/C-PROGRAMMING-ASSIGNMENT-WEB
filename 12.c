// modified code
// behind logic
//Uses the ternary operator (? :) instead of if-else.
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
'''First, compare num1 and num2.
If num1 is greater, compare num1 with num3.
Otherwise, compare num2 with num3.
Store the largest value in greatest.'''
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

#include <stdio.h>

int main() {

    int num1, num2, num3, greatest;

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    printf("Enter third number: ");
    scanf("%d", &num3);

    greatest = (num1 > num2) ?
                ((num1 > num3) ? num1 : num3)
                :
                ((num2 > num3) ? num2 : num3);

    printf("The greatest number is %d\n", greatest);

    return 0;
}