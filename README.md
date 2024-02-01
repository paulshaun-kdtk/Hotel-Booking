<a name="readme-top"></a>

<div align="center">
  <h1><b>The Hotel Booking</b></h1>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Hotel Booking](#-hotel-booking)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [ 🎯 Kanban board link ](#-kanban-board-)
  - [ 🚀 Live Demo link ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Hotel Booking

**The Hotel Booking** is hotel booking application.

## 🛠 Built With <a name="built-with"></a>
- ✅ React
- ✅ React-Redux
- ✅ Ruby
- ✅ Ruby on Rails
- ✅ Postgresql
- ✅ Linters

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Language</summary>
  <ul>
    <li>Ruby</li>
    <li>React</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- 🔰 **Authenticate users**
- 🔰 **Read all hotels**
- 🔰 **Read hotel description**
- 🔰 **Reserve a hotel**
- 🔰 **Choose a date/city to reserve**
- 🔰 **Admin can add/remove hotel**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Links -->

## Kanban board link <a name="kanban- board"></a>
- [Kanban board link](https://github.com/users/paulshaun-kdtk/projects/3)
- [Kanban board issue link](https://github.com/paulshaun-kdtk/Hotel-Booking/issues/14)

## Live Demo Link <a name="live-demo"></a>
- [Live Demo link](https://hotel-booking-frontend-7f76.onrender.com/)

### Note: In order to have admin rights in Live Link to add or delete hotels
- You can signIN with email:admin@gmail.com, password: 12345678

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

**To get a local copy up and running, follow these steps.**

1. Download or clone this [repostory](https://github.com/paulshaun-kdtk/Hotel-Booking.git).
2. Provide a modern web browser.

### API Docs:

API docs are created and are accessible by following steps:

Run below command in the terminal

    rails s

Paste this Link below in the Browser

    http://localhost:4000/api-docs/index.html

### Prerequisites

**In order to run this project you need:**

- ✔ Ruby installed in your machine. you can download it from [here](https://www.ruby-lang.org/en/downloads/)
- ✔ IDE or a code editor installed in your machine.
- ✔ IRB.
- ✔ Get Postgresql up and running. you can download it from [here](https://www.postgresql.org/download/windows/).
- ✔ [Git](https://git-scm.com/downloads) installed in your machine.
- ✔ Sign in or sign up to your [Github](https://github.com/) account.
- ✔ A professional editer such as [VS Code](https://code.visualstudio.com/download).
- ✔ An Updated web browser such as Google Chrome, you can download it from [here](https://www.google.com/chrome/).

### Setup

- Clone this [repository](https://github.com/paulshaun-kdtk/Hotel-Booking.git) to your desired folder:

- Run this command in your command line interface:

```sh
  cd [YOUR FOLDER]
  git https://github.com/paulshaun-kdtk/Hotel-Booking.git
  cd Hotel-Booking
  bundle install
  code .
```

- Update the database.yml with your database credentials under the development section


### Usage

- To run the **Backend** of project, execute the following command:

```sh
    bundle install
    rails db:create
    rails db:migrate
    rails s
```
- In case you find any error in starting backend that might be due to credentials.yml file so delete that file and then run the commands below:
```sh
    --open your gitbash terminal--
    EDITOR="code --wait" rails credentials:edit
    --then close your credentials file--
    bundle install
    rails db:create
    rails db:migrate
    rails s
```
- To run the **FrontEnd** of project, execute the following command:
```sh
    --open another gitbash terminal--
    cd frontend-react-app
    npm i
    npm start
```

### Deployment

**This project is deployed by the author, no permission for deployment by any other client.**

### Tests

- To run the **tests** of project, execute the following command in root folder:
```sh
    --open your gitbash terminal--
    rspec ./spec/integration
    rspec ./spec/models
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Muhammad Zunair khan**

- GitHub: [@zunairkhan811](https://github.com/zunairkhan811)
- Twitter: [@zunairkhan811](https://twitter.com/zunairkhan811)
- LinkedIn: [@mzunairkhan](https://www.linkedin.com/in/mzunairkhan)

👤 **Assem Zhorabay**

- GitHub: [@zhorabay](https://github.com/zhorabay)
- LinkedIn: [@zhorabay](https://www.linkedin.com/in/zhorabay)
- Twitter: [@zhorabay](https://twitter.com/AssemZhorabay)
- Wellfound: [@zhorabay](https://wellfound.com/u/assem-zhorabay)

👤 **Shaun Kudzai**

- GitHub: [@githubhandle](https://github.com/paulshaun-kdtk)

👤 **Obi Anthony**

- GitHub: [@megagig](https://github.com/megagig)
- Twitter: [@megagigsolution](https://twitter.com/megagigsolution)
- LinkedIn: [Anthony Obi](https://www.linkedin.com/in/obi-anthony-440a1430/)

👤 **Mumbere Habert**

- GitHub: [@mumbereh](https://github.com/mumbereh)
- Twitter: [@mumberehabert1](https://twitter.com/mumberehabert1)
- LinkedIn: [Mumbere Habert](https://www.linkedin.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Add start/end dates**
- **Add share the reservation button**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/paulshaun-kdtk/Hotel-Booking/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly drop a start ⭐️ for the [repository](https://github.com/paulshaun-kdtk/Hotel-Booking.git);

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

 We would like to express our heartfelt gratitude to **[Behance Design](https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign)** for the wonderful design which we used according to **[Creative Commons license of the design](https://creativecommons.org/licenses/by-nc/4.0/)**. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
