---
layout: post
title:  "Field report: Dreamhackathon"
date:   2015-06-27 16:57:51
---

Between the 13th and 14th of June I attended my first hackathon in sunny Jönköping during [Dreamhack], the worlds largest LAN and computer festival.

## The what and the why?
For the uninitated: a hackathon is an event where in teams you come up with an idea and develop a software prototype during a time limit (often 24 hours). The participating teams then present their work and compete against each other for various prizes. For this particular hackathon a team could be 1-5 people, time limit was 24 hours, the theme was collaboration and since the event was a part of ]Dreamhack (the Mecca of gaming) most if not all teams were looking to make games.

The main attraction for taking part of a hackathon is to come up with cool ideas and developing a proof of concept. It's an creative outlet where you can show off both your creativity in coming up with ideas and your technical skills in making them come true.

# Dreamhack
As mentioned earlier and as one might expect from the name, Dreamhackathon is a hackathon which takes place during Dreamhack. Dreamhack is the worlds largest LAN and computer festival with 26000 visitors where rougly 10000 bring their own computers and is organized twice a year in Jönköping. The event spans 4 days and contains many gaming tournaments with big prize pools, concerts, exhibitions and the recently started hackathon.

![openingBack](https://dl.dropboxusercontent.com/u/3879201/Dreamhack/opening_back.jpg) *Dreamhack grand opening laser show. Photo by Rikard Söderberg*

# Team & Idea
Our team was a full team of five. Four of us recently graduated together and all work as software developers and at the hackathon we were joined by a graphical artist with a knack for 3D modeling. Unlike many other teams we didn't arrive at the event with a clear idea what we wanted to do. We only knew we wanted to do something multiplayer with the theme collaboration and something which utilized and worked on different types of devices, mainly both computers and phones. During the brain storming before the event started, a joke about how we were all sitting in the same boat turned into an idea about a game where you literally sit in the same boat and try to navigate a course. And thus the idea for a multiplayer 3D rowing simulator was born.

# The Tech
On the technical side we decided to use a javascript WebGL 3D engine called [Goo] for everything visual and a server backend written in [Node.js] and hosted on [Heroku] for the multiplayer capabilities.

# The Competition
After a series of short presentations about the event, rules and judges, 20.00 on Saturday evening the 24 hour timer started and the competition was underway.

![dreamhackathonEntrance](https://dl.dropboxusercontent.com/u/3879201/Dreamhack/IMG_0066.JPG) *24 hours, 23 teams and an endless amount of energy drink, soda and coffee*

Now while staying up for 24 hours is definitely possible when fueled by preposterous amounts of caffeine, all of us had been traveling since early morning and had already been up for 12 hours when the competition started. We knew we needed some sleep but we felt like we couldn't sleep 8 hours and waste a third of the time we had. We compromised and all went to sleep for 3 hours during early Sunday morning after we had started to get some decent result but were slowing down noticably. Getting up was a struggle but after some more caffeine we were good to go non-stop towards the finish.

![dreamhackathon10hours](https://dl.dropboxusercontent.com/u/3879201/Dreamhack/IMG_0068.JPG)*Time running out, less than 10 hours left. Team is starting to feel the pressure*

With about 10 hours left we felt the end was nearing and started prioritizing more on what we felt was achievable goals, while still feeling that we had quite some time left. This all continued until the "3 hours left" mark when with a flash of realization we understood just how much more we wanted to do and how little time was left. This is where the serious crunching and stress began. Everything quickly focused on improving what we already had and polishing for the presentation, all while being very afraid to break something and not have the time to fix it. The rules were very strict, not a single key press was allowed after the time ran out no matter the state of your game or how close you were to fixing it.

This caused a dilemma when we were 15 minutes from the deadline and suddenly got our collision detection to work. Do we dare try to implement it in our stable version or play it safe and stick to what we have in fear of breaking something and not having the time to revert or fix? After a quick discussion we decided to play it safe and not implement it, even though we had spent many hours on it. With 40 seconds to spare we uploaded our game and were done. Hallelujah, we made it.

# The Presentations
20.00 on Sunday evening, we could finally breath a sigh of relief. The last 3 hours had been very hectic and we now had 45 minutes to calm down and prepare our 3 minute presentation and demo.

![Presentation](https://dl.dropboxusercontent.com/u/3879201/Dreamhack/IMG_0078.JPG)
*Time's up, time to present. Host for the presentations was fellow HiQ colleague Victor Sand*

Even though the presentations were only allowed to be a maximum of 3 minutes it took quite some time for the 23 teams to present with the mandatory technical issues. The presentations were chaotic but fun, it's no easy feat to present and demo your 24 hour work in 3 minutes while heavily sleep deprived infront of an equally sleep deprived audience. After the presentations and some thinking time for the judges, the winners were announced which sadly (but as expected) didn't include our team.

![Dreamhackathon winners](https://dl.dropboxusercontent.com/u/3879201/Dreamhack/winners.jpg)
*The winners of Dreamhackathon at Dreamhack Summer 2015. Photo by Stephanie Lindgren*

# Conclusion
![The Row Team](https://dl.dropboxusercontent.com/u/3879201/Dreamhack/row.jpg)
*The team. One of our two slides for the presentation*

Try our game here: [Row Simulator] (swipe/click-and-drag on the left or right side to paddle).

Even though we didn't win anything we are still happy with what we managed to create in just 24 hours using technology new to most of us. Our goal for this event was to make something cool together as friends and have fun, both of which we achieved.

This being my first hackathon I started out with the expectations that it would be challenging, stressful and fun, which incidentally turned out to be spot on. Getting together with like-minded people and tackling the challenge of creating something cool to compete with turned out to be something I truly enjoy and I am now looking forward to my next one.

-------------------------------
*Hans-Christian Helltegen*
*HiQ Ace Norrköping*

[Row Simulator]:http://www.tinyurl.com/rowsimulator
[Goo]:http://goocreate.com/
[Node.js]:https://nodejs.org/
[Heroku]:https://www.heroku.com/
[Dreamhack]:http://dreamhack.se
