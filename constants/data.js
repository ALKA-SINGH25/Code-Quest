const fs = [
  {
    topic: "HTML & CSS",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2085/2085206.png",
    subTopics: [
      "Now that you have learnt HTML and CSS, you should be able to build static webpages. I recommend you to build as many test projects at each yellow step of the roadmap as possible to solidify what you learn.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Javascript",
    date: "20 days",
    icon: "https://cdn-icons-png.flaticon.com/128/16511/16511135.png",
    subTopics: [
      "At this point you should be able to add interactivity to your web pages using JavaScript.",
      "Learn about npm and external packages.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Git & Github",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
    subTopics: [
      "Now that you have learnt git and GitHub you should be ready to work with others. You should now setup your GitHub profile and push all the projects that you have built so far to your GitHub profile.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Tailwind CSS and React",
    date: "30 days",
    icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    subTopics: [
      "At this point you should be able to build a complete frontend application including:",

      "Structuring your webpages with HTML",
      "Styling your webpages with CSS",
      "Adding interactivity to your webpages with JavaScript",
      "Using the DOM API to manipulate your webpages",
      "Using the Fetch API to make HTTP requests",
      "Understand promises and use async/await syntax to write asynchronous code",
      "Installing and using external libraries with npm",
      "Version controlling your code with Git",
      "Pushing your code to GitHub",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Node.JS",
    date: "15 days",
    icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
    subTopics: [
      "At this point you should be able to build CLI applications using Node.js or whatever backend programming language you picked.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Databases (SQL or MONGODB)",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2906/2906274.png",
    subTopics: [
      "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations you can perform on any data when working with web applications, databases, and APIs.Now that you know about programming language and the databases, you should be able to build a simple CLI application that interacts with database. We haven’t talked about the APIs yet but you don’t need an API to practice CRUD operations. Here are some of the CLI applications you can build to practice CRUD operations:",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "RESTfull APIS's",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/8297/8297437.png",
    subTopics: [
      "REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Authenciation, Authorization & Security",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/10484/10484295.png",
    subTopics: [
      "At this point, you should have everything that you need to build a complete application.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Linux",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/518/518713.png",
    subTopics: [
      "Knowledge of UNIX is a must for almost all kind of development as most of the codes that you write is most likely going to be finally deployed on a UNIX/Linux machine. Linux has been the backbone of the free and open source software movement, providing a simple and elegant operating system for almost all your needs.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "AWS",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/16574/16574318.png",
    subTopics: [
      "WS has several services but you don’t need to know all of them.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Dev Ops",
    date: "30 days",
    icon: "https://cdn-icons-png.flaticon.com/128/14955/14955869.png",
    subTopics: [
      "If you remember, earlier in the roadmap, you manually logged into the AWS console and had to setup the services. Now that you know terraform, go ahead and automate the process of creating the infrastructure for your application using terraform and with that your deployments will be fully automated i.e., you should have:Infrastructure setup using terraform, Provisioning using Ansible, CI/CD using GitHub Actions,Monitoring using Monit",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Completed",
    date: "",
    icon: "https://cdn-icons-png.flaticon.com/128/7626/7626666.png",
    subTopics: [
      "And that is it! You have successfully completed the roadmap and are now a full-stack developer. Congratulations! 🎉",
    ],
    iconBg: "#E6DEDD",
  },
];

const dops = [
  {
    topic: "Learn a Language (Python)",
    date: "10 days",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    subTopics: [
      "It doesn’t matter what language you pick, but it is important to learn at least one. You will be able to use that language to write automation scripts.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Operating system",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/9614/9614763.png",
    subTopics: [
      "An Operating system serves as a bridge between a computer’s user and its hardware. An operating system’s function is to offer a setting in which a user can conveniently and effectively run programmes. ",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic:
      "Live in terminal (Process and Performance Monitoring, Bash Scripting)",
    date: "4 days",
    icon: "https://cdn-icons-png.flaticon.com/128/4248/4248402.png",
    subTopics: [
      "A terminal is simply a text-based interface to the computer, it is used to interact with your computer system via CLI (command line interface).",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Git & Github",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
    subTopics: [
      "Version control/source control systems allow developers to track and control changes to code over time. These services often include the ability to make atomic revisions to code, branch/fork off of specific points, and to compare versions of code. They are useful in determining the who, what, when, and why code changes were made.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Containers (Docker)",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
    subTopics: [
      "Containers are a construct in which cgroups, namespaces, and chroot are used to fully encapsulate and isolate a process. This encapsulated process, called a container image, shares the kernel of the host with other containers, allowing containers to be significantly smaller and faster than virtual machines.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Cloud Providers (AWS, Azure)",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/16574/16574318.png",
    subTopics: [
      "Cloud providers provide a layer of APIs to abstract infrastructure and provision it based on security and billing boundaries. The cloud runs on servers in data centers, but the abstractions cleverly give the appearance of interacting with a single “platform” or large application.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Networking Protocols",
    date: "4 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2177/2177382.png",
    subTopics: [
      "As a DevOps engineer you will need to understand the basics of networking protocols, how they work, and how they are used in the real world. To get you started, you should learn about, TCP/IP, HTTP, HTTPS, FTP, SSH, SMTP, DNS, DHCP, NTP.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Serverless (AWS Lamda, Cloudflare)",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/15226/15226312.png",
    subTopics: [
      "At this point, you should have everything that you need to build a complete application.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Infrastructure Provisioning (Terraform)",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518926.png",
    subTopics: [
      "Terraform is an extremely popular open source Infrastructure as Code (IaC) tool that can be used with many different cloud and service provider APIs. Terraform focuses on an immutable approach to infrastructure, with a terraform state file center to tracking the status of your real world infrastructure.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Configuration Management (Ansible)",
    date: "7 days",
    icon: "https://www.ansible.com/images/project-logos/ansible-core.svg",
    subTopics: [
      "Ansible is an open-source configuration management, application deployment and provisioning tool that uses its own declarative language in YAML. Ansible is agentless, meaning you only need remote connections via SSH or Windows Remote Management via Powershell in order to function",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "CI/CD (Github Actions & Jenkins)",
    date: "10 days",
    icon: "https://www.svgrepo.com/show/306262/jenkins.svg",
    subTopics: [
      "CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment. CI/CD is a solution to the problems integrating new code can cause for development and operations teams.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Infrastructure Monitoring (Prometheus, Grafana)",
    date: "10 days",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUxjtaFJ76OcfcQZ9B-Nose2CB0tLB6HutA&s",
    subTopics: [
      "Monitoring refers to the practice of making the performance and status of infrastructure visible. This section contains common tools used for monitoring.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Container Orchestration (Kubernetes)",
    date: "20 days",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    subTopics: [
      "Containers are a construct in which cgroups, namespaces, and chroot are used to fully encapsulate and isolate a process. This encapsulated process, called a container image, shares the kernel of the host with other containers, allowing containers to be significantly smaller and faster than virtual machines.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Completed",
    date: "",
    icon: "https://cdn-icons-png.flaticon.com/128/7626/7626666.png",
    subTopics: [
      "And that is it! You have successfully completed the roadmap and are now a DevOps Engineer. Congratulations! 🎉",
    ],
    iconBg: "#E6DEDD",
  },
];

const ad = [
  {
    topic: "Learn a language (Kotlin or Java)",
    date: "20 days",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-kotlin-2038873-1720086.png?f=webp&w=512",
    subTopics: [
      "”The Fundamentals” of Android primarily concentrate on 5 components; Activities, Services, Broadcast Receivers, Content Providers, and Intents.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Git & Github",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
    subTopics: [
      "Version Control is a system that records changes to a file or set of files over time so that you can recall specific versions later. An essential tool for software development, it helps to track changes, enhance collaboration, and manage different versions of a project. ",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "App Components",
    date: "15 days",
    icon: "https://cdn-icons-png.flaticon.com/128/7444/7444339.png",
    subTopics: [
      "Android apps are primarily made up of five different types of components:",

      "Activities: These are individual screens that a user can interact with. Any UI action like touching a button or swiping a screen will usually take place within an activity.",

      "Services: Unlike activities, services run in the background and don’t have a user interface. They’re used for repetitive or long running operations, like playing music or pulling in a feed of data from a server.",

      "Broadcast Receivers: These are event listeners. The Android operating system uses them to respond to system-wide events.",

      "Content Providers: They manage and share app data with other apps installed on the device. For security, data is not generally shared across apps.",

      "Intents: These serve as messages or commands to the Android system. They’re used to signal to the Android system that certain events have occurred.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Interface and Navigation",
    date: "15 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2462/2462837.png",
    subTopics: [
      "Jetpack Compose is a modern toolkit for building native Android UI. It simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin APIs.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Architecture and Design Patterns",
    date: "15 days",
    icon: "https://cdn-icons-png.flaticon.com/128/1589/1589642.png",
    subTopics: [
      "In Android, Design Architecture refers to structuring the code in a way that increases its readability, maintainability, and testability. There are several ways to design architecture like Model-View-Controller (MVC), Model-View-Presenter (MVP), Model-View-ViewModel (MVVM), and Model-View-Intent (MVI).",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Databases",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2906/2906274.png",
    subTopics: [
      "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations you can perform on any data when working with web applications, databases, and APIs.Now that you know about programming language and the databases, you should be able to build a simple CLI application that interacts with database. We haven’t talked about the APIs yet but you don’t need an API to practice CRUD operations. Here are some of the CLI applications you can build to practice CRUD operations:",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Networking",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2103/2103633.png",
    subTopics: [
      "In Android, the Network component offers vital capabilities that enable communication and interaction among users, between users and remote servers, and between users and cloud services.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Asynchronism",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/15433/15433682.png",
    subTopics: [
      "Asynchronism in Android is a practice that defines operations, which can run independently from the main operation without following the program’s linear flow.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Debugging",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/1541/1541402.png",
    subTopics: [
      "”Debugging” is a critical step in the app development process. In Android development, it includes identifying and fixing errors, or bugs, in your code. You can debug Android apps using several tools and techniques.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Linting",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/5972/5972097.png",
    subTopics: [
      "Linting in Android is a tool that analyzes the source code of your application to identify potential errors, bugs, stylistic errors, and suspicious constructs.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Testing",
    date: "10 days",
    icon: "https://cdn-icons-png.flaticon.com/128/1205/1205526.png",
    subTopics: [
      "Android Testing is a crucial part of the app development process. It involves validating the functionality, performance, usability, and consistency of your app before deploying it to the Play Store.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Completed",
    date: "",
    icon: "https://cdn-icons-png.flaticon.com/128/7626/7626666.png",
    subTopics: [
      "And that is it! You have successfully completed the roadmap and are now a android developer. Congratulations! 🎉",
    ],
    iconBg: "#E6DEDD",
  },
];

const bc = [
  {
    topic: "Basic Blockchain Knowledge",
    date: "10 days",
    icon: "https://cdn-icons-png.flaticon.com/128/1171/1171570.png",
    subTopics: [
      "A blockchain is a decentralized, distributed, and oftentimes public, digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "General Blockchain Knowledge",
    date: "10 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2152/2152539.png",
    subTopics: [
      "Blockchain systems vary considerably in their design, particularly with regard to the consensus mechanisms used to perform the essential task of verifying network data.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Oracles",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/3985/3985639.png",
    subTopics: [
      "A blockchain oracle is a third-party service that connects smart contracts with the outside world, primarily to feed information in from the world, but also the reverse. Information from the world encapsulates multiple sources so that decentralized knowledge is obtained.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Smart Contracts",
    date: "30 days",
    icon: "https://cdn-icons-png.flaticon.com/128/6229/6229280.png",
    subTopics: [
      "A smart contract is a computer program or a transaction protocol that is intended to automatically execute, control or document legally relevant events and actions according to the terms of a contract or an agreement.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Smart Contract Frameworks",
    date: "15 days",
    icon: "https://cdn-icons-png.flaticon.com/128/16638/16638627.png",
    subTopics: [
      "Building a full-fledged dapp requires different pieces of technology. Software frameworks include many of the needed features or provide easy plugin systems to pick the tools you desire.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Security",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/6865/6865349.png",
    subTopics: [
      "Smart contracts are extremely flexible, capable of both holding large quantities of tokens (often in excess of $1B) and running immutable logic based on previously deployed smart contract code. ",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Management Platforms (Open Zepplin)",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/3666/3666234.png",
    subTopics: [
      "Managing smart contracts in a production environment (mainnet) can prove difficult as users must keep track of different versions, blockchains, deployments, etc. Using a tool for this process eliminates a lot of the risk that comes with manual tracking.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Version Control Systems",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
    subTopics: [
      "Version control/source control systems allow developers to track and control changes to code over time. These services often include the ability to make atomic revisions to code, branch/fork off of specific points, and to compare versions of code. They are useful in determining the who, what, when, and why code changes were made.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "dApps",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/13139/13139782.png",
    subTopics: [
      "A decentralized application (dApp) is an application that can operate autonomously, through the use of smart contracts that run on a blockchain. Like traditional applications, dApps provide some function or utility to its users.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Building for Scale (Validium)",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2664/2664068.png",
    subTopics: [
      "Due to the limited number of transactions-per-second (TPS) built-in to blockchains, a number of alternative mechanism and technologies have emerged to aid the scaling of blockchain dApps.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Completed",
    date: "",
    icon: "https://cdn-icons-png.flaticon.com/128/7626/7626666.png",
    subTopics: [
      "And that is it! You have successfully completed the roadmap and are now a blockchain developer. Congratulations! 🎉",
    ],
    iconBg: "#E6DEDD",
  },
];

const aids = [
  {
    topic: "HTML & CSS",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2085/2085206.png",
    subTopics: [
      "Now that you have learnt HTML and CSS, you should be able to build static webpages. I recommend you to build as many test projects at each yellow step of the roadmap as possible to solidify what you learn.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Javascript",
    date: "20 days",
    icon: "https://cdn-icons-png.flaticon.com/128/16511/16511135.png",
    subTopics: [
      "At this point you should be able to add interactivity to your web pages using JavaScript.",
      "Learn about npm and external packages.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Git & Github",
    date: "2 days",
    icon: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png",
    subTopics: [
      "Now that you have learnt git and GitHub you should be ready to work with others. You should now setup your GitHub profile and push all the projects that you have built so far to your GitHub profile.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Tailwind CSS and React",
    date: "30 days",
    icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    subTopics: [
      "At this point you should be able to build a complete frontend application including:",

      "Structuring your webpages with HTML",
      "Styling your webpages with CSS",
      "Adding interactivity to your webpages with JavaScript",
      "Using the DOM API to manipulate your webpages",
      "Using the Fetch API to make HTTP requests",
      "Understand promises and use async/await syntax to write asynchronous code",
      "Installing and using external libraries with npm",
      "Version controlling your code with Git",
      "Pushing your code to GitHub",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Node.JS",
    date: "15 days",
    icon: "https://cdn-icons-png.flaticon.com/128/919/919825.png",
    subTopics: [
      "At this point you should be able to build CLI applications using Node.js or whatever backend programming language you picked.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Databases (SQL or MONGODB)",
    date: "5 days",
    icon: "https://cdn-icons-png.flaticon.com/128/2906/2906274.png",
    subTopics: [
      "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations you can perform on any data when working with web applications, databases, and APIs.Now that you know about programming language and the databases, you should be able to build a simple CLI application that interacts with database. We haven’t talked about the APIs yet but you don’t need an API to practice CRUD operations. Here are some of the CLI applications you can build to practice CRUD operations:",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "RESTfull APIS's",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/8297/8297437.png",
    subTopics: [
      "REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Authenciation, Authorization & Security",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/10484/10484295.png",
    subTopics: [
      "At this point, you should have everything that you need to build a complete application.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Linux",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/518/518713.png",
    subTopics: [
      "Knowledge of UNIX is a must for almost all kind of development as most of the codes that you write is most likely going to be finally deployed on a UNIX/Linux machine. Linux has been the backbone of the free and open source software movement, providing a simple and elegant operating system for almost all your needs.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "AWS",
    date: "7 days",
    icon: "https://cdn-icons-png.flaticon.com/128/16574/16574318.png",
    subTopics: [
      "WS has several services but you don’t need to know all of them.",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Dev Ops",
    date: "30 days",
    icon: "https://cdn-icons-png.flaticon.com/128/14955/14955869.png",
    subTopics: [
      "If you remember, earlier in the roadmap, you manually logged into the AWS console and had to setup the services. Now that you know terraform, go ahead and automate the process of creating the infrastructure for your application using terraform and with that your deployments will be fully automated i.e., you should have:Infrastructure setup using terraform, Provisioning using Ansible, CI/CD using GitHub Actions,Monitoring using Monit",
    ],
    iconBg: "#E6DEDD",
  },
  {
    topic: "Completed",
    date: "",
    icon: "https://cdn-icons-png.flaticon.com/128/7626/7626666.png",
    subTopics: [
      "And that is it! You have successfully completed the roadmap and are now a full-stack developer. Congratulations! 🎉",
    ],
    iconBg: "#E6DEDD",
  },
];

export { fs, ad, dops, bc, aids };
