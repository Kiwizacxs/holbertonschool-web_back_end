#!/usr/bin/env python3
"""module that contain list_all function"""


def list_all(mongo_collection):
    """Function that lists all documents in a collection"""
    My_doc = []
    for doc in mongo_collection.find():
        My_doc.append(doc)
    return My_doc
