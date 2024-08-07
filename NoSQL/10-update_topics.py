#!/usr/bin/env python3
"""module that contain update-topics function"""


def update_topics(mongo_collection, name, topics):
    """function that changes all topics of a
    school document based on the name"""
    update = {
            "$set": {"topics": topics}
        }
    mongo_collection.update_many({"name": name}, update)