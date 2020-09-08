---
path: "/bstHeight"
date: "September 7, 2020"
title: "BST Height"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer root pointing to the root of a binary search tree. Create a function getHeight so that it returns the height of the binary search tree.
Note: From HackerRank.
descriptionImage: https://s3.amazonaws.com/hr-challenge-images/17175/1459895368-4955f9ce74-LongestRTL.png
description:   "A Binary Search Tree (BST), , is a binary tree that is either empty or satisfies the following three conditions:
Each element in the left subtree of t is less than or equal to the root element.
Each element in the right subtree of t is greater than the root element of t.
You can essentially think of it as a regular binary tree where for each node parent having a leftChild and rightChild. The longest root-to-leaf path is shown below: There are 4 nodes in this path that are connected by 3 edges, meaning our BST's height = 3. Thus, we print 3 as our answer.

"

---

class Node:
    def __init__(self, data):
        self.data = data
        self.left = self.right = None
class BST:
    def insert(self,root,data):
        if root == None:
           return Node(data)
        if data < root.data:
            if root.left == None:
                root.left = Node(data)
                return
            self.insert(root.left,data)
        else:
            if root.right==None:
                root.right = Node(data)
                return
            self.insert(root.right,data)
    def inorder(self,root):
        if root == None:
            return
        self.inorder(root.left)
        print(root.data,end='->')
        self.inorder(root.right)
    def height(self,root):
        if root == None:
            return 0 #Return -1 if you want the height to start from 0
        else:
          leftheight = self.height(root.left)
          rightheight = self.height(root.right)
          return max(leftheight+1,rightheight+1)
root = None
bst = BST()
root = bst.insert(root,9)
for i in range(100):
    bst.insert(root,i)
bst.inorder(root)
bst.height(root)
