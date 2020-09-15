---
path: "/datetime_library"
date: "September 13, 2020"
title: "Conditional Statements"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
question: "Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.fine = 0).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 14 * (number of days late)..
3. If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 * (number of months late).
4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000."
Note: "From HackerRank."
descriptionImage: ""
description: " I've used datetime module from python to solve this problem easily. Get input from stdin and use simple if else statements."

---

import datetime
book_returned = list(map(int,(input().strip().split())))  #Get the returned date
expiring_date = list(map(int,(input().strip().split())))   #Get the expiry date 
x=datetime.datetime(book_returned\[2\],book_returned\[1\],book_returned\[0\])
y=datetime.datetime(expiring_date\[2\],expiring_date\[1\],expiring_date\[0\])
if y>=x:
    print(0)
elif(x.month==y.month and x.year == y.year):
    print(15\*(x-y).days)
elif(x.year == y.year):
    print(500\*(x.month-y.month))
elif(x.year != y.year):
    print(10000)


