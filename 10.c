//// date 17/07/2026
/// in lab code <<<<<<<<<<<<<<<

#include <stdio.h>
int main(){
    float sub1, sub2, sub3, sub4, sub5, total, average;
    printf("Enter marks of 5 subjects: ");
    scanf("%f %f %f %f %f", &sub1, &sub2, &sub3, &sub4, &sub5);
    total = sub1 + sub2 + sub3 + sub4 + sub5;
    average = (total /500)*100;
    printf("Total marks = %.2f\n", total);
    printf("Average marks = %.2f\n", average);
    return 0;
}


///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/// modified code
/// use only one type of code during assignment submission.
///^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


#include <stdio.h>

int main() {

    float sub1, sub2, sub3, sub4, sub5;
    float total, percentage;

    printf("Enter marks of Subject 1: ");
    scanf("%f", &sub1);

    printf("Enter marks of Subject 2: ");
    scanf("%f", &sub2);

    printf("Enter marks of Subject 3: ");
    scanf("%f", &sub3);

    printf("Enter marks of Subject 4: ");
    scanf("%f", &sub4);

    printf("Enter marks of Subject 5: ");
    scanf("%f", &sub5);

    total = sub1 + sub2 + sub3 + sub4 + sub5;

    percentage = (total / 500) * 100;

    printf("\nTotal Marks = %.2f\n", total);
    printf("Percentage = %.2f%%\n", percentage);

    return 0;
}