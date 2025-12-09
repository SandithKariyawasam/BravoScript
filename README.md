# 🚀 BravoScript DevOps Automation

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Kubernetes](https://img.shields.io/badge/kubernetes-deployed-blue) ![Docker](https://img.shields.io/badge/docker-containerized-blue)

A full-stack React & Node.js application deployed via a fully automated **CI/CD pipeline** to a **Kubernetes cluster**. This project demonstrates "Infrastructure as Code," container orchestration, and real-time observability.

## 🏗️ Architecture

**GitHub** (Source) ➔ **Jenkins** (CI/Build) ➔ **Docker Hub** (Registry) ➔ **Kubernetes** (Orchestration) ➔ **Prometheus/Grafana** (Monitoring)

## 🛠️ Tech Stack

* **Application:** React.js (Vite), Node.js
* **CI/CD:** Jenkins (Declarative Pipeline), GitHub Webhooks
* **Containerization:** Docker, Docker Hub
* **Orchestration:** Kubernetes (Minikube), Helm
* **Infrastructure:** YAML Manifests (Declarative)
* **Observability:** Prometheus, Grafana

## ✨ Key Features

* **Automated CI/CD:** A single `git push` triggers the pipeline, runs tests, builds the Docker image, pushes to the registry, and updates the Kubernetes cluster.
* **Zero-Downtime Deployment:** Uses Kubernetes Rolling Updates to ensure the application stays online during new version releases.
* **Self-Healing Infrastructure:** Kubernetes automatically restarts crashed pods to maintain desired replica counts.
* **Scalability:** Configured for instant horizontal scaling via `kubectl scale`.
* **Observability:** Integrated Prometheus & Grafana stack to monitor Cluster CPU, Memory usage, and Pod health in real-time.

## 📸 Screenshots

### 1. The Automated Pipeline (Jenkins)
*Jenkins automatically building, testing, pushing, and deploying to Kubernetes.*
![Jenkins Pipeline](INSERT_YOUR_JENKINS_GREEN_BUILD_SCREENSHOT_HERE)

### 2. Kubernetes Orchestration
*Managing Pods, Services, and Replicas via Kubectl.*
![Kubernetes Terminal](INSERT_YOUR_TERMINAL_SCREENSHOT_HERE)

### 3. Real-Time Monitoring
*Grafana Dashboard visualizing cluster performance.*
![Grafana Dashboard](INSERT_YOUR_GRAFANA_SCREENSHOT_HERE)

## 🚀 How to Run Locally

### Prerequisites
* Docker Desktop
* Minikube
* Kubectl
* Helm

### Steps

1.  **Start the Environment:**
    ```bash
    minikube start
    ```

2.  **Deploy the Application:**
    ```bash
    kubectl apply -f k8s/deployment.yaml
    kubectl apply -f k8s/service.yaml
    ```

3.  **Access the App:**
    ```bash
    minikube service bravoscript-service
    ```

4.  **Install Monitoring (Optional):**
    ```bash
    helm repo add prometheus-community [https://prometheus-community.github.io/helm-charts](https://prometheus-community.github.io/helm-charts)
    helm install monitoring prometheus-community/kube-prometheus-stack --namespace monitoring --create-namespace
    kubectl port-forward svc/monitoring-grafana 3000:80 --namespace monitoring
    ```

## 🧠 Challenges Solved
* **Docker-in-Docker Networking:** Configured `host.docker.internal` to allow Jenkins containers to communicate with the local Minikube cluster.
* **TLS Authentication:** Managed secure `kubeconfig` credentials and TLS certificate verification within the CI/CD pipeline.
* **React Optimization:** Implemented `.dockerignore` to prevent `node_modules` conflicts between Windows and Linux environments.

---
*Created by [Your Name]*
