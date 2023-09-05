resource "null_resource" "remote"{
connection {
       type = "ssh"
       user = "ec2-user"
       private_key = file("F:/terraform-workstation/terraform-key.pem")
       host  = aws_instance.instance.public_ip
}
provisioner "remote-exec" {
         inline = [
                       "sudo yum install httpd -y",
                       "sudo yum install git -y",
                       "sudo systemctl enable httpd",
                       "sudo git clone xxx.git /var/www/html/web/",
                       "sudo systemctl start httpd"
                  ]
  }
}
