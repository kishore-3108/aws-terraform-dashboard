# AWS Terraform Dashboard ☁️

A real-time dashboard to monitor AWS infrastructure provisioned using Terraform.
Built with **Next.js + AWS SDK + Vercel** to demonstrate **Infrastructure as Code**.

### 🚀 Live Demo
👉 [https://aws-terraform-dashboard.vercel.app/](https://aws-terraform-dashboard.vercel.app/)

### 📸 Project Output
![AWS Dashboard](assets/dashboard.png)

The dashboard shows live AWS resources created via Terraform:
- **EC2 Instance**: ID, Public IP, Region, Type, Status
- **S3 Bucket**: Name, Region, Storage, Status
- **Cost Estimation**: Monthly cost breakdown for EC2 + S3
- **Terraform Info**: Provider, State, Resource count, Last Deployed

### ⚡ Key Features
- **IaC with Terraform**: Provisioned `t3.micro EC2` + `S3 Bucket` in `us-east-1`
- **Live Monitoring**: Fetches real AWS data using AWS SDK v3
- **Cost Awareness**: Shows estimated monthly cost + warning banner
- **DevOps Best Practice**: Includes `terraform destroy` command to avoid charges
- **Deployed on Vercel**: Fast, responsive Next.js frontend

### 🛠️ Tech Stack
`Terraform` `AWS` `EC2` `S3` `Next.js 14` `Tailwind CSS` `Vercel` `AWS SDK`

### 🏗️ Architecture

 [Terraform] → [AWS EC2 + S3]
                       ↓
               [Next.js + AWS SDK]
                       ↓
         [Vercel - Live Dashboard][Terraform]

### 🔧 How to Run Locally
```bash
# 1. Clone the repo
git clone https://github.com/kishore-3108/aws-terraform-dashboard.git
cd aws-terraform-dashboard

# 2. Setup AWS Credentials
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret

# 3. Provision Infrastructure
terraform init
terraform apply

# 4. Run Dashboard
npm install
npm run dev

# 5. Destroy to save money
terraform destroy
