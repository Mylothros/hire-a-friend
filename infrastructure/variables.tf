variable "prefix" {
  default = "hire-a-friend-myapp"
}

variable "project" {
  default = "hire-a-friend"
}

variable "custom_error_response" {
  type = list(object({
    error_caching_min_ttl = number
    error_code            = number
    response_code         = number
    response_page_path    = string
  }))
  description = "List of errors"
  default = [
    {
      error_caching_min_ttl = 10
      error_code            = 403
      response_code         = 200
      response_page_path    = "/404/index.html"
    }
  ]
}

variable "branch" {
  description = "The current branch name"
  type        = string
  default = "dev"
}

variable "aliases" {
  description = "List of aliases"
  type        = list(string)
  default     = ["www.hireafriend.co"]
}

variable "viewer_certificate" {
  description = "Viewer certificate configuration"
  type        = any
  default = {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:173088506843:certificate/f4f9c4f7-c8b7-41ff-a9d1-1683c66d41c0"
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}