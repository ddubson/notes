---
title: ".NET Web API Build Pipeline"
date: 2019-07-12T13:12:54-04:00
draft: false
---

[<i class='fab fa-github'></i>  Repository with Azure Pipelines setup example](https://github.com/ddubson/pal-tracker-dotnet/blob/master/azure-pipelines.yml)

1. Navigate to [Azure Pipelines Dashboard](https://dev.azure.com)
2. Log in and create a new pipeline.
3. Go to **Pipelines -> Builds -> New Build Pipeline** 
4. Go through the wizard: **Connect to GitHub Yaml -> Select Repo -> ASP.NET Core Project -> Review**
5. On Review stage, refer to the Yaml below for how to approach creating a build artifact for a .NET app

> The artifact produced is placed into `drop` directory.

{{<highlight yaml>}}
# ASP.NET Core
# Build and test ASP.NET Core projects targeting .NET Core.
# Add steps that run tests, create a NuGet package, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/dotnet-core

trigger:
- master

pool:
  vmImage: 'ubuntu-latest'

variables:
  buildConfiguration: 'Release'

steps:
- script: dotnet build --configuration $(buildConfiguration)
  displayName: 'dotnet build $(buildConfiguration)'
- task: CopyFiles@2
  displayName: 'Copy Files to: $(Build.ArtifactStagingDirectory)'
  inputs:
    SourceFolder: '$(Build.SourcesDirectory)'
    Contents: |
     **/*
     !.git/**/*
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
- task: PublishBuildArtifacts@1
  inputs:
   pathtoPublish: '$(Build.ArtifactStagingDirectory)'
   artifactName: drop
{{</highlight>}}

Next step is attaching the created artifact in the `Build` stage to `Releases` pipeline.

Below is an example release stage configuration, deploying to PCF:

![releases-pipeline-setup](/img/azure-releases-pipeline-example.png)
