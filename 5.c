#include <stdio.h>

int main() {

    float num1, num2;

    printf("Enter first number: ");
    scanf("%f", &num1);

    printf("Enter second number: ");
    scanf("%f", &num2);

    printf("\nAddition = %.4f\n", num1 + num2);

    printf("Subtraction = %.4f\n", num1 - num2);

    printf("Multiplication = %.4f\n", num1 * num2);

    if (num2 != 0) {
        printf("Division = %.4f\n", num1 / num2);
    } else {
        printf("Division is not possible (cannot divide by zero).\n");
    }

    return 0;
}