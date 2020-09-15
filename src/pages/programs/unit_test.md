---
path: "/unit_test_python"
date: "September 15, 2020"
title: "Unit Testing"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: " Create a function to find index of minimum value of an array. Also design 3 separated unit tests. 
1. get_array() method in class TestDataEmptyArray has to return an empty array.
2. get_array() method in class TestDataUniqueValues has to return an array of size at least 2 with all unique elements, while method get_expected_result() of this class has to return the expected minimum value index for this array.
3. get_array() method in class TestDataExactlyTwoDifferentMinimums has to return an array where there are exactly two different minimum values, while method get_expected_result() of this class has to return the expected minimum value index for this array.
"
Note: "From HackerRank."
descriptionImage: ""
description: " This is just a unit testing problem which I solved on hackerrank. Basically we create test cases to check if the output which is given by the function is equal to the actual output which we define in the test classes. And the static method is the one which takes neither a self nor a cls parameter (but of course it’s free to accept an arbitrary number of other parameters).
Therefore a static method can neither modify object state nor class state. Static methods are restricted in what data they can access - and they’re primarily a way to namespace your methods."

---

def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")
    min_idx = 0
    for i in range(1, len(seq)):
        if seq[i] < seq[min_idx]:
            min_idx = i
    return min_idx
class TestDataEmptyArray(object):
    @staticmethod
    def get_array():
        return []
class TestDataUniqueValues(object):
    @staticmethod
    def get_array():
        return [1,2]
    @staticmethod
    def get_expected_result():
        return 0
class TestDataExactlyTwoDifferentMinimums(object):
    @staticmethod
    def get_array():
        return [1,1]
    @staticmethod
    def get_expected_result():
        return 0




