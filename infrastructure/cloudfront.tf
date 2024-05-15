resource "aws_cloudfront_origin_access_identity" "hire_a_friend_app_origin_access" {
  comment = "Identity for hire a friend app s3 bucket"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  retain_on_delete    = false
  price_class         = "PriceClass_All"
  enabled             = true
  is_ipv6_enabled     = false
  default_root_object = "index.html"

dynamic "viewer_certificate" {
    for_each = var.include_custom_certificate ? [1] : []
    content {
      cloudfront_default_certificate = false
      acm_certificate_arn            = var.viewer_certificate["acm_certificate_arn"]
      ssl_support_method             = var.viewer_certificate["ssl_support_method"]
      minimum_protocol_version       = var.viewer_certificate["minimum_protocol_version"]
    }
  }
  origin {
    domain_name = aws_s3_bucket.hire_a_friend_app_s3_bucket.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.hire_a_friend_app_s3_bucket.id
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.hire_a_friend_app_origin_access.cloudfront_access_identity_path
    }
  }

  aliases = var.include_aliases ? var.aliases : []

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.hire_a_friend_app_s3_bucket.id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true
    min_ttl                = 0
    default_ttl            = 300
    max_ttl                = 300

    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
  }

  dynamic "custom_error_response" {
    for_each = var.custom_error_response
    content {
      error_caching_min_ttl = custom_error_response.value.error_caching_min_ttl
      error_code            = custom_error_response.value.error_code
      response_code         = custom_error_response.value.response_code
      response_page_path    = custom_error_response.value.response_page_path
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = local.common_tags
}