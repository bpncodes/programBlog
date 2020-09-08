---
path: "/bst_bfs"
date: "September 8, 2020"
title: "Depth first search"
author: "Bipin karki"
language: "Python"
difficulty: "Easy"
img: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
question: Create a binary search tree. Add some data onto that tree. Then create a function for breadth-first-search. A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. Complete the challange so that it prints the level-order traversal of the binary search tree.

Note: HackerRank

descriptionImage: "https://s3.amazonaws.com/hr-challenge-images/17176/1461696188-8eddd12300-BST.png"
description: "The input forms the following binary search tree given below 
We traverse each level of the tree from the root downward, and we process the nodes at each level from left to right. The resulting level-order traversal is 3->2->5->1->4->7 , and we print these data values as a single line of space-separated integers."

 

---
    
class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data
class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root
    def levelOrder(self,root):
        '''This function is for depth first search'''
        queue = []
        queue.append(root)
        while(queue):
            node = queue.pop(0)
            print(node.data, end=" ")
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
T=int(input())
myTree=Solution()
root=None
for i in range(T): # This is for dynamic data. You can provide static data as well
    data=int(input())
    root=myTree.insert(root,data)
myTree.levelOrder(root)