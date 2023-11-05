output "hire_a_friend_app_bucket_name" {
  value = aws_s3_bucket.hire_a_friend_app_s3_bucket.id
}

output "couldfront_distribution_id" {
  value = aws_cloudfront_distribution.s3_distribution.id
}