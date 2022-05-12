Working on Different Projects/Products. **Mainly** Focusing on Implementing and letting teams adopt Hashicorp Vault and implementing ADF (AWS Deployment Framework) for AWS multi-accounts creation and resource deployment across all the Organization.

The following is a summary of technologies and methods used in daily work:

#### HASHICORP VAULT

- Infrastructure

  - Deployed on AWS
  - Defined as Code (Terraform)
  - dev/int/prod clusters
  - Production ready hardened OS
  - Disaster Recovery

- Governance

  - Namespaces, Policies, Entities, Auth Methods, Secrets Engines, etc... defined as Code (Terraform)
  - Leverage AWS Auth method to deploy vault infrastructure in pipelines

- On-Prem Integration

  - Integration with on-premise through an AWS Fargate

- AWS Integration

  - Using AWS Auth Method
  - In Jenkins pipelines

- Operations as AWS Lambdas

  - Defined as Code (terraform)
  - Modularised --> Each lambda is created through a high versatile module
  - Centrilised Lambda to Authenticate

- Observability and Monitoring

  - ELK Stack for Operational Logs
  - Splunk for metrics and telemetries with custom dashboards

#### AWS

- IAM, EC2 (Auto Scaling, Load Balancer, Security Groups, etc...), VPC, RDS, Lambda, API Gateway, SQS, SNS, DynamoDB, System Manager, Secrets Manager

#### ADF (AWS Deployment Framework)

- Multi-account

  - Managing hundreds of AWS accounts
  - Lots of pipelines deploying resources in each AWS accounts (for security, compliance, logging, etc...)
  - Networking deployed cross-account
  - Segregation of concerns

- Customised based on internal needs

- Integrated with terraform

  - Script to deploy terraform (instead of cloudformation)

#### SCM - GIT + BITBUCKET

- Workflow

  - Standardised git branches names and commit messages (linking Jira tickets)
  - Rebase for cleaning history
  - Trunk based Development
  - Pre-Commit / Pre-Merge hooks for standardisation enforcement (Yet Another Commit Checker)

- Bitbucket API Usage for automation

#### JENKINS

- CI/CD Tool

  - Every Repo is equipped with a Jenkinsfile
  - Parallelization of testing and modules' deployment
  - GitOps:

    - On Push and Pull-Request --> Testing
    - On Merge --> Testing + Deploy

- Jenkins Shared Library

  - Governance regarding security topics in pipelines
  - Abstraction from specific tools
  - Flexibility around changes in internal workflows

#### TERRAFORM

- Module creation to bundle resources, for reusability and for cleanness

#### ANSIBLE

- Codegen

  - Create Terraform files from Templates by targeting local inventories (i.e. for creation of Hashicorp Vault Namespaces)
  - Meta-Ansible --> Ansible creating Ansible inventory

#### WORK ENVIRONMENT - DOCKER

- Local Docker container

  - Ad Hoc with lots of useful tools (both created internally and taken externally)
  - Same as the one spinning in the Jenkins pipelines for consistency
