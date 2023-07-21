# Full-Stack (MERN) Blog App

## Intro

Welcome to my Blog App (with CRUD operations and automated testing). This App will be using the MERN stack, and was made to show my experience and understanding working with a NoSQL database management system, like MongoDB.

Feel free to fork and/or follow along.

I chose MongoDB here because it's a solid open-source app that also works well with Atlas, MongoDB's cloud-based database service. Atlas is a fully-managed system that allows us to deploy, manage, and scale MongoDB databases on the cloud (i.e. without needing to setup and maintain a server to handle hosting for the database).

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

You can select your (Pricing / Performanc tier, but for most of us, for now, just start out with the ($Free-99) "M0" tier, which has less storage, slower (shared) access, and so on.

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

👉 You've setup your MongoDB Atlast cluster (holla!).

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
