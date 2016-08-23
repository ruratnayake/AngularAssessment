// create own name space for application specific objects and models

var sm = sm || {};
sm.movie = {
    Id: undefined,
    Title: undefined,
    Description: undefined,
    Director: undefined,
    ReleaseYear: undefined,
    ReleaseDate: undefined,
    Rating: 0,
    Language: undefined,
    Cast: []
}
sm.movies = [
    {
        Id: 5,
        Title: 'Kabhi Khushi Kabhie Gham', Description: "Rahul (Shah Rukh Khan), the adoptive son of business magnate Yash Raichand (Amitabh Bachchan), feels eternal gratitude to his father for rescuing him from a life of poverty. Yet, when Yash forbids his love of poor Anjali (Kajol), Rahul marries her and moves to London with new wife and sister-in-law, Pooja (Kareena Kapoor), breaking the heart of his mother (Jaya Bachchan). Ten years later, Rahul's younger brother (Hrithik Roshan) comes to London intent on brokering peace between father and son.",
        Director: 'Karan Johar',
        ReleaseDate: new Date('2001/12/14'),
        Rating: 7.5,
        Language: 'English',
        Cast: [{ Actor: 'Shah Rukh Khan', Role: 'Rahul' }, { Actor: 'Amitabh Bachchan', Role: 'Yash Raichand' }, { Actor: 'Kajol', Role: 'Anjali ' }, { Actor: 'Kareena Kapoor', Role: 'Anjali' }, { Actor: 'Roshan', Role: 'Hrithik Rosha' }]
    }, {
        Id: 3,
        Title: 'Avengers: Age of Ultron', Description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans.",
        Director: 'Joss Whedon',
        ReleaseDate: new Date('2016/5/1'),
        Rating: 7.5,
        Language: 'English',
        Cast: [{ Actor: 'Robert Downey Jr.', Role: 'Tony Stark / Iron Man' }, { Actor: 'Chris Hemsworth', Role: 'Thor' }, { Actor: 'Mark Ruffalo', Role: 'Bruce Banner / Hulk' }, { Actor: 'Chris Evans', Role: 'Steve Rogers / Captain America' }, { Actor: 'Scarlett Johansson', Role: 'Natasha Romanoff / Black Widow' }]
    }, {
        Id: 4,
        Title: 'Due Date', Description: "High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time. ",
        Director: 'Todd Phillips',
        ReleaseDate: new Date('2010/11/4'),
        Rating: 6.6,
        Language: 'English',
        Cast: [{ Actor: 'Robert Downey Jr.', Role: 'Peter Highman' }, { Actor: 'Zach Galifianakis', Role: 'Ethan Tremblay' }, { Actor: 'Michelle Monaghan', Role: 'Sarah Highman' }, { Actor: 'Jamie Foxx', Role: 'Darryl' }]
    },
    {
        Id: 2,
        Title: 'Suicide Squad', Description: 'A secret government agency recruits imprisoned supervillains to execute dangerous black ops missions in exchange for clemency.',
        Director: 'David Ayer',
        ReleaseDate: new Date('2016/8/5'),
        Rating: 7.4,
        Language: 'English',
        Cast: [{ Actor: 'Will Smith', Role: 'Deadshot' }, { Actor: 'Jaime FitzSimons', Role: 'Sergeant Ames Bravo 14' }, { Actor: 'Ike Barinholtz', Role: 'Griggs' }, { Actor: 'Margot Robbie', Role: 'Harley Quinn' }, { Actor: 'Christopher Dyson', Role: 'Missing Hand Guard' }]
    },
    {
        Id: 1,
        Title: 'One Night Stand', Description: "One Night Stand is a 2016 Indian Hindi thriller drama film written by Bhavani Iyer and directed by Jasmine D'Souza. It features Sunny Leone, Nyra Banerjee, and Tanuj Virwani in the lead roles",
        Director: 'David Ayer',
        ReleaseDate: new Date('2016/5/6'),
        Rating: 3.2,
        Language: 'Hindi',
        Cast: [{ Actor: 'Sunny Leon', Role: 'Ambar Kapoor' }, { Actor: 'Tanuj Virwani', Role: 'Irvi' }, { Actor: 'Madhuurima', Role: 'Simran' }]
    },
    {
        Id: 6,
        Title: 'Dilwale Dulhania Le Jayenge', Description: "Dilwale Dulhania Le Jayenge (English: The Big-Hearted Will Take Away the Bride), also known by the initialism DDLJ, is an Indian romance film written and directed by Aditya Chopra and produced by Yash Chopra. Released on 20 October 1995, the film stars Shah Rukh Khan and Kajol. The plot revolves around Raj and Simran, two young non-resident Indians, who fall in love during a vacation through Europe with their friends. Raj tries to win over Simran's family so the couple can marry, but Simran's father has long since promised her hand to his friend's son. The film was shot in India, London and Switzerland, from September 1994 to August 1995.",
        Director: 'Yash Chopra',
        ReleaseDate: new Date('1995/10/20'),
        Rating: 8.3,
        Language: 'Hindi',
        Cast: [{ Actor: 'Shah Rukh Khan', Role: 'Raj Malhotra' }, { Actor: 'Kajol', Role: 'Simran Singh' }, { Actor: 'Amirish Puri', Role: 'Baldev Singh' }]
    },
    {
        Id: 7,
        Title: 'Devdas', Description: "Devdas (Shahrukh Khan) makes his way back home to India after spending 10 years studying in London. He plans to marry Paro (Aishwarya Rai), his childhood best friend, but his parents (Vijay Crishna, Smita Jaykar) do not want Devdas to marry her. They believe that Paro's family, who descend from a line of dancers, is of a lower class than their own. Eventually, Paro marries another man, and the despondent Devdas descends into life-threatening alcoholism.",
        Director: 'Sanjay Leela Bhansali',
        ReleaseDate: new Date('2002/07/12'),
        Rating: 7.6,
        Language: 'Hindi',
        Cast: [{ Actor: 'Shah Rukh Khan', Role: 'Devdas' }, { Actor: 'Aishwarya Rai', Role: 'Parwathi' }, { Actor: 'Maduri Dixith', Role: 'Chandramuki' }]
    }
]
