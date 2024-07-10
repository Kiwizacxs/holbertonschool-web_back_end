#!/usr/bin/env python3
"""module that contain print_results function"""
from pymongo import MongoClient


def print_results(log_count, methods, status_check):
  """provides some stats about Nginx logs stored in MongoDB"""
    print(f"{log_count} logs")
    for method, count in methods.items():
      print(f"{method}: {count} requests")
    print(f"/status endpoint: {status_check} requests")

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    log_count = nginx_collection.count_documents({})
    methods = {method: nginx_collection.count_documents({'method': method}) for method in ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']}
    status_check = nginx_collection.count_documents({'method': 'GET', 'path': '/status'})

    print_results(log_count, methods, status_check)
