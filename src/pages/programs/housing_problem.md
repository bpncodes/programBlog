---
path: "/housing_problem"
date: "September 10, 2020"
title: "Google Kickstart 2020"
author: "Bipin karki"
language: "Python"
difficulty: "Round A"
img: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: There are N houses for sale. The i-th house costs Ai dollars to buy. You have a budget of B dollars to spend. What is the maximum number of houses you can buy?
Note: From Google Kickstart.
descriptionImage: 
description:   "The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a single line containing the two integers N and B. The second line contains N integers. The i-th integer is Ai, the cost of the i-th house.

For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the maximum number of houses you can buy.

In Sample Case #1, you have a budget of 100 dollars. You can buy the 1st and 3rd houses for 20 + 40 = 60 dollars.
In Sample Case #2, you have a budget of 50 dollars. You can buy the 1st, 3rd and 4th houses for 30 + 10 + 10 = 50 dollars.
In Sample Case #3, you have a budget of 300 dollars. You cannot buy any houses (so the answer is 0).


"

---
def check(price,houses):
    sumi = 0
    count = 0
    global globalc
    global output
    globalc+=1
    for i in sorted(houses): #Figured out I forgot to sort after 2 tests
        if sumi+i<=price:
            sumi+=i
            count+=1
        else:
            continue
    output.append('Case #'+str(globalc)+': '+str(count))
globalc=0
output=[]
T = int(input())
for i in range(T):
    houses,price = list(map(int,input().strip().split()))
    house_prices = list(map(int,input().strip().split()))
    check(price,house_prices)
for i in output:
    print(i)
