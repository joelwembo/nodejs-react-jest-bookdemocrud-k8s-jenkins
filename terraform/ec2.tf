resource "aws_instance" "instance"{
      ami = "ami-010aff33ed5991201"        
      instance_type = "t2.micro"
      security_groups = ["webport-allow"]
      key_name = "terraform-key"
      tags = {
            Name = "Web server by TerraForm"
      }
}
output "my-public-ip"{
       value= aws_instance.instance.public_ip
}
