import pymongo

client = pymongo.MongoClient()
db = client['logs']
collection = db['nginx']

total_logs = collection.count_documents({})

methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
method_counts = {}
for method in methods:
    method_counts[method] = collection.count_documents({"method": method})

status_checks = collection.count_documents({"method": "GET", "path": "/status"})

print(f"{total_logs} logs")
print("Methods:")
for method in methods:
    print(f"    method {method}: {method_counts[method]}")
print(f"{status_checks} status check")
