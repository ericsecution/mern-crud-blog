# Full-Stack (MERN) Blog App

## Intro

Welcome to my Blog App (with CRUD operations and automated testing). This App will be using the MERN stack, and was made to show my experience and understanding working with a NoSQL database management system, like MongoDB.

Feel free to fork and/or follow along.

What I recommend is to fork it so that you have a working copy, and go ahead and, duplicate it and `git clone <link-to-repo>` the duplicate.

That way, you're free to experiment a bit on not only your own repo(s), but also on your own machine at home / school / where ever.

However you go about it, this will give you a simple ***MERN***-stack Blog App that's got fully operational CRUD commands, and working API endpoints.

Here's some screenshots of Postman (which is free, and you'll want to **[download here](https://www.postman.com/downloads/)**, if you don't already have it + watch a YouTube tutorial or two, to familiarize yourself with it. Super-simple, but also going to *feel* impossible, if you don't know how to use it).

Initial format for your JSON object:

```json
{
  "title": "Blog Post's Title",
  "body": "The actual Post itself. All the Headings, words, sentences, paragraphs, etc.\n\n##Have Fun With It\n\nI just used escape characters, or, if I \"needed\" to add-in certain formatting, I just added it in, um, in here.\n\n### Maybe I Wanted To Create A Heading?\n\nThen that's what I did.",
  "image": "IMGurlsbasicallyfrom.unsplashes-api.com/photo/12345=numbers-and-stuff"
}
```

The names for the CRUD Commands in Postman differ slightly:

- Create = POST
- Read = GET
- Update = PUT
- Delete = DELETE (*yeah, same*)

So, I used Postman (as one does) to test out my API + the functions that handle different aspects of my CRUD operations:

- getAllBlogPosts()

- createNewBlogPost()

- getBlogPostById(id)

- updateBlogPostById(id)

- deleteBlogPostById(id)

&nbsp;

## Successful Postman Test Results

### Create a New Blog Post (POST)

*Before* hitting 'Send':

![pre-POST (i.e. before hitting 'Send') for the mern-crud-blog app's createNewBlogPost function Postman - getting ready](https://github.com/ericsecution/mern-crud-blog/assets/109568180/3995ca18-b306-4e46-976e-1d91a5df4ffa)

And, after hiting 'Send', it gets it's ***id*** returned:

![After POST for the mern-crud-blog app's createNewBlogPost function - Postman results](https://github.com/ericsecution/mern-crud-blog/assets/109568180/067a704c-c067-4543-90a4-ee7fbded2fb3)

You can see the 'id' highlighted there (above).

### Get All Blog Posts (GET)

![GET mern-crud-blog app's getAllBlogPosts function Postman results](https://github.com/ericsecution/mern-crud-blog/assets/109568180/6e5ecf4e-0d87-4067-adb0-a9d0349306ad)

### Get Blog Post by It's id Number (GET)

![GET mern-crud-blog app's getBlogPostById function Postman results](https://github.com/ericsecution/mern-crud-blog/assets/109568180/a34063a7-bd65-4932-b7ac-7b97ab11715c)

## Update (i.e. Edit) Blog Post by id (PUT)

Change the url (i.e. the API endpoint) in Postman that you're sending to:

`localhost:3001:/api/blogs/<id number>`

![PUT mern-crud-blog app's updateBlogPostById function Postman results](https://github.com/ericsecution/mern-crud-blog/assets/109568180/a9822001-316f-4833-92c8-1d81614ae42f)

Updated part highlighted.

Note: you include the entire JSON object (i.e. "title", "body", and "image" url) in the Update / PUT request as well.

## Delete Blog Post by id (DELETE)

I created some garbage Post, for the purpose of testing out the 'deleteBlogPostById' function:

![Forgettable Post](https://github.com/ericsecution/mern-crud-blog/assets/109568180/f14c8ad3-80d4-41d5-ac26-f754cf74585d)

No JSON object needed for DELETE, just the API endpoint url and the 'id' number of the Blog Post that you want to Delete.

- Always double-check your id when deleting *anything*.

Here's the API endpoint again (including the prior successful POST's id), similar to how we did it with PUT and the GET (by id):

![Priming the pump for the DELETE of this particular Blog Post](https://github.com/ericsecution/mern-crud-blog/assets/109568180/67112a39-5c21-4aa1-9f4a-72552448784b)

And then here(below) is the Success message, showing that we've successfully deleted the Post:

![Successfully using the DELETE command in Postman, to test the deleteBlogPostById function in the mern-crud-blog repo](https://github.com/ericsecution/mern-crud-blog/assets/109568180/c3116ec6-9b25-490f-a083-ac4d5cb2ba13)

So, there you have it, Success messages (i.e. the '200 OK' response back) for POST, GET, PUT, and DELETE.

Using this code as a template, you should have a working MERN CRUD Blog app 'starter-kit', at the ready.

You have my permission to go make something amazing.

&nbsp;

---

## Wtf... Wdym 'MERN'?

Gotta love acronyms.

Seriously. If you're going to be a Developer:

- You've Got to Love Acronyms, or, "YGtLA" *(is what I always say)*.

- Ok, I made that one up.

However, peep these, my friend, they're all used here:

- CRUD. MERN. API. IDE. JSON.

OOP.

SOLID.

Worth reviewing?

- The **SOLID** principle, which you may have heard when reading about / being taught **Object-Oriented Programming** principles. It's really **5 Principles** that help to keep software systems scalable and easier to maintain.

  - **S** - **The Single Responsibility** Principle encourages each class or module to have only one reason to change, making it easier to understand and maintain.

  - **O** - **The Open/Closed Principle** suggests that entities should be open for extension but closed for modification, allowing new functionality to be added without altering existing code.
  
  - **L** - **The Liskov Substitution Principle** promotes the use of inheritance in a way that derived classes can be substituted for their base classes without affecting the correctness of the program.

  - **I** - **The Interface Segregation Principle** states that clients should not be forced to depend on interfaces they don't use.
  
  - **D** - The **Dependency Inversion Principle** advocates depending on abstractions rather than concrete implementations, enabling flexibility and decoupling between different components of the system.

### Ok, So Back to the Lecture at Hand

#### MERN

Yeah, (**M**)ongoDB + (**E**)xpress.js + (**R**)eact.js (**N**)ode.js = **MERN**

Make sense?

What's that you say? You 'have a *6th* sense, and *that* sense is: the overwhelming feeling that you're crazy to think you'd ever understand this, and yes, it does increase *that* sense' for you?

Heh, I can relate.

You're probably not "crazy", just ignorant.

![just-ignorant](https://github.com/ericsecution/mern-crud-blog/assets/109568180/bf1d0b6c-8a92-47b6-9a11-5c7d414cbccc)

And inexperienced. Well, and... idk if it's something that you ate(?), but you kinda smell funny too. Don't forget the food chain!

No problem--all fixable. Keep studying. Actually *read* the docs. Keep practicing, searching online for answers, find a mentor, take a shower (although, if you're being mentored in-person, maybe take the shower prior? Don't be afraid: you can control the heat of the water, and you'll have some of your best thinking sessions in there!).

### What's The Solution? The Quick Fix?

There's no "quick" fix, but there is a "quickest" fix.

Keep after it. Hunt down 'understanding' as if it was meat, and your Family was starving. And, I mean, if you want me to make that analogy, it's actually not that far off, right?

Or... you might just *be* ~~stupid~~ crazy.

But hey, the good news?

Knowing is half the battle!

![knowing-is-half-the-battle](https://github.com/ericsecution/mern-crud-blog/assets/109568180/ff7b0d0d-67e5-4ae8-89f1-672ddea2f935)

And even that's ok.

It'll just take a little longer to 'get it'.

But '*get it*' you shall, my friend.

![quick-fix](https://github.com/ericsecution/mern-crud-blog/assets/109568180/dff05716-b988-443e-9b79-c82a19edec9c)

---

&nbsp;

The MERN stack will allow you to become a developer superhero aka a ***full stack developer***.

If you're ready to get started, we need to make sure we've got a few things installed:

`node -v`

`npm -v`

`mongodb -v`

`mongoose -v`

If not, go ahead and `npm install <whatever-you-don't-have>`

If you don't have **Node.js**, however, you may wish to **[visit the npm docs here first](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)**.

I also used **nodemon** for development, and kept it's default for auto-restart of the node app, so I could troubleshoot and console.log right into my Terminal.

`npm install nodemon`

#### From within my `package.json` file"

```json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "mocha --timeout 10000"
  },
```

```json
 "homepage": "https://github.com/ericsecution/mern-crud-blog#readme",
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongodb": "^5.7.0",
    "mongoose": "^5.13.20",
    "npm": "^9.8.1"
  },
  "devDependencies": {
    "chai": "^4.3.7",
    "chai-http": "^4.4.0",
    "mocha": "^10.2.0"
  }
```

### What About Testing?

Yeah, as you can see above, I'm using **[Chai for Testing - Click Here for more info](https://www.chaijs.com/)**:

  `npm install chai`

What we're doing, essentially, is using **[the Mocha testing framework](https://mochajs.org/)**

  `npm install mocha`

And so that adds in **Mocha** along with the Chai assertion library, which is configured to be used with **[the chai-http plugin](https://www.chaijs.com/plugins/chai-http/)**.

  `npm install chai-http`

In order to keep my testing data separate from my App data (and since MongoDB only allows one database per *Project* for Free-tier Atlas accounts), I created a separate ***Collection*** within my MongoDB Atlas cluster, `ests_dev_data`.

I then essentially mirrored the flow of data, but for testing purposes (with the aim to keep it separate both within the codebase, as well as the database).

That *"flow"* goes from:

- *models*
- to *services*
- *controllers*
- *routes*
- *app*
- *database*
- *repeat*

That being said, we have a `./models/TestDevData.js` file that provides schema for the *Test* Blog Posts.

Then, we utilize the **Mongoose** library's functions (i.e. `find()`, `create()`, `findById()`, `findByIdAndUpdate()`, and `findByIdAndDelete()`) within the `./services/TestDevDataServices.js` file, using **Object Data Modeling** (**ORM**) which assists **Node.js** in communicating with the **MongoDB** database (specifically, the 'tests_dev_data' ***Collection***, in this case, that I needed to 'Create' via the 'Collections' tab over in my **MongoDB Atlas** account).

From there, you can start with the tests that I've created and/or just add more (see their websites above, for a number of different examples and walk-thrus), but for a basic setup, this should allow you to create your tests as you go.

![All chai tests passed, nice!](https://github.com/ericsecution/mern-crud-blog/assets/109568180/1ad2579f-dc8b-4773-b7e1-2e6f54bd92fa)

If you add-on new features for your Blog app, add-on the Test(s) as well.

Simple and easy enough, right?

---

&nbsp;

### MongoDB Atlas

You don't *have* to do this, but (as mentioned already) I also created an Atlas account (it's free--or, rather, there's a free *option*, which is what I used). If you want to as well, just **[head over to MongoDB Atlas](https://www.mongodb.com/)**, and then create an account and a database "cluster", in order to use their server to host the database.

&nbsp;

### Let's Get This MERN Stack Blog App Started

Ahh yes, the **MERN** stack. Simple, but there's *a lot* that you could learn about it, so it's kind of a best-of-both-worlds in that it's easy to get started, and there's a lot of room for growth, increased skill, and a lot you can do with it.

Maybe that's a "best-of-*all*-worlds" type situation? 🤔

Idk.

Anyway, it came about as a (relatively) modern solution to the **object-oriented design** foundation of a **3-tier architecture** in software development--which (you guessed it!) has 🥁 ... 3 *tiers*, made up of our logical *layers*.

### Layers vs Tiers - "Wait, so... which is which?"

Good question. If you believe the majority of people on dev forums, you'll sometimes limit your perspectives to one comment supported by more than a handful of other people:

> *"... everyone I've met in software world uses these two terms interchangeably as if they are exactly the same."*

Unless you're addicted to the derisive laughter of a ~~nerd~~ engineer, you probably *don't* want to quote that in your next post-work Slack sessions, trying to sound smart.

What good will sounding smart do either of us anyway?

Better just to keep plugging away, be humble, ask questions, ask for help, learn, help others, build up our skills and understanding, and then *be* smart, ya?

I've heard it described (paraphrasing, so dyor, study code, style guides, read books, etc) as:

#### The Difference Between Layers and Tiers

- **Layers** refer to the logic that's literally in your code, how it's structured: folders, files, functions--a logical separation of the code itself.
  - A presentation layer (your UI)
  - a business logic layer (where the processing is done)
  - and a data access layer (the interactions in your code with your database).

 These, of course, all exist within the same application, yeah?

- **Tiers** represent the physical machines or structures that code is fed through:
  - a Client tier, where the application is presented (like a user's computer)
  - an application server (where your business logic runs through)
  - and a database tier (where the actual data is stored).

#### The Stage vs The Theater analogy

**Layers**: Consider a stage with different structured set pieces as backdrops, one stacked behind one another. Each backdrop (or layer) sets a different scene, but they are all part of the same performance's stage setup.

**Tiers**: Now, think of multiple stages in a theater complex. Each stage (or tier) hosts a different play or performance, operating independently of the others.

#### Ok, So What's What In Our MERN Stack?

1. **The Presentation Layer** - aka: 'Web', 'Interface', 'UI', 'Client' Layer - responsible for handling user interactions and displaying information to the users. **React**'s often used to build the user interfaces, and handles components rendering, state management, and user interactions.
2. **The Application Layer** - aka: 'Logic', 'Business', 'Business Logic', 'Transaction' (and prob more) - **Express** and **Node** act as the intermediaries between the presentation layer and the data layer. They're where we'll contain the business logic and handle requests from the Presentation Layer, as well as communicate with the Database Layer to retrieve and update data.
3. **The Database Layer** - aka: 'Data', 'Data Access' Layer - **MongoDB** will be used to manage the storage and retrieval of data. And, idk why, but this is where I tend to geek out, so please do things your own way. I'm sure it'll be much easier.

#### "What About PERN? I Thought You Said You Love PostgreSQL?"

Yes, it's true. I do love PostgreSQL. PERN's cool too. 🐘

However, with **postgres**, we're not exclusive. Feel free to fire up your **pgAdmin4** and have at it.

We have, ahem, an *open* relationship. Very, very *open*. 👀

What? No! 😦 Where'd you get that?

I mean, I like working with *open-source* applications.

I chose MongoDB here because it's a solid open-source app that also works well with Atlas, MongoDB's cloud-based database service. Atlas is a fully-managed system that allows us to deploy, manage, and scale MongoDB databases on the cloud (i.e. without needing to setup and maintain a server to handle hosting for the database).

### "Sounds Great! But, Idk How to Tie My Shoes" 🫤

Well, I'd suggest you go velcro, but... that might be a little dangerous. Let's stick with laceless or just flip-flops for now.

In the meantime, check out **[The MongoDB FAQ and start here](https://www.mongodb.com/docs/manual/faq/fundamentals/)**.

When you're done there, **[go here](https://www.mongodb.com/mern-stack)**.

😐 🕛 🕜 🕒 😐

Did you read through all of it?

No? You just, 'Skimmed some, kinda got the gist'...?

🤨

Alright, no worries.

We'll learn *(mern2earn)* by doing.

## Why MERN?

MERN is a popular full-stack combination of technologies that have a proven track-record of success--meaning: there's a lot of apps built this way out there. My choice, contrary to my usual M.O., isn't very creative.

- it's a simple Blog where the user can (C)reate a Post, (R)ead a Post, (U)pdate a Post, and (D)elete a post, giving us our standard full-stack litmus test of "CRUD" operations
- there's power in simplicity though, and I'm hopeful that you (and I) can use this particular *"MERN stack App"* as a boiler-plate template, and that we'll then be freed up to build something more creative

## Paying it Forward

- my goal is to empower us (you and me)--if you're a builder(, creator, developer, etc)--to both:
  - have a starting point that lends itself easily to creative expression
  - and in the hope that it will inspire you to build something that also helps people build something (a ripple-effect approach to learning)
  - and then to do it all in a seamless and intuitive fashion
  
  Easy enough?

- this App should be practical enough too, ya?
  - again: it's a Blog
  - That doesn't mean that it can't solve real-world problems
  - by using the MERN stack, it should be user-friendly and give you additional flexibility for a variety of use-cases

&nbsp;

Since I began developing (more seriously) last year (incl attending and graduating from a Full-Stack Developer Bootcamp), I've been on a non-stop learning endeavor.

This is *not* uncommon for any developer (i.e. the need for continual self-devlopment, in addition to gaining understanding), and that would've never been possible without the help of other (super-patient) people.

- Someone taught me how to do this, and so I can hopefully pass that along to you as well.

- The good news is that, because the MERN stack is so popular and prevalent, it's not difficult to locate that (often-required) help.

## Let's Connect

I'm also available here or over on LinkedIn, if you want to chat about this Project, the MERN stack, development (*use cases, crypto, gamedev, etc*) and/or web 3.

Let's get this party started and ...

"Learn to MERN before we learn to earn." 🤑

### Contact Me

- GitHub: **[ericsecution](https://github.com/ericsecution)**

- LinkedIn: **[Eric Mangin](https://www.linkedin.com/in/ericmangin/)**

- Gmail: **[EricPaulDev@gmail.com](EricPaulDev@gmail.com)**

---

#### Additional Notes

### MongoDB Atlas Setup

#### Basic Selections

It'll ask you what 'type' of application you're building, with the drop-down options being:

- Sales Order Data
- Inventory or Product Catalog
- Content or Task Management
- AI/ML
- Time Series Data
- Real-time Messaging
- Mobile App
- Microservices or APIs
- I'm just Exploring
- Other

  - I chose *'Content or Task Management'*

You can select your Pricing / Performance tier, but for most of us, for now, just start out with the ($Free-99) "M0" tier, which has less storage, slower (shared) access, and so on.

You can also select your 'Provider':

- AWS (Amazon Servers)
- Google Cloud
- Azure (Microsoft)

I went with AWS for no other reason than it was already selected as the default.

You can also select your location (i.e. where your data center is housed).

I left the default / 'Recommended' option selected here as well (for me, the Eastern U.S., in Virginia).

*Tags*
*opt: scroll down (below) to the **Resource Tags** section, if you want a list of potential resource tags:*

- *used within the MongoDB Atlas cluster to help you categorize, label, and group your MongoDB collections better*
- *and you're also able to tag documents with your Blog-related resources more effectively*
- *this can also help you to keep your codebase more composable*
- *again, optional, but trust: I've seen what happens the other way, with a, "Let's just see how this all shakes out at the end!" approach (spoiler: it's not good)*.

### Setup (cont)

- It asks for a database "cluster" name.
- I named mine: ***LearnMERN2Earn*** 🤠

**Congratulations!** 🙌

👉 You've setup your MongoDB Atlas cluster (holla!).

#### Authenticate Your Connection + Add Your IP Address

- Then, unless you're looking to customize something, or are coming over from another cloud (i.e. a server running on AWS, Google Cloud, or Azure), you'll just kinda click through.
- It will auto-create a username and password (you can change yours if you want).
- Click 'Create User'

#### Add Your IP Addy to the Access List

- MongoDB Atlas uses an IP Access List to control which IP addresses are allowed to connect to your cluster.
- Click on 'Add My Current IP Address' button to automatically add your current IP address to the access list. This way, you'll be able to connect to your cluster from your current location.
- You can also add a description (I just left whatever default was in there).
- Click "Finish and Close"

At this point, you should be seeing a side-menu with various options under these 3 headings:

- **Deployment**
- **Services**
- **Security**
  
These options will allow you to manage different aspects of your MongoDB Atlas setup, including configuring the cluster, accessing logs, managing users, setting up backups, etc.

## Resource Tags

|  LearnMERN2Earn | MongoDB Atlas Cluster Resource Tags |
|----|----|

| Key | Value |
| :----: | :----: |
| users | resource_users |
| authors | resource_authors |
| posts | resource_posts |
| comments | resource_comments |
| categories | resource_categories |
| tags | resource_tags |
| likes | resource_likes |
| sharing | resource_sharing |
| user_profiles | resource_user_profiles |
| settings | resource_settings |
| seo | resource_seo |
| analytics | resource_analytics |
| headers | resource_headers |
| pages | resource_pages |
| sidebar | resource_sidebar |
| footer | resource_footer |
| menu | resource_menu |
| rss_feed | resource_rss_feed |
| forms | resource_forms |
| search_index | resource_search_index |
| popups | resource_popups |
| chatbot | resource_chatbot |
| breadcrumbs | resource_breadcrumbs |
| archive | resource_archive |
| reverse_chronological | resource_reverse_chronological |
| datetime | resource_datetime |
| keywords | resource_keywords |
| ui | resource_ui |
| excerpts | resource_excerpts |
| related_posts | resource_related_posts |
| featured_posts | resource_featured_posts |
| wysiwyg_editor | resource_wysiwyg_editor |
| newsletter | resource_newsletter |
| plugins | resource_plugins |
| themes | resource_themes |
| faqs | resource_faqs |
| guest_bloggers | resource_guest_bloggers |
| contests | resource_contests |
| products | resource_products |
| events | resource_events |
| stats | resource_stats |
| quotes | resource_quotes |
| charity | resource_charity |
| memes_gifs | resource_memes_gifs |
| videos | resource_videos |
| quizzes | resource_quizzes |
| guides | resource_guides |
| giveaways | resource_giveaways |
| polls | resource_polls |
| games | resource_games |

---

### The .env file

You can do this however, you want. Generally, it's a good idea not to put your passwords, secret keys, ATM PIN #'s, etc out there, for everyone to see, ya?

If you're just creating a copy of this on your local machine, you can setup your machine's OS method for environment variables, or, a common way it's done in the **MERN** stack *Developer* world (i.e. if you're gonna `git push` this could into a public / online repository) is to use a package like **dotenv** (created by the Developer, **Mot**).

If you want to go that route (which is what I did), you go into your Terminal and type:

`npm install dotenv`

#### "Dude, just show me." 🙈

📺 **[Mot shows the basics of dotevn in 2 minutes](https://www.youtube.com/watch?v=YtkZR0NFd1g)** ⏲️

#### "Too long! I prefer to read about it anyway. What's the website?" 🤓

🏴‍☠️ **[Nonconformist Propaganda Machine - dotenv](https://www.npmjs.com/package/dotenv)** 🗣️

Alright, so anyway, you create your `.env` file (it's literally named just that--kinda like your `.gitignore` file, right? Right: and go and check that file and make sure you're '.gitignoring' your `.env` extension(s) / file as well, before your next `git add`, etc, or you'll feel like a clown 🤡 who races donkeys 🫏 for a living, because you'll have just uploaded all of the passwords you were attempting to obscure).

In my code, I'm connecting to my MongoDB Atlas cluster inside of the `mongoose.connect()`, and so all I want to do is slightly modify that link with this:
`MONGODB_URI=mongodb+srv://<myusername>:<mypassword>@learnmern2earn.uptbe18.mongodb.net/?retryWrites=true&w=majority`

- Replace `<username>` with your MongoDB Atlas username.
- Replace `<password>` with your MongoDB Atlas password.
