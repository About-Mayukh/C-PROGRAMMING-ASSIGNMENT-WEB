// logic behind the code

'''The == operator is used to compare two values.
If num1 == num2 is true, the program prints "The two numbers are equal '''


#include <stdio.h>

int main() {

    int num1, num2;

    printf("Enter first number: ");
    scanf("%d", &num1);

    printf("Enter second number: ");
    scanf("%d", &num2);

    if (num1 == num2) {
        printf("The two numbers are equal.\n");
    } else {
        printf("The two numbers are not equal.\n");
    }

    return 0;
}