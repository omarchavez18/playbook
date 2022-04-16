/*Modela los siguientes diagramas en objetos de JS:
Repo
name,author,language,numberOfCommits,stars,forks,issuesOpen,issuesClose
getTotalIssues,getGeneralInfo */

const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

//issue
/*
Issue./
+title
+repositoryNameAssociated
+status
+numberOfComments
+labels
+author
+dateCreated
+lastUpdated
+getTitleAndAuthor()
+getGeneralInfo() */

const issue = {
  title: "prueba de issue",
  repositoryNameAssociated: "Launch x repo",
  status: "en revision",
  numberOfComments: 15,
  labels: ["documentation", "duplicate", "finalizado"],
  author: "OmarChavez18",
  dateCreated: "01/04/22",
  lastUpdated: "14/04/22",
  getTitleAndAuthor() {
    return `El titulo es ${this.title} y su autor es ${this.author}`;
  },
  getGeneralInfo() {
    return `el nombre del repositorio es ${this.repositoryNameAssociated}, se encuentra en ${this.status}  y se creo el ${this.dateCreated}`;
  },
};
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

//PULLREQUEST
/*title, branchName, dateCreated, status, repositoryNameAssociated,, 
getStatus(), getTitleAndAutor() */

const pullRequest = {
  title: "first pullrequest",
  brachName: "master",
  dateCreated: "10/04/22",
  status: "review",
  repositoryNameAssociated: "lauchx/nodejs",
  getTitleAndAuthor() {
    return `the title of this PR is ${
      this.title
    } and his author is ${(this.author = "Omar")}`;
  },
  getStatus() {
    return `PR status: ${this.status}`;
  },
};
console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
