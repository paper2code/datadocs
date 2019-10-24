---
id: aws-management
title: Management
sidebar_label: Management
custom_edit_url: https://github.com/polakowo/datadocs/edit/master/docs/cloud/aws-management.md
---

## CloudWatch

<img width=100 src="/datadocs/assets/0_aws-cloudwatch.9e5ac55ae4.svg"/>

- Amazon CloudWatch is a monitoring service for AWS resources and applications.
    - CloudWatch can monitor most of the AWS.
- Dashboards:
    - Creates dashboards to see what is happing in the AWS environment.
    - Can be global or regional.
- Alarms:
    - Set alarms to notify you when particular thresholds have been hit.
- Events:
    - Helps you to respond to state changes in AWS resources.
- Logs:
    - Helps you to aggregate, monitor and store logs.
- Watching compute instances:
    - Host level checks metrics include CPU, network, disk and status check.
    - Standard monitoring = 5 minutes (default)
    - Detailed monitoring = 1 minute (additional costs may apply)
    - Allows creating performance alarms that trigger notifications.
- Compared to AWS CloudTrail:
    - CloudTrail monitors AWS Management Console actions and API calls.
    - CloudTrail records users who called AWS services, their IP addresses, and timestamps.
    - CloudWatch is used for monitoring performance, while CloudTrail is used for auditing.

## CloudFormation

<img width=100 src="/datadocs/assets/5_aws-cloudformation.9c30330994.svg"/>

- CloudFormation is a way of completely scripting your cloud environment.
- [AWS Quick Starts](https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&quickstart-all.sort-order=desc) is a bunch of CloudFormation templates to create complex environments easily.