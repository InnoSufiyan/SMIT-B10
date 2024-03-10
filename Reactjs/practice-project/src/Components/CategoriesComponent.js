import { memo } from "react";

export const CategoriesComponent = memo(({ categories, loader }) => {
    console.log('categoriesComponent Chala')
    // const category = [
    //     {
    //         "_id": "6499f66cd7d3bec5b121e031",
    //         "name": "Development",
    //         "description": "Unlock your potential in Development! This category is tailored for talented professionals who thrive on building innovative solutions and pushing technological boundaries. Whether you specialize in software development, web development, or mobile app development, find your next challenge and contribute to cutting-edge projects. Join us and let your development skills shine!",
    //         "isActive": true,
    //         "postCounts": 172,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:34:52.137Z",
    //         "updatedAt": "2024-03-10T07:32:42.114Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f660d7d3bec5b121e02f",
    //         "name": "Marketing & Sales",
    //         "description": "Explore exciting opportunities in Marketing & Sales! This category is perfect for professionals who excel in creating impactful strategies and driving business growth. From digital marketing to brand management, find your perfect role and make a measurable impact in this dynamic field. Join us and unleash your marketing and sales expertise!",
    //         "isActive": true,
    //         "postCounts": 151,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:34:40.106Z",
    //         "updatedAt": "2024-03-07T21:03:55.041Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f5ded7d3bec5b121e02b",
    //         "name": "Art & Illustration",
    //         "description": "Unleash your creativity and join the world of Art and Illustration! This category is perfect for talented artists and visionary illustrators. From traditional techniques to digital wizardry, explore exciting job opportunities where you can bring ideas to life through captivating visuals. Collaborate with various industries and leave a lasting impression with your unique artistic talent. Join us and let your creativity soar in the Art and Illustration category!",
    //         "isActive": true,
    //         "postCounts": 67,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:32:30.560Z",
    //         "updatedAt": "2024-03-08T11:50:14.808Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "651ee269964831af97354d74",
    //         "name": "Animation",
    //         "description": "3d and 2d Animation and Motion Graphics Artist",
    //         "isActive": true,
    //         "postCounts": 49,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-05T16:20:57.994Z",
    //         "updatedAt": "2024-03-03T07:50:40.483Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6533d0b1bd179c18d01a90c2",
    //         "name": "SEO",
    //         "description": "Search Engine Optimization",
    //         "isActive": true,
    //         "postCounts": 18,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-21T13:22:57.364Z",
    //         "updatedAt": "2024-03-05T19:31:46.710Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6533d173bd179c18d01a90c6",
    //         "name": "Call Center",
    //         "description": "Call Center Jobs: Connecting Customers with Solutions.",
    //         "isActive": true,
    //         "postCounts": 16,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-21T13:26:11.027Z",
    //         "updatedAt": "2024-03-06T19:27:20.231Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6533d13cbd179c18d01a90c4",
    //         "name": "Content Writer",
    //         "description": "Explore Content Writing: Unleash Your Writing Talent",
    //         "isActive": true,
    //         "postCounts": 15,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-21T13:25:16.946Z",
    //         "updatedAt": "2024-02-23T18:24:36.819Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f60ed7d3bec5b121e02d",
    //         "name": "UX/UI Design",
    //         "description": "Join the world of UX/UI Design! This category is perfect for passionate designers who excel in creating seamless user experiences and captivating interfaces. Shape the digital landscape with your skills in user research, wireframing, prototyping, and visual design. Explore exciting job opportunities and collaborate with diverse industries to make a lasting impact. Join us in the UX/UI Design category and unleash your creativity in crafting user-centric designs!",
    //         "isActive": true,
    //         "postCounts": 13,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:33:18.767Z",
    //         "updatedAt": "2024-01-24T19:14:13.746Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f678d7d3bec5b121e033",
    //         "name": "HR & Finance",
    //         "description": "Enter the world of HR & Finance! This category is designed for professionals who excel in managing people and driving financial success. From human resources to financial analysis, find opportunities to contribute to organizational growth and success. Join us and make a difference in the HR and finance domains!",
    //         "isActive": true,
    //         "postCounts": 13,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:35:04.283Z",
    //         "updatedAt": "2024-03-07T20:57:39.583Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "655bb610bad423d5da61fb1c",
    //         "name": "Content Creation and Editing",
    //         "description": "Dive into the world of content creation and editing – where skilled professionals shape impactful multimedia across diverse industries.",
    //         "isActive": true,
    //         "postCounts": 11,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-11-20T19:40:00.141Z",
    //         "updatedAt": "2024-03-10T07:25:00.838Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f685d7d3bec5b121e035",
    //         "name": "Management",
    //         "description": "Lead the way in Management! This category is dedicated to professionals who possess exceptional leadership skills and thrive in overseeing teams and driving strategic initiatives. From project management to operations management, find your next managerial role and make a significant impact on organizational success. Join us and take your management career to new heights!",
    //         "isActive": true,
    //         "postCounts": 10,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:35:17.074Z",
    //         "updatedAt": "2024-03-07T20:54:54.072Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f691d7d3bec5b121e037",
    //         "name": "Information Tech",
    //         "description": "Join the cutting-edge field of Information Tech! This category is perfect for tech enthusiasts who excel in areas such as software engineering, cybersecurity, and data analysis. Whether you're a programmer, a network administrator, or a data scientist, find exciting opportunities to contribute to technological advancements. Join us and shape the future of IT!",
    //         "isActive": true,
    //         "postCounts": 4,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:35:29.119Z",
    //         "updatedAt": "2023-10-31T07:02:42.748Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "653816455b8fc1e0b181c7bd",
    //         "name": "Photographer - Videographer",
    //         "description": "To Create Great PhotoShoots and VideoGraphy",
    //         "isActive": true,
    //         "postCounts": 2,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-24T19:08:53.661Z",
    //         "updatedAt": "2024-01-27T08:48:09.240Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "654f932dde9eea6cb9c36622",
    //         "name": "Medical / Pharmaceutical",
    //         "description": "Pharmacy: Elevate healthcare with roles focused on pharmaceutical expertise and patient care.",
    //         "isActive": true,
    //         "postCounts": 2,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-11-11T14:43:57.115Z",
    //         "updatedAt": "2024-03-04T19:11:18.291Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6499f69cd7d3bec5b121e039",
    //         "name": "Education",
    //         "description": "Make a difference in Education! This category is tailored for passionate educators and professionals in the field of education. From teaching roles to curriculum development, find opportunities to inspire learners and contribute to educational excellence. Join us and become a part of shaping the next generation!",
    //         "isActive": true,
    //         "postCounts": 1,
    //         "createdBy": null,
    //         "createdAt": "2023-06-26T20:35:40.031Z",
    //         "updatedAt": "2024-01-26T18:59:44.366Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6533d1e3bd179c18d01a90c8",
    //         "name": "Researcher",
    //         "description": "Research Roles: Explore, Discover, Innovate.",
    //         "isActive": true,
    //         "postCounts": 1,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-21T13:28:03.585Z",
    //         "updatedAt": "2023-10-21T13:32:54.866Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "653825cdc2123560175239f4",
    //         "name": "Software Quality Assurance / Tester",
    //         "description": "To test and verify Software, Web, and Apps Quality",
    //         "isActive": true,
    //         "postCounts": 1,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-10-24T20:15:09.344Z",
    //         "updatedAt": "2023-10-24T20:17:47.618Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "654340d70873720f9fc8e3c5",
    //         "name": "Agricultural Engineering",
    //         "description": "Explore opportunities in Agricultural Engineering where you can contribute to cutting-edge solutions for the agriculture industry. Design, prototype, and implement innovations to enhance farming efficiency, sustainability, and productivity. Join a dynamic team committed to advancing agriculture through engineering excellence.",
    //         "isActive": true,
    //         "postCounts": 1,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-11-02T06:25:27.166Z",
    //         "updatedAt": "2023-11-02T06:30:25.007Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "654916eec1ab449b8f7af35c",
    //         "name": "Retail / Merchandiser",
    //         "description": "Professionals in this category excel at creating captivating in-store experiences, managing product displays, optimizing inventory, and collaborating to boost sales and customer satisfaction. Join the world of retail and merchandising to make shopping memorable",
    //         "isActive": true,
    //         "postCounts": 1,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-11-06T16:40:14.154Z",
    //         "updatedAt": "2023-11-06T18:11:20.244Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "658eb2ddb40186e0d5b413f5",
    //         "name": "Media / Journalism",
    //         "description": "Uncover stories, ignite conversations. Join our Media / Journalism category to be at the forefront of news, storytelling, and impactful communication..",
    //         "isActive": true,
    //         "postCounts": 1,
    //         "createdBy": {
    //             "Config": {
    //                 "ProfilePic": "https://s3.ap-southeast-2.amazonaws.com/bucket.hiringmine/profile/image/1709919888058-358559580_1856915078039254_5559852371185783927_n.jpg"
    //             },
    //             "_id": "651edd68cff4b74735bb3fd4",
    //             "FirstName": "Jaffar",
    //             "LastName": "Aman"
    //         },
    //         "createdAt": "2023-12-29T11:51:57.214Z",
    //         "updatedAt": "2023-12-29T11:57:27.929Z",
    //         "__v": 0
    //     }
    // ]

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Our Top Categories</h1>
            <div style={{
                width: "100vw",
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "space-between"
            }}>
                {
                    loader && (
                        <h1>Loading</h1>
                    )
                }

                {
                    categories?.slice(0, 6)?.map((singleCategory) => (
                        <div style={{
                            border: "2px solid black",
                            borderRadius: "10px",
                            padding: "30px",
                            width: "25%",

                        }}>
                            <p>Icon</p>
                            <h1>{singleCategory?.name}</h1>
                            <h3>{singleCategory?.postCounts} Jobs</h3>
                        </div>
                    ))
                }

            </div>
        </>
    )
})