
# install minikube
# sudo apt install -y curl wget apt-transport-https
# wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
# sudo cp minikube-linux-amd64 /usr/local/bin/minikube
# sudo chmod +x /usr/local/bin/minikube
minikube version
# minikube start --driver=docker
echo "Minikube Installed successfully installer"


# Kubectl installations
# sudo curl -LO https://storage.googleapis.com/kubernetes-release/release/v1.23.6/bin/linux/amd64/kubectl
# sudo chmod +x ./kubectl
# export KUBECONFIG=$HOME/.kube/config
# sudo mkdir -p $HOME/bin && sudo cp ./kubectl $HOME/bin/kubectl && export PATH=$PATH:$HOME/bin
echo "Kubeclt Installed successfully installer"
# minikube start --driver=docker