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
      error_code            = 400
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_caching_min_ttl = 10
      error_code            = 403
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_caching_min_ttl = 10
      error_code            = 404
      response_code         = 200
      response_page_path    = "/index.html"
    },
    {
      error_caching_min_ttl = 10
      error_code            = 405
      response_code         = 200
      response_page_path    = "/index.html"
    }
  ]
}

variable "include_aliases" {
  description = "Whether to include aliases"
  type        = bool
  default     = false
}

variable "include_custom_certificate" {
  description = "Whether to include custom certificate"
  type        = bool
  default     = false
}

variable "aliases" {
  description = "List of aliases"
  type        = list(string)
  default     = ["hireafriend.co", "www.hireafriend.co"]
}

variable "viewer_certificate" {
  description = "Viewer certificate configuration"
  type        = map(string)
  default     = var.include_custom_certificate ? {
    "acm_certificate_arn"      = "arn:aws:acm:us-east-1:173088506843:certificate/cc15ec43-b0e9-41ed-a602-e8c703ee8676"
    "ssl_support_method"       = "sni-only"
    "minimum_protocol_version" = "TLSv1.2_2021"
  } : null
}
