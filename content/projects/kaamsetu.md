---
slug: kaamsetu
title: "KaamSetu"
description: "A job-management app for small repair businesses that turns customer messages into structured service jobs and keeps a service history for every appliance. Built at the WeMakeDevs × AWS First Commit hackathon."
tech: ["Python", "FastAPI", "Next.js", "TypeScript", "Amazon Bedrock", "DynamoDB", "AWS Lambda"]
category: backend
featured: true
github: "https://github.com/Arjun13-git/KaamSetu"
demo: "https://kaam-setu-eta.vercel.app/"
date: "2026-09-17"
highlights:
  - "Amazon Nova Lite extracts a schema-validated service request from messages, including Hinglish"
  - "Customers and appliances are matched by deterministic rules, not by the model; unclear cases go to a person"
  - "Deployed on API Gateway, Lambda and DynamoDB, with a pytest suite of 700+ tests"
---

## Overview

Small service businesses — AC repair, electricians, plumbers — get work as WhatsApp messages and phone calls. KaamSetu reads the message, proposes a structured request, works out which customer and which appliance it refers to, and creates a job. Completed jobs are added to the appliance's service history, so the next complaint starts with context.

Safety wording such as "sparks" or "burning smell" is detected by plain code, independent of the model, and can only raise urgency.
