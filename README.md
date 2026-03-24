# 🚀 Kubernetes Observability & Stress Testing Lab

![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes\&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus\&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?logo=grafana\&logoColor=white)
![Loki](https://img.shields.io/badge/Loki-000000?logo=grafana\&logoColor=white)

---

## 📌 Overview

This project demonstrates a complete **Monitoring & Observability setup on Kubernetes** using real workloads and stress testing.

It includes:

* Metrics (Prometheus)
* Visualization (Grafana)
* Logging (Loki + Alloy)
* Stress Testing
* Multiple Kubernetes workloads
---
## 🏗️ Architecture

<p align="center">
  <img src="assets/architecture.png" width="700"/>
</p>

---

## ⚙️ Tech Stack

* Kubernetes (KIND)
* Docker
* Prometheus
* Grafana
* Loki
* Grafana Alloy
* Helm

---

## 📂 Project Structure

| File                         | Description              |
| ---------------------------- | ------------------------ |
| Deployment.yaml              | Stateless app deployment |
| service.yaml                 | NodePort service         |
| hpa.yaml                     | Auto scaling             |
| cronjob.yaml                 | Scheduled jobs           |
| job.yaml                     | One-time job             |
| daemonset.yaml               | Runs on all nodes        |
| statefulset.yaml             | Stateful workload        |
| pv.yaml / pvc.yaml           | Persistent storage       |
| role.yaml / rolebinding.yaml | RBAC                     |
| namespace.yaml               | Namespace setup          |
| Dockerfile                   | App container            |
| main.py                      | Dummy Flask app          |
| stress-test.js               | Load testing script      |

---

## 🎯 Use Cases

* 📊 Monitoring Kubernetes clusters using Prometheus & Grafana
* 📜 Centralized logging with Loki & Alloy
* 🚀 Stress testing applications
* 📈 Validating auto-scaling (HPA)
* 🔍 Debugging real-world infra issues
* 🧪 Testing different Kubernetes workloads
* 🌐 Understanding networking & firewall behavior

---

## 🚀 Setup

### 1️⃣ Create Cluster

```bash
kind create cluster
```

---

### 2️⃣ Add Helm Repos

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

---

### 3️⃣ Create Namespace

```bash
kubectl create namespace monitoring
```

---

### 4️⃣ Install Prometheus + Grafana

```bash
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring
```

---

### 5️⃣ Install Loki

```bash
helm install loki grafana/loki -n monitoring
```

---

### 6️⃣ Install Alloy

```bash
helm install alloy grafana/alloy -n monitoring
```

---

### 7️⃣ Access Grafana

```bash
kubectl port-forward svc/monitoring-grafana -n monitoring 3000:80
```

---

## 📊 Grafana Dashboard

<p align="center">
  <img src="assets/grafana-dashboard.png" width="80%"/>
</p>

---

## 📈 Prometheus Metrics

<p align="center">
  <img src="assets/prometheus-metrics.png" width="80%"/>
</p>

---

## 📜 Loki Logs

<p align="center">
  <img src="assets/loki-logs.png" width="80%"/>
</p>

---

## 🧪 Stress Testing

```bash
node stress-test.js
```

<p align="center">
  <img src="assets/stress-test.gif" width="80%"/>
</p>

---

## 🔄 Auto Scaling (HPA)

<p align="center">
  <img src="assets/hpa-scaling.png" width="80%"/>
</p>

---

## 🐞 Issues Faced & Fixes

### ❌ Services not accessible

* Cause: KIND runs inside Docker
* Fix: Port forwarding + firewall rules

### ❌ Logs not appearing in Grafana

* Cause: Alloy missing access to container logs
* Fix: Added proper mounts

### ❌ Metrics not available

* Cause: Metrics server misconfiguration
* Fix: Updated configuration

### ❌ Promtail CrashLoopBackOff

* Cause: Resource/file limits
* Fix: Switched to Alloy

---

## 📚 Learnings

* Kubernetes networking (NodePort, port-forward)
* Observability pipeline (Metrics + Logs)
* Debugging Docker + Kubernetes + Cloud
* Scaling applications using HPA
* Real-world DevOps troubleshooting

---

## 🔮 Future Improvements

* Add Jaeger (Tracing)
* Add EFK stack
* Setup Alertmanager
* Add CI/CD pipeline

---

## 🤝 Conclusion

This project demonstrates a **real-world observability pipeline** with monitoring, logging, scaling, and debugging across multiple layers of infrastructure.
