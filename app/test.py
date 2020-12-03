import boto3

s3 = boto3.resource('s3')
for bucket in s3.buckets.all():
    print(bucket.name)

data = open('../images/profile/kathleen.jpg', 'rb')
s3.Bucket('kafei').put_object(Key='kathleen', Body=data)
