#!/usr/bin/env python3
"""module that contain schools_by_topic function"""


def schools_by_topic(mongo_collection, topic):
    """function that returns the list of school having a specific topic"""
    topics = mongo_collection.find({"topics": topic})
    return topics