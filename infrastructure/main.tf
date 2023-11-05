provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket  = "hire_a_friend-tf-state"
    key     = "hire_a_friend.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Charalampos Mylothros"
  }
}