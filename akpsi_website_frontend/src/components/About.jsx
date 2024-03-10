import '../styles/About.css'
/*
position: absolute will help the background images stay in place
GOAL: have text and following sections overlay that image
- HTML components: <span>, <div>, <section> (set up a meeting to coordinate HTML)
- CSS: modifying borders (circles), flex, grid


*/
function About() {
    return (
        <div>
            <div>
                <h1>Our Story</h1>
                <p>Alpha Kappa Psi first came to the University of Maryland, College Park in the Spring of 2006, when a
                    Brother who had transferred from the Lambda Nu Chapter at American University in Washington, DC, started an interest group. After years of unsuccessful attempts,
                    this was the catalyst that the Fraternity needed to finally establish itself at Maryland. In the Fall of 2006,
                    a Chapter Advisor was named, and the Interest Group had its first Rush events, eventually getting to a stable size of around 40 members. Luke Bottorff,
                    the AKPsi Expansion Coordinator for 2006-2007, came to College Park and installed the group as the University of Maryland Colony of Alpha Kappa Psi Fraternity
                    on October 26, 2006.
                </p>
                <br />
                <p>
                    Over the course of the next semester, the Colony prepared its bylaws, hosted professional and social events, passed the final
                    exam, and (despite with a few bumps along the way), had its Petition for Charter approved by the Fraternity Board of Directors
                    on December 23, 2006. The Colony was installed as the Omega Theta Chapter on January 27, 2007, by Fraternity President Dan
                    Stubblefield in a extravagant ceremony attended by national staff, regional officers, other chapters, and volunteers.
                </p>
                <br />
                <p>
                    Two and a half years later, the Omega Theta Chapter was named the 2008-2009 Chapter of the Year at Convention held in Orlando,
                    Florida. This was the first time that any AKPsi chapter has been named Chapter of the Year within such a short period of time.
                    Now in its current state, Omega Theta boasts a chapter that is approximately 100 members strong. Never resting on our laurels,
                    however, we are always seeking to improve so we can be the best brothers we can possibly be.
                </p>
            </div>

            <div>
                <h1>Pillars</h1>
                <h3>Professionalism</h3>
                <p>
                    When the day comes that we have to leave our beloved University of Maryland behind, the brothers of Alpha Kappa Psi will leave
                    as some of the most prepared, well-rounded individuals to enter the professional world. We offer our members the unique opportunity
                    to take part in professional events hosted by companies such as Deloitte, Grant Thornton, Geico, Lockheed Martin, Northwestern Mutual,
                    and more. We have seen first hand the processes of a business environment through office tours, listened to company representatives talk
                    to us about what they do and offer us advice for the future, and learned important life lessons that extend beyond the workplace from our
                    guest speakers. All of this creates an experience that sets Alpha Kappa Psi apart from other fraternities by truly preparing us for the future,
                    so that when we enter that new chapter of our lives after graduating, we enter with unparalleled experience, leadership, and confidence.
                </p>
                <h3>Community Service</h3>
                <p>
                    Besides instilling a sense of professionalism in our members, we also enjoy giving back to the community through a variety
                    of community service events. Every year, we participate in Relay for Life in support of cancer research. We have raised money
                    for Alzheimer's research by participating in an annual Coldstone ice cream eating contest, and we have also gone on work trips
                    with Habitat for Humanity to build houses in the Baltimore area. In addition, we frequently volunteer at animal shelters,
                    the Ronald McDonald House, and the Shepherd's Table soup kitchen. Other service activities include working security for the
                    Baltimore Ravens, participating in the Making Strides Against Breast Cancer walk, playing in charity sports tournaments,
                    and making gift bags for children during the holiday season.
                </p>
                <h3>Social</h3>
                <p>
                    The brothers of Alpha Kappa Psi are athletes, rocket scientists, musicians, politicians, and yes, college students. We certainly
                    have a social aspect to our fraternity that builds a strong bond between our members and fosters a friendship that lasts a lifetime.
                    We hold an array of social activities such as football game day tailgates, semi annual formals, annual brotherhood retreats,
                    and intramural athletics in just about every sport possible. Even though we're all a little different in our own ways, the brothers
                    of Alpha Kappa Psi are all united together by sharing the same professional goals for the future, a brotherhood that knows no bounds,
                    and a passion for Terps basketball that might be a little unhealthy.
                </p>
                <p><i>"Mixing business with pleasure since 1904"</i></p>
            </div>

            <div>
                <h1>Awards</h1>

                <div className="award-group">
                    <h3>Chapter of the Year</h3>
                    <div className="flex-container">
                        <Circle insideText="2008/2009" />
                        <p><i>
                            The Alpha Kappa Psi Chapter of the Year is awarded to the chapter within the organization that best delivers the
                            vision of the fraternity: "Alpha Kappa Psi is recognized as the premier developer of principled business leaders."
                            The Chapter of the Year is the "leader of the pack" and a true model chapter for other AKPsi chapters.
                        </i></p>
                        <Circle insideText="2010/2011" />
                    </div>
                </div>

                <div className="award-group">
                    <h3>First Place Fraternity Standing</h3>
                    <div className="flex-container">
                        <p><i>
                            There is a points system within AKPsi in which Chapters must register all their events and attendance
                            (such as: Social, Community Service, and Professional). This award is received only by the Chapter which obtains the
                            most points - an honor the entire Brotherhood must work to achieve.
                        </i></p>
                        <Circle insideText="2008" />
                        <Circle insideText="2009" />
                        <Circle insideText="2011" />
                    </div>
                </div>

                <div className="award-group">
                    <h3>Individual Awards</h3>
                    <Award
                        awardName="Helping hand Award"
                        recipient="Phil Calderella"
                        year="'07"
                        description="This award is given to a Brother who leads by example in the area of service to others. 
          This person recognizes the selflessness of giving ones time to benefit others and this award is only given to a person
          whom the community feels created real change."
                    />
                    <Award
                        awardName="Helping hand Award"
                        recipient="Brian Perry"
                        year="'08"
                        description="This award is given to a Brother who leads by example in the area of service to others. 
          This person recognizes the selflessness of giving ones time to benefit others and this award is only given to a
          person whom the community feels created real change."
                    />
                    <Award
                        awardName="Member of the Year Award"
                        recipient="Brianne Macy"
                        year="'08"
                        description="The Member of the Year is awarded to the Alpha Kappa Psi brother who is not only involved with AKPsi but 
          other organizations on campus and in the community.This brother truly knows the meaning of time management and knows how 
          to impact many organizations at one time.This brother gives equally of their time to all that they are involved in."
                    />
                    <Award
                        awardName="Kappa Award"
                        recipient="Laura Millavec"
                        year="09"
                        description="For her outstanding efforts in recruitment and membership development as recognised by a regional committee."
                    />
                </div>

                <div className="award-group">
                    <h3>Distinguished Service Awards</h3>
                    <p><i>
                        The Alpha Kappa Psi Distinguished Service Award (DSA) is the most prestigious award conferred upon our members.
                        To be recognized with a DSA, a member in good standing must have performed praiseworthy service to a
                        chapter, region, fraternity or foundation.
                    </i></p>
                    <div className="flex-container">
                        // Move styling to CSS file
                        <div style={{ textAlign: 'center', marginRight: '20px', borderBottom: '1px solid black' }}>
                            <h2><strong>Bronze Award</strong></h2>
                            <ul>
                                <li>Andrew Levine '07</li>
                                <li>Jeremy Stark '09</li>
                                <li>Bill Ke '11</li>
                                <li>Jane Azzinaro '12</li>
                                <li>Stephanie Johnson '13</li>
                                <li>Diana Keung '19</li>
                            </ul>
                        </div>
                        <div style={{ borderRight: '1px solid black', height: '200px', margin: '0 20px' }}></div>
                        <div style={{ textAlign: 'center', borderBottom: '1px solid black' }}>
                            <h2><strong>Silver Award</strong></h2>
                            <ul>
                                <li>Sashwata Goswami '11</li>
                                <li>Nicholas Rust '13</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="award-group">
                    <h3>Academy Alumni</h3>
                    <ul style="list-style-type:none;">
                        <li>Nicholas Rust '08</li>
                        <li>Dmitriy Portnyagin '09</li>
                        <li>Kelsey Cohen '10</li>
                        <li>Stephanie Johnson '11</li>
                        <li>Jane Azzinaro '12 </li>
                    </ul>
                </div>

                <div className="award-group">
                    <h3>Other Notable Awards</h3>
                    <ul style="list-style-type:none;">
                        <li>Omega Theta won 2008-2009 International Chapter of the Year at our annual Convention</li>
                        <li>2011 KPMG National Case Competition in NYC: AKPsi team won both the UMD and the Mid-Atlantic Region rounds</li>
                        <li>2011 Wake Forest Marketing Competition: Brett Cullen helped the UMD team win 3rd place</li>
                    </ul>
                </div>
            </div>

            <div className="fast-facts">
                <h3>Fast Facts</h3>
                <p>
                    Vision Statement: "Alpha Kappa Psi is recognized as the premier developer of principled business leaders"
                </p>
                <ul>
                    <li>Founded in 1904 at NYU</li>
                    <li>Incorporated in 1905 in New York</li>
                    <li>Oldest and largest professional co-ed business fraternity</li>
                </ul>
                <p>
                    Famous Brothers include: Sam Walton, Ronald Reagan, Abraham Lincoln, Richard Nixon, Malcolm Forbes, and JC Penney
                    AKPsi is the only Business Fraternity to have active International Chapters. <br />
                    Chartered at more than 300 campuses in the United States, (3) Canada and (1) United Kingdom. <br />
                    Initiates since 1904: more than 252,000
                    Number of student members: 12,950 <br />
                    Alpha Kappa Psi membership is open to all college majors, as of 2005.
                    Alpha Kappa Psi first admitted women into the fraternity in 1976.
                </p>
            </div>
        </div>
    )
}

export default About