//// date 17/07/2026
// in lab code <<<<<<<<<<<<<<<
//logic behind the code
'''The formula to convert Celsius to Fahrenheit is:
F = (C * 9/5) + 32
'''

#include <stdio.h>

int main() {

    float celsius, fahrenheit;

    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);

    fahrenheit = (celsius * 9 / 5) + 32;

    printf("Temperature in Fahrenheit = %.2f°F\n", fahrenheit);

    return 0;
}