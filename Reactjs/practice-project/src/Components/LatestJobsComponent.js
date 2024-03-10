import { memo } from "react";

export const LatestJobsComponent = memo(({latestJobs, loader}) => {
    console.log('ؒLatestJobsComponent chala')
    // const latestJobs = [
    //     {
    //         "views": 95,
    //         "companyName": "A Tech Sight",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "html",
    //             "css",
    //             "javascript",
    //             "js",
    //             "react",
    //             "node",
    //             "express"
    //         ],
    //         "category": {
    //             "_id": "6499f66cd7d3bec5b121e031",
    //             "name": "Development",
    //             "description": "Unlock your potential in Development! This category is tailored for talented professionals who thrive on building innovative solutions and pushing technological boundaries. Whether you specialize in software development, web development, or mobile app development, find your next challenge and contribute to cutting-edge projects. Join us and let your development skills shine!",
    //             "isActive": true,
    //             "postCounts": 172,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:34:52.137Z",
    //             "updatedAt": "2024-03-10T07:32:42.114Z",
    //             "__v": 0
    //         },
    //         "experience": "2 - 3 years",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65ed621ad1d965e983535a4e",
    //         "designation": "Mern Stack Developer",
    //         "desc": "<p>Hiring Alert</p><p><br></p><p><strong>A Tech Sight</strong> is looking for <strong>MERN Stack developers</strong> Specialized in <strong>React js </strong>.</p><p><br></p><p>Experience Required: <strong>2-3 Years</strong> for Karachi</p><p><br></p><p><strong>jobs@atechsight.com</strong>&nbsp;</p>",
    //         "hashTags": [
    //             "frontend",
    //             "backend",
    //             "developer",
    //             "programmer",
    //             "mernstack"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-10T07:32:42.040Z",
    //         "updatedAt": "2024-03-10T15:18:25.871Z",
    //         "gender": "anyone",
    //         "applyEmail": "jobs@atechsight.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 56,
    //         "companyName": "",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "book",
    //             "editor"
    //         ],
    //         "category": {
    //             "_id": "655bb610bad423d5da61fb1c",
    //             "name": "Content Creation and Editing",
    //             "description": "Dive into the world of content creation and editing – where skilled professionals shape impactful multimedia across diverse industries.",
    //             "isActive": true,
    //             "postCounts": 11,
    //             "createdBy": "651edd68cff4b74735bb3fd4",
    //             "createdAt": "2023-11-20T19:40:00.141Z",
    //             "updatedAt": "2024-03-10T07:25:00.838Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Remote",
    //         "jobType": "Full-Time",
    //         "_id": "65ed604cd1d965e983535a40",
    //         "designation": "Book Editor",
    //         "desc": "<p>I am looking for a <strong>Book Editor</strong> with <strong>1 or 2 years</strong> of experience</p><p><br></p><p>Remote based Job.</p><p><br></p><p>contact me on whatsapp:</p><p><strong>03248388088</strong></p>",
    //         "hashTags": [
    //             "book",
    //             "editor"
    //         ],
    //         "country": "",
    //         "city": "",
    //         "isActive": true,
    //         "createdAt": "2024-03-10T07:25:00.764Z",
    //         "updatedAt": "2024-03-10T15:33:31.607Z",
    //         "gender": "anyone",
    //         "applyEmail": "",
    //         "applyPhone": 3248388088
    //     },
    //     {
    //         "views": 46,
    //         "companyName": "Convex Interactive",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "iOS",
    //             "swift",
    //             "Objective-C"
    //         ],
    //         "category": {
    //             "_id": "6499f66cd7d3bec5b121e031",
    //             "name": "Development",
    //             "description": "Unlock your potential in Development! This category is tailored for talented professionals who thrive on building innovative solutions and pushing technological boundaries. Whether you specialize in software development, web development, or mobile app development, find your next challenge and contribute to cutting-edge projects. Join us and let your development skills shine!",
    //             "isActive": true,
    //             "postCounts": 172,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:34:52.137Z",
    //             "updatedAt": "2024-03-10T07:32:42.114Z",
    //             "__v": 0
    //         },
    //         "experience": "3+ years",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65ec072fd1d965e983534fe2",
    //         "designation": "iOS Developer",
    //         "desc": "<p>Company: <strong>Convex Interactive</strong></p><p>Location: <strong>Karachi, Pakistan</strong></p><p>Position: <strong>iOS Developer</strong></p><p>Experience: <strong>3+ Years</strong></p><p><br></p><p><strong>About Us:</strong></p><p><strong>Convex Interactive </strong>is a dynamic and innovative digital solutions company based in the heart of <strong>Karachi</strong>. We specialize in creating cutting-edge interactive experiences and digital solutions for our diverse range of clients. Join us in shaping the future of digital innovation!</p><p><br></p><p><strong>Job Description</strong>:</p><p>As an <strong>iOS Developer</strong> at <strong>Convex Interactive</strong>, you will play a crucial role in designing, developing, and maintaining high-performance mobile applications. You'll collaborate with cross-functional teams to deliver top-notch iOS applications that provide an exceptional user experience.</p><p><br></p><p><strong>Responsibilities:</strong></p><ul><li>Design and build advanced applications for the iOS platform.</li><li>Collaborate with cross-functional teams to define, design, and ship new features.</li><li>Ensure the performance, quality, and responsiveness of applications.</li><li>Identify and correct bottlenecks and fix bugs.</li><li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</li><li>Collaborate with team members to brainstorm and develop new features.</li></ul><p><br></p><p><strong>Requirements:</strong></p><ul><li>Bachelor's degree in Computer Science or related field.</li><li>Proven working experience in iOS app development, with a minimum of 3 years.</li><li>Proficient in Swift and Objective-C.</li><li>Strong understanding of iOS design principles, patterns, and best practices.</li><li>Experience with offline storage, threading, and performance tuning.</li><li>Familiarity with RESTful APIs to connect iOS applications to back-end services.</li><li>Knowledge of other web technologies and UI/UX standards.</li><li>Solid understanding of the full mobile development life cycle.</li></ul><p><br></p><p><strong>Perks and Benefits:</strong></p><ul><li>Competitive salary package.</li><li>Health and wellness programs.</li><li>Professional development opportunities.</li><li>Collaborative and vibrant work environment.</li><li>Opportunity to work on innovative and exciting projects.</li></ul><p><br></p><p><strong>How to Apply:</strong></p><p>If you are passionate about iOS development and want to be part of a dynamic team, send your resume and portfolio to <strong>hamza.hafeez@convexinteractive.com</strong></p><p><br></p><p>Please include \"<strong>iOS Developer Application - [Your Name]</strong>\" in the subject line.</p><p><br></p><p>Convex Interactive is an equal-opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p><p>Join us in shaping the digital future!</p><p><br></p><p>#iOSDeveloper #KarachiJobs #TechInnovation</p><p>Job Type: <strong>Full-time</strong></p><p><br></p><p><strong>Ability to Commute:</strong></p><ul><li>Karachi (Required)</li></ul><p><br></p><p><strong>Ability to Relocate:</strong></p><ul><li>Karachi: Relocate before starting work (Required)</li></ul><p><br></p>",
    //         "hashTags": [
    //             "developer",
    //             "programmer",
    //             "iOS",
    //             "mobile",
    //             "native",
    //             "application"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-09T06:52:31.736Z",
    //         "updatedAt": "2024-03-10T14:55:56.282Z",
    //         "gender": "anyone",
    //         "applyEmail": "hamza.hafeez@convexinteractive.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 216,
    //         "companyName": "Ocreateo",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "adobe",
    //             "photoshop",
    //             "illustrator"
    //         ],
    //         "category": {
    //             "_id": "6499f5ded7d3bec5b121e02b",
    //             "name": "Art & Illustration",
    //             "description": "Unleash your creativity and join the world of Art and Illustration! This category is perfect for talented artists and visionary illustrators. From traditional techniques to digital wizardry, explore exciting job opportunities where you can bring ideas to life through captivating visuals. Collaborate with various industries and leave a lasting impression with your unique artistic talent. Join us and let your creativity soar in the Art and Illustration category!",
    //             "isActive": true,
    //             "postCounts": 67,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:32:30.560Z",
    //             "updatedAt": "2024-03-08T11:50:14.808Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65eafb7614ca822826c848fa",
    //         "designation": "Senior Graphic Designer",
    //         "desc": "<p>Hiring <strong>Senior Graphic Designer</strong></p><p><br></p><p><strong>Job Responsibility:</strong></p><p><br></p><ul><li>Schedule projects and define budget constraints&nbsp;</li><li>Develop illustrations, logos and other designs using software or by hand</li><li>Use the appropriate colors and layouts for each graphic Work with copywriters and creative director to produce final design</li><li>Test graphics across various media</li><li>Amend designs after feedback</li><li>Ensure final graphics and layouts are visually appealing and on brand guidelines</li><li>Show versatility/interest across different media and channels and be able to craft best in class work for each, including: Print, online, social media, physical and environmental design.</li><li>Be able to create design work and identities for brands and advertising campaigns and expand on those ideas to create a complete set of ownable graphic assets.</li><li>Create GIFs and simple animations for social media</li><li>Finalize print</li><li>Strong written and verbal communication skills</li><li>Knowledge of animation workflow, should be well versed in the process of creating the designs for animation purposes.</li></ul><p><strong>Requirements:</strong></p><p><br></p><ul><li>Proven graphic designing experience</li><li>A strong portfolio of graphics</li><li>Familiarity with design software and technologies (such as InDesign, Illustrator, Figma, Photoshop)</li><li>A keen eye for aesthetics and details</li><li>Excellent communication skills.</li><li>Ability to work methodically and meet deadline</li><li>Bachelor's degree in graphic design, visual communications, or related field</li><li>Animation or Multimedia experience is a plus</li></ul><p><br></p><p><br></p><p>Apply at: <strong>Basit@ocreateo.com</strong></p>",
    //         "hashTags": [
    //             "senior",
    //             "graphic",
    //             "designer",
    //             "art",
    //             "artist"
    //         ],
    //         "country": "",
    //         "city": "",
    //         "isActive": true,
    //         "createdAt": "2024-03-08T11:50:14.752Z",
    //         "updatedAt": "2024-03-10T12:18:47.404Z",
    //         "gender": "anyone",
    //         "applyEmail": "Basit@ocreateo.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 133,
    //         "companyName": "A Tech Sight",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "html",
    //             "css",
    //             "javascript",
    //             "react",
    //             "js"
    //         ],
    //         "category": {
    //             "_id": "6499f66cd7d3bec5b121e031",
    //             "name": "Development",
    //             "description": "Unlock your potential in Development! This category is tailored for talented professionals who thrive on building innovative solutions and pushing technological boundaries. Whether you specialize in software development, web development, or mobile app development, find your next challenge and contribute to cutting-edge projects. Join us and let your development skills shine!",
    //             "isActive": true,
    //             "postCounts": 172,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:34:52.137Z",
    //             "updatedAt": "2024-03-10T07:32:42.114Z",
    //             "__v": 0
    //         },
    //         "experience": "2 - 3 years",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65eaf4d414ca822826c84895",
    //         "designation": "MERN Stack Developers",
    //         "desc": "<p>Hiring Alert</p><p><br></p><p>A Tech Sight is looking for <strong>MERN Stack developers</strong> Specialized in <strong>React js</strong></p><p><br></p><p>Experience Required: <strong>2-3 Years</strong> for Karachi</p><p><br></p><p><strong>jobs@atechsight.com</strong></p>",
    //         "hashTags": [
    //             "mern",
    //             "fullstack",
    //             "mernstack",
    //             "frontend",
    //             "backend"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-08T11:21:56.106Z",
    //         "updatedAt": "2024-03-10T15:03:15.612Z",
    //         "gender": "anyone",
    //         "applyEmail": "jobs@atechsight.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 32,
    //         "companyName": "Convex Interactive",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "android",
    //             "java"
    //         ],
    //         "category": {
    //             "_id": "6499f66cd7d3bec5b121e031",
    //             "name": "Development",
    //             "description": "Unlock your potential in Development! This category is tailored for talented professionals who thrive on building innovative solutions and pushing technological boundaries. Whether you specialize in software development, web development, or mobile app development, find your next challenge and contribute to cutting-edge projects. Join us and let your development skills shine!",
    //             "isActive": true,
    //             "postCounts": 172,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:34:52.137Z",
    //             "updatedAt": "2024-03-10T07:32:42.114Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65ea2dad14ca822826c8428c",
    //         "designation": "Android Developer",
    //         "desc": "<p><span style=\"color: rgba(0, 0, 0, 0.9);\">🚀 Exciting Opportunity Alert! 🚀</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.9);\">I'm Hiring! Join My Team at </span><strong style=\"color: rgba(0, 0, 0, 0.9);\">Convex Interactive</strong><span style=\"color: rgba(0, 0, 0, 0.9);\">!</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.9);\">Are you a talented professional looking to take the next step in your career journey?</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.9);\">Convex Interactive</strong><span style=\"color: rgba(0, 0, 0, 0.9);\">, a leading digital solutions provider, is seeking passionate individuals to join our dynamic team!</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.9);\">Positions Available:</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.9);\">Android Developer</strong></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.9);\">Location</strong><span style=\"color: rgba(0, 0, 0, 0.9);\">: Karachi, Pakistan 🇵🇰</span></p><p><br></p><p><strong style=\"color: rgba(0, 0, 0, 0.9);\">How to Apply</strong><span style=\"color: rgba(0, 0, 0, 0.9);\">:</span></p><p><span style=\"color: rgba(0, 0, 0, 0.9);\">Send your resume to&nbsp;</span><a href=\"mailto:hamza.hafeez@convexinteractive.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--color-action);\"><strong>hamza.hafeez@convexinteractive.com</strong></a><span style=\"color: rgba(0, 0, 0, 0.9);\">&nbsp;to be considered for this opportunity</span></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.9);\">Don't miss out! Apply now and unlock your potential with </span><strong style=\"color: rgba(0, 0, 0, 0.9);\">Convex Interactive</strong></p><p><br></p><p><span style=\"color: rgba(0, 0, 0, 0.9);\">Note: This opportunity is exclusively for individuals residing in&nbsp;</span><a href=\"https://www.linkedin.com/feed/hashtag/?keywords=karachi&amp;highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7169172341808119808\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--color-action);\">#Karachi</a><span style=\"color: rgba(0, 0, 0, 0.9);\">.</span></p>",
    //         "hashTags": [
    //             "mobile",
    //             "application",
    //             "app",
    //             "developer",
    //             "programmer"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-07T21:12:13.264Z",
    //         "updatedAt": "2024-03-10T11:27:03.245Z",
    //         "gender": "anyone",
    //         "applyEmail": "hamza.hafeez@convexinteractive.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 22,
    //         "companyName": "Adzeye",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "sales",
    //             "marketing"
    //         ],
    //         "category": {
    //             "_id": "6499f660d7d3bec5b121e02f",
    //             "name": "Marketing & Sales",
    //             "description": "Explore exciting opportunities in Marketing & Sales! This category is perfect for professionals who excel in creating impactful strategies and driving business growth. From digital marketing to brand management, find your perfect role and make a measurable impact in this dynamic field. Join us and unleash your marketing and sales expertise!",
    //             "isActive": true,
    //             "postCounts": 151,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:34:40.106Z",
    //             "updatedAt": "2024-03-07T21:03:55.041Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Internship",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65ea2bba14ca822826c8427a",
    //         "designation": "Linkedin Sales Intern",
    //         "desc": "<p>We are hiring</p><p><br></p><p><strong>Linkedin Sales Intern</strong></p><p><br></p><p><strong>(Karachi - onsite, night shift)</strong></p><p><br></p><p><strong>Paid Internship</strong></p><p><br></p><p>Apply: <strong>reachus@adzeye.com</strong></p>",
    //         "hashTags": [
    //             "sales",
    //             "intern",
    //             "internship",
    //             "linkedin"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-07T21:03:54.965Z",
    //         "updatedAt": "2024-03-10T01:25:57.526Z",
    //         "gender": "anyone",
    //         "applyEmail": "reachus@adzeye.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 85,
    //         "companyName": "Adzeye",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "marketing",
    //             "sales"
    //         ],
    //         "category": {
    //             "_id": "6499f660d7d3bec5b121e02f",
    //             "name": "Marketing & Sales",
    //             "description": "Explore exciting opportunities in Marketing & Sales! This category is perfect for professionals who excel in creating impactful strategies and driving business growth. From digital marketing to brand management, find your perfect role and make a measurable impact in this dynamic field. Join us and unleash your marketing and sales expertise!",
    //             "isActive": true,
    //             "postCounts": 151,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:34:40.106Z",
    //             "updatedAt": "2024-03-07T21:03:55.041Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": 30000,
    //         "payRangeEnd": 40000,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Remote",
    //         "jobType": "Full-Time",
    //         "_id": "65ea2b3414ca822826c84268",
    //         "designation": "Virtual Assistant Digital Marketing",
    //         "desc": "<p>We are hiring</p><p><br></p><p><strong>Virtual Assistant Digital Marketing</strong></p><p><br></p><p>(Karachi - Remote, Night Shift)</p><p><br></p><p><strong>Salary</strong>: 30000 - 40000</p><p><br></p><p>Apply: <strong>reachus@adzeye.com</strong></p>",
    //         "hashTags": [
    //             "virtual",
    //             "assistant",
    //             "digital",
    //             "marketing"
    //         ],
    //         "country": "",
    //         "city": "",
    //         "isActive": true,
    //         "createdAt": "2024-03-07T21:01:40.291Z",
    //         "updatedAt": "2024-03-10T14:50:37.518Z",
    //         "gender": "anyone",
    //         "applyEmail": "reachus@adzeye.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 30,
    //         "companyName": "MMG (Memon Management Group)",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "human",
    //             "resource",
    //             "hr"
    //         ],
    //         "category": {
    //             "_id": "6499f678d7d3bec5b121e033",
    //             "name": "HR & Finance",
    //             "description": "Enter the world of HR & Finance! This category is designed for professionals who excel in managing people and driving financial success. From human resources to financial analysis, find opportunities to contribute to organizational growth and success. Join us and make a difference in the HR and finance domains!",
    //             "isActive": true,
    //             "postCounts": 13,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:35:04.283Z",
    //             "updatedAt": "2024-03-07T20:57:39.583Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": "Onsite",
    //         "jobType": "Full-Time",
    //         "_id": "65ea2a4314ca822826c84256",
    //         "designation": "HR Executive",
    //         "desc": "<p>Job Opportunity: <strong>HR Executive</strong></p><p><br></p><p>Company: <strong>MMG (Memon Management Group)</strong></p><p><br></p><p><strong>Location</strong>: Karachi, Pakistan</p><p><br></p><p><strong>Responsibilities</strong>:</p><p><br></p><p>Strong command of English, both spoken and written, is a requirement for this role.</p><p>Handling human resources tasks, including recruitment, onboarding, and employee relations.</p><p>Maintaining and updating employee records.</p><p>Administrative tasks related to HR functions.</p><p>Coordinating employee training programs.</p><p><br></p><p><strong>Benefits</strong>:</p><p><br></p><p>Competitive salary in line with market standards.</p><p>Medical benefits as per company policy.</p><p>Comprehensive training for the first three months.</p><p>Salary increments based on performance and expertise after the initial training period.</p><p><br></p><p><strong>Office Timings</strong>:</p><p><br></p><p>March to November: 05:30 PM to 02:30 AM</p><p>November to March: 06:30 PM to 03:30 AM</p><p><br></p><p><strong>How to Apply</strong>:</p><p><br></p><p>Interested candidates are requested to send their CVs to the provided WhatsApp number for this post.</p><p><br></p><p>Note: This is a night job, and the mentioned office timings are applicable accordingly.</p><p><br></p><p>We look forward to welcoming a dedicated individual to our HR team!</p><p><br></p><p>If you are ready to take on a challenging and dynamic role in a reputable medical supply company, we encourage you to apply.</p><p><br></p><p>Please submit your application along with your resume to <strong>faizan@healthcaredme.com</strong> or WhatsApp <strong>+923122339591</strong>.</p><p><br></p><p>Kindly refrain from calling; we will contact you after reviewing your CV.</p><p><br></p><p>Join <strong>MMG Services PVT LTD</strong> and be a part of our commitment to delivering quality healthcare equipment.</p>",
    //         "hashTags": [
    //             "hr",
    //             "executive",
    //             "management"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-07T20:57:39.506Z",
    //         "updatedAt": "2024-03-10T08:25:15.863Z",
    //         "gender": "anyone",
    //         "applyEmail": "faizan@healthcaredme.com",
    //         "applyPhone": null
    //     },
    //     {
    //         "views": 24,
    //         "companyName": "MMG Services PVT LTD",
    //         "featuredBenefits": "",
    //         "skills": [
    //             "administration",
    //             "management"
    //         ],
    //         "category": {
    //             "_id": "6499f685d7d3bec5b121e035",
    //             "name": "Management",
    //             "description": "Lead the way in Management! This category is dedicated to professionals who possess exceptional leadership skills and thrive in overseeing teams and driving strategic initiatives. From project management to operations management, find your next managerial role and make a significant impact on organizational success. Join us and take your management career to new heights!",
    //             "isActive": true,
    //             "postCounts": 10,
    //             "createdBy": "63dea7b3fa1a27096f4ea85a",
    //             "createdAt": "2023-06-26T20:35:17.074Z",
    //             "updatedAt": "2024-03-07T20:54:54.072Z",
    //             "__v": 0
    //         },
    //         "experience": "",
    //         "position": "Mid-Level",
    //         "noOfPositions": null,
    //         "payRangeStart": null,
    //         "payRangeEnd": null,
    //         "salaryCurrency": "pkr",
    //         "jobFeseability": null,
    //         "jobType": "Full-Time",
    //         "_id": "65ea299d14ca822826c84244",
    //         "designation": "Administrative Assistant",
    //         "desc": "<p>Job Opportunity: <strong>Administrative Assistant</strong></p><p><br></p><p>Company: <strong>American Base Medical Company MMG Services PVT LTD</strong></p><p><br></p><p>Location: <strong>Karachi, Shah-R-Faisal Main Road (Near Gora Qabristan)</strong></p><p><br></p><p>Are you a skilled <strong>Administrative Assistant </strong>with a high level of proficiency in English, exceptional communication skills, and the ability to multitask efficiently?</p><p><br></p><p><strong>MMG Services PVT LTD</strong>, a leading home medical equipment supply company, is seeking a dedicated individual to join our team.</p><p><br></p><p><strong>Job Description</strong>:</p><p>As an <strong>Administrative Assistant at MMG Services PVT LTD</strong>, your responsibilities will include:</p><p><br></p><p>Medical Record Checking: Ensuring accuracy and completeness of medical records.</p><p>Insurance Papers Checking: Verifying insurance documentation for compliance.</p><p>Order Processing: Managing and processing orders in accordance with company policies.</p><p>Assisting in Finalizing Orders: Collaborating with relevant departments for order completion.</p><p>Coordinating with Departments: Ensuring effective communication and coordination between departments.</p><p>Collaborating with Team Members: Working closely with team members to maintain smooth operations.</p><p>Contacting Patients: Providing assistance or gathering information from patients when necessary.</p><p><br></p><p><strong>Qualifications</strong>:</p><p><br></p><p>High proficiency in English communication.</p><p>Excellent multitasking abilities.</p><p>Strong communication skills.</p><p>Detail-oriented with a high level of accuracy.</p><p>Previous experience in administrative roles is a plus.</p><p><br></p><p><strong>Working Hours</strong>:</p><p><br></p><p>November 15 to March 15: 6:30 PM to 3:30 AM</p><p>March 15 to November 15: 5:30 PM to 2:30 AM</p><p><br></p><p>If you are ready to take on a challenging and dynamic role in a reputable medical supply company, we encourage you to apply.</p><p><br></p><p>Please submit your application along with your resume to <strong>faizan@healthcaredme.com</strong> or WhatsApp <strong>+923122339591</strong>.</p><p><br></p><p>Kindly refrain from calling; we will contact you after reviewing your CV.</p><p><br></p><p>Join MMG Services PVT LTD and be a part of our commitment to delivering quality healthcare equipment.</p>",
    //         "hashTags": [
    //             "administrative",
    //             "admin",
    //             "assistant"
    //         ],
    //         "country": "Pakistan",
    //         "city": "Karachi",
    //         "isActive": true,
    //         "createdAt": "2024-03-07T20:54:53.996Z",
    //         "updatedAt": "2024-03-09T23:52:02.062Z",
    //         "gender": "anyone",
    //         "applyEmail": "faizan@healthcaredme.com",
    //         "applyPhone": null
    //     }
    // ]

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Our Latest Jobs</h1>
            <div style={{
                width: "100vw",
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "space-between"
            }}>
                {
                    loader && (
                        <h1>Loading Jobs</h1>
                    )
                }

                {
                    latestJobs?.slice(0, 9)?.map((singleJob) => (
                        <div style={{
                            border: "2px solid black",
                            borderRadius: "10px",
                            padding: "30px",
                            width: "25%",
                        }}>
                            <p>{singleJob?.companyName || 'Anonymous'}</p>
                            <h1>{singleJob?.designation}</h1>
                            {
                                singleJob?.payRangeStart ? (
                                    <h3>{singleJob?.payRangeStart} - {singleJob?.payRangeEnd}</h3>
                                ) : (
                                    <h3>No Salary Mentioned</h3>
                                )
                            }
                            <h5>{singleJob?.views} Views</h5>
                        </div>
                    ))
                }

            </div>
        </>
    )
})