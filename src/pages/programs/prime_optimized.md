---
path: "/prime_optimized"
date: "September 13, 2020"
title: "Prime Optimized"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
question: "A prime is a natural number greater than 1 that has no positive divisors other than  and itself. Given a number, n, determine and print whether it's Prime or Not Prime.
Try to come up with a O(sqrt(n)) primality algorithm, or see what sort of optimizations you come up with for an O(n) algorithm Else Your algorithm might fail the running time requirements."
Note: "From HackerRank."
descriptionImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Primes-vs-composites.svg/426px-Primes-vs-composites.svg.png"
description: " Definition: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The first few prime numbers are {2, 3, 5, 7, 11, ….}. And we know that if a number is even > 2 then that can't be a prime number so we have a condition for that. And the second optimization is that we run the program from 3 to square root of the number. Because after the square root the factors repeat in the opposite direction. Hence this method will optimize our code and reduce the time complexity drastically. "

---

import math
n = int(input()) # Number of Test Cases
a=[]
def check(n):
    if n==2:
        return "Prime"
    if n <= 1 or n%2==0:
        return "Not prime"
    for i in range(3,1+math.floor(math.sqrt(n))):
        if n%i == 0:
            return "Not prime"
    else:
        return "Prime"
for i in range(n): # Test Cases
    a.append(check(int(input())))
for i in a: # Printing the results
    print(i)

