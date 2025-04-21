import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import google from '../assets/google.webp'
import img08 from '../assets/08.png'
import img09 from '../assets/09.png'
import img010 from '../assets/010.png'
import img011 from '../assets/011.png'
import img012 from '../assets/012.png'
import img013 from '../assets/013.png'
import img014 from '../assets/014.png'
import img015 from '../assets/015.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'
import img13 from '../assets/13.png'
import img14 from '../assets/14.png'
import img15 from '../assets/15.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import img20 from '../assets/20.png'
import img21 from '../assets/21.png'
import img22 from '../assets/22.png'
import img23 from '../assets/23.png'
import img24 from '../assets/24.png'
import img25 from '../assets/25.png'
import img26 from '../assets/26.jpg'
import img30 from '../assets/30.jpeg'
import img34 from '../assets/34.jpg'
import img027 from '../assets/027.png'
import img028 from '../assets/028.png'
import img029 from '../assets/029.png'
import img030 from '../assets/030.png'
import about from '../assets/about.png'
import logo from '../assets/Digital-Xperts-logo-original.webp'
import epicyatra from '../assets/epicyatra.jpeg'
import setsincity from '../assets/setsincity.jpeg'
import brm from '../assets/brm.jpeg'
import beeta from '../assets/beeta.jpeg'
import { FaCoffee } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const testimonials = [
    {
        name: "Dr. Anshuman",
        role: "Client",
        text: "“We saw an immediate improvement in both traffic and conversion rates after implementing the SEO strategies provided by this team. Their expertise, dedication, and transparency throughout the process were invaluable to our business growth.”",
    },
    {
        name: "Rakesh Singh",
        role: "Client",
        text: "“Working with this agency has transformed our digital marketing efforts. Their expert SEO strategies significantly boosted our search rankings, driving more targeted traffic to our website. We’ve seen substantial growth in visibility and sales.”",
    },
    {
        name: "R.M.Dembla",
        role: "Client",
        text: "“The team’s SEO strategy has been a key factor in improving our site rankings and visibility. Their professionalism and thorough approach have made a significant impact, and we are seeing a notable increase in web traffic and engagement.”",
    },
    {
        name: "Mr. Akash",
        role: "Client",
        text: "“The SEO work carried out by this agency has been instrumental in driving our website’s traffic and improving visibility on Google. We are now seeing more conversions and growing recognition in our industry, thanks to their expert guidance and approach.”",
    },
    {
        name: "Nitesh Kumar",
        role: "Client",
        text: "“The agency helped us improve our SEO efforts and achieve higher rankings on search engines. Our website now generates more organic traffic and potential leads. We are incredibly pleased with the results and their dedication to our business growth.”",
    },
    {
        name: "Mr. Vipin Singhal",
        role: "Client",
        text: "“The team’s SEO strategies have significantly increased our search rankings, bringing in more high-quality leads. Their deep knowledge and hands-on approach were key in achieving our business goals. We highly recommend their services for any company looking to grow.”",
    },

];
const steps = [
    { title: "Initial Consultation", description: "Understanding your business and goals." },
    { title: "Keyword Research & Competitor Analysis", description: "Deep research into keywords and competitors." },
    { title: "Mutual Keyword Finalization", description: "Selecting the best keywords for targeting." },
    { title: "Proposal and Signup", description: "Agree on the plan and onboard." },
    { title: "Pre-SEO Website Diagnosis", description: "Audit current site status and ranking." },
    { title: "Analytics Setup", description: "Setting up tracking and analytics tools." },
    { title: "Optimize Site Content & Code", description: "Implementing improvements for SEO." },
    { title: "Off-page Link Building", description: "Building authority through backlinks." },
    { title: "Local SEO", description: "Targeting local search optimization." },
    { title: "Social Bookmarking", description: "Enhancing visibility via bookmarking sites." },
    { title: "Periodic Performance Reporting", description: "Tracking growth and sharing reports." },
    { title: "Keyword Ranks Achieved", description: "Celebrating keyword ranking success!" },
    { title: "Periodic Review", description: "Regular review and strategy adjustment." },
];



const brandLogos = [
    // { src: img, alt: "Sarvodaya Healthcare" },
    { src: img1, alt: "Sets City" },
    { src: img2, alt: "Epic Yatra" },
    { src: img3, alt: "Beeta" },
    { src: img4, alt: "Shoorveer" },
    // { src: img5, alt: "My Design Angel" },c:\Users\Marketing\Downloads\027.png c:\Users\Marketing\Downloads\028.png c:\Users\Marketing\Downloads\029.png c:\Users\Marketing\Downloads\030.png
    { src: img6, alt: "BRM Chemicals" },
    { src: img7, alt: "Ghai Homoeo Remedies" },
    { src: img08, alt: "Ghai Homoeo Remedies" },
    { src: img09, alt: "Ghai Homoeo Remedies" },
    { src: img010, alt: "Ghai Homoeo Remedies" },
    { src: img011, alt: "Ghai Homoeo Remedies" },
    { src: img012, alt: "Ghai Homoeo Remedies" },
    { src: img013, alt: "Ghai Homoeo Remedies" },
    { src: img014, alt: "Ghai Homoeo Remedies" },
    { src: img015, alt: "Ghai Homoeo Remedies" },
    { src: img027, alt: "Ghai Homoeo Remedies" },
    { src: img028, alt: "Ghai Homoeo Remedies" },
    { src: img029, alt: "Ghai Homoeo Remedies" },
    { src: img030, alt: "Ghai Homoeo Remedies" },

];


const faqs = [
    {
        question: "Do you require a contract?",
        answer:
            "We offer flexible terms for our SEO services, including month-to-month contracts or longer-term agreements. We want to ensure that our clients are happy with the results and value we bring, so we don’t lock you into long-term contracts without results.",
    },
    {
        question: "Should I ask to see SEO results or proof of success?",
        answer:
            "Yes, we encourage you to ask for case studies or success stories from previous clients. A reputable SEO agency should be transparent about the work they’ve done and the results they’ve achieved. We’re happy to share our track record and help you feel confident in our approach.",
    },
    {
        question: "Will you provide regular updates on the SEO work being done?",
        answer:
            "Absolutely! We believe in transparency and communication. You will receive detailed reports on the work we’ve done, keyword rankings, and traffic improvements on a regular basis. We also provide insight into our next steps and ongoing strategies to continue improving your site's performance.",
    },
    {
        question: "What is on-page SEO, and why is it important?",
        answer:
            "On-page SEO refers to the optimization of the content and HTML source code of a webpage. It involves optimizing titles, headings, meta descriptions, content, images, and URLs to ensure they are search engine-friendly. Proper on-page SEO ensures that search engines can understand your content, improving your rankings and visibility in search results.",
    },
    {
        question: "How much do your SEO services cost each month?",
        answer:
            "The cost of our SEO services depends on the scope of the project and the level of service required. We offer flexible pricing to accommodate different budgets, whether you're looking for local SEO services, a full website audit, or an ongoing SEO campaign. Please contact us for a personalized quote.",
    },
];
const featuresData = {
    heading: "Explore Our SEO Process",
    features: [
        {
            title: "SEO/SEM",
            description: "Boost your visibility on search engines and drive quality traffic to your website.",
            link: "#",
            image: "/assets/seo.png"
        },
        {
            title: "Digital Marketing",
            description: "Integrated digital campaigns tailored to your target audience.",
            link: "#",
            image: "/assets/marketing.png"
        },
        {
            title: "Social Media",
            description: "Engage your audience and grow your brand presence on all major platforms.",
            link: "#",
            image: "/assets/social.png"
        },
        {
            title: "Content Marketing",
            description: "Create compelling content that attracts and converts your audience.",
            link: "#",
            image: "/assets/content.png"
        },
        {
            title: "Technical SEO",
            description: "Ensure your website is optimized for search engine crawlers and speed.",
            link: "#",
            image: "/assets/technical.png"
        },
        {
            title: "Analytics & Reporting",
            description: "Track SEO performance with detailed and actionable insights.",
            link: "#",
            image: "/assets/analytics.png"
        }
    ]
};
const services = [
    {
        title: 'Enterprise SEO',
        description:
            'Tailored SEO strategies for enterprise-level websites with large-scale pages, ensuring successful SERP results through deep expertise and rigorous discipline.',
        img: img10,
    },
    {
        title: 'Local and Hyperlocal SEO',
        description:
            'Optimize your Google Business Profile to appear in local and location-based searches, reaching the right audience near you.',
        img: img12,
    },
    {
        title: 'ECommerce SEO',
        description:
            'Boost visibility and rankings in a competitive marketplace by optimizing your product and category pages for better SERP performance.',
        img: img11,
    },
    {
        title: 'Content Writing and Marketing Services',
        description:
            'Create and distribute high-quality, SEO-friendly content that enhances your brand’s visibility and voice to engage your target audience.',
        img: img13,
    },
    {
        title: 'Multilingual and Vernacular SEO',
        description:
            'Leverage regional languages to expand your reach and connect with new audiences. Craft localized content to build trust and resonate with diverse customers.',
        img: img14,
    },
    {
        title: 'Online Reputation Management',
        description:
            'Enhance trust and credibility with reputation monitoring and management services, ensuring a positive online image.',
        img: img15,
    },
    {
        title: 'Link Building Services',
        description:
            'Develop a strong backlink profile by publishing content on authoritative, niche websites, showcasing your expertise and authority.',
        img: img16,
    },
    {
        title: 'Google Penalty Recovery',
        description:
            'Recover from Google penalties that cause traffic and ranking drops with expert support from our team to regain your site’s performance.',
        img: img17,
    },
];



function Home() {

    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        website: "",
        keywordPlan: "",
        description: "",
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize the navigate function

    // Validation function (as you already have it)
    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
        if (!formData.mobileNumber.trim()) {
            newErrors.mobileNumber = "Mobile Number is required.";
        } else if (!/^\d{10,15}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = "Enter a valid Mobile Number (10-15 digits).";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid Email Address.";
        }
        if (!formData.website.trim()) {
            newErrors.website = "Website is required.";
        } else if (!/^(https?:\/\/)?([\w\d-]+\.){1,2}[a-z]{2,6}(\/.*)?$/.test(formData.website)) {
            newErrors.website = "Enter a valid Website URL.";
        }
        if (!formData.keywordPlan) newErrors.keywordPlan = "Please select a Keyword Plan.";
        if (!formData.agree) newErrors.agree = "You must agree to the terms.";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});

            try {
                const response = await fetch('http://localhost:5000/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert('Form submitted successfully!');
                    setFormData({
                        fullName: "",
                        mobileNumber: "",
                        email: "",
                        website: "",
                        keywordPlan: "",
                        description: "",
                        agree: false,
                    });

                    // Redirect to the "Thank You" page after successful submission
                    navigate('/thankyou');
                } else {
                    alert('Failed to submit form.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Something went wrong.');
            }
        }
    };



    return (
        <>
            <div className="font-sans ">
                {/* Header */}
                <header className="bg-white shadow-md px-6 py-3 flex items-center fixed top-0 w-full justify-between md:px-16 z-50">
                    <div className="flex-1 flex justify-center md:justify-start">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </div>

                    <div className="hidden md:block">
                        <a href="tel:+1234567890">
                            <button className="bg-pink-500 text-white px-4 py-2 rounded">
                                +91 9354883100
                            </button>
                        </a>
                    </div>
                </header>



                {/* Hero Section */}
                <section className="bg-[#043873] text-white mt-[40px] py-20">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* Left Content */}
                        <div className="md:w-1/2">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Boost Your Website Leads,<br />
                                Traffic and Revenue with our<br />
                                Premium SEO Services
                            </h1>
                            <p className="text-[#dbeafe] text-lg mb-8">
                                Experience remarkable results with DigitalXperts.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-lg">
                                    <span className="text-2xl mr-3">👥</span>
                                    <span><strong>Avg. 90%</strong> Growth in Leads</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="text-2xl mr-3">📊</span>
                                    <span><strong>Avg. 80%</strong> Growth in Revenue</span>
                                </div>
                                <div className="flex items-center text-lg">
                                    <span className="text-2xl mr-3">🔎</span>
                                    <span><strong>Avg. 143%</strong> Growth in Top 10 Keywords</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="w-full md:w-[40%] bg-white text-gray-800 shadow-xl rounded-lg p-8">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name*"
                                        className="w-full border border-gray-300 px-4 py-3 rounded text-base"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="mobileNumber"
                                        placeholder="Mobile Number*"
                                        className="w-full border border-gray-300 px-4 py-3 rounded text-base"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                    />
                                    {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address*"
                                        className="w-full border border-gray-300 px-4 py-3 rounded text-base"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="website"
                                        placeholder="Your Website*"
                                        className="w-full border border-gray-300 px-4 py-3 rounded text-base"
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                    {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website}</p>}
                                </div>

                                <div>
                                    <select
                                        name="keywordPlan"
                                        className="w-full border border-gray-300 px-4 py-3 rounded text-base"
                                        value={formData.keywordPlan}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Keywords Plan*</option>
                                        <option value="10-20">10-20 Keywords</option>
                                        <option value="20-30">20-30 Keywords</option>
                                        <option value="30-50">30-50 Keywords</option>
                                        <option value="50-80">50-80 Keywords</option>
                                    </select>
                                    {errors.keywordPlan && <p className="text-red-500 text-xs mt-1">{errors.keywordPlan}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="description"
                                        placeholder="Enter your description"
                                        className="w-full border border-gray-300 px-4 py-3 rounded text-base"
                                        rows="3"
                                        value={formData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <div className="flex items-start text-xs text-gray-600">
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        className="mr-2 mt-1"
                                        checked={formData.agree}
                                        onChange={handleChange}
                                    />
                                    <span>I agree to share my information as per the terms and conditions.</span>
                                </div>
                                {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}

                                <button
                                    type="submit"
                                    className="bg-yellow-400 text-blue-900 font-bold text-lg px-6 py-3 rounded w-full hover:bg-yellow-500"
                                >
                                    Get Free SEO Audit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>


                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our SEO Process</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {steps.map((step, index) => {
                                const isLastOddItem = steps.length % 2 !== 0 && index === steps.length - 1;
                                return (
                                    <div
                                        key={index}
                                        className={`relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${isLastOddItem ? 'md:col-start-2' : ''
                                            }`}
                                    >
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold mt-6 mb-2 text-center">{step.title}</h3>
                                        <p className="text-gray-600 text-center text-sm">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-12 bg-gradient-to-r from-gray-50 to-white flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-20">
                    <div className="w-full md:w-[400px]">
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={img30}
                                alt="Person"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="w-full md:max-w-lg text-center md:text-left space-y-6 mt-8 md:mt-0">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                            Strategic SEO Steps That Turn <span className="text-indigo-600">Clicks Into Customers </span>
                        </h2>
                        <div className="text-left">
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                                With over <span className="font-semibold text-indigo-500">10 years</span> of experience, our expert team knows what it takes to turn ideas into impactful digital products.
                                <br /><br />
                                From strategy to execution, we guide you every step with creativity, proven process, and cutting-edge technology to ensure your product not only launches — but <span className="font-semibold">thrives</span>.
                            </p>
                        </div>

                        <div>
                            <a href="tel:+919354883100">
                                <button className="mt-4 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
                                    Let's Build Together
                                </button>
                            </a>

                        </div>
                    </div>
                </section>

                {/*brand */}
                <div className="py-16 bg-gray-50 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                        Trusted by Leading Brands
                    </h2>

                    <div className="w-full overflow-x-auto">
                        <div className="w-full px-4 py-6">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={20}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{ delay: 1000, disableOnInteraction: false }}
                                breakpoints={{
                                    640: { slidesPerView: 3 },
                                    768: { slidesPerView: 4 },
                                    1024: { slidesPerView: 5 },
                                }}
                            >
                                {brandLogos.map((logo, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex justify-center items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                                            <img
                                                src={logo.src}
                                                alt={logo.alt}
                                                className="h-24 w-auto object-contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </div>


                {/* Pricing */}
                <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Types of SEO</h2>

                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We specialize in delivering results through tailored SEO strategies, advanced optimization techniques,
                            and ongoing improvements to help your business grow and succeed online.
                        </p>
                    </div>
                    <div className="md:p-14 grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
                                <img src={service.img} alt={service.title} className="w-16 h-16" />
                                <div>
                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                    <p className="text-gray-600 mt-1">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>





                <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-center">
                    <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
                        Why Choose <span className="text-indigo-600">Our SEO Services</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
                        {[
                            {
                                title: "Proven SEO Strategies",
                                desc: "We implement data-driven strategies that consistently deliver higher rankings and organic traffic.",
                                icon: img20,
                            },
                            {
                                title: "Experienced SEO Experts",
                                desc: "Our team of SEO specialists stays ahead of Google’s algorithms to keep your site optimized.",
                                icon: img21,
                            },
                            {
                                title: "Customized SEO Plans",
                                desc: "Every business is unique—we tailor SEO plans that align with your goals and target audience.",
                                icon: img22,
                            },
                            {
                                title: "Transparent Reporting",
                                desc: "Track your SEO performance with detailed monthly reports and real-time analytics dashboards.",
                                icon: img23,
                            },
                            {
                                title: "White-Hat Techniques",
                                desc: "We follow ethical SEO practices that build long-term success and avoid penalties.",
                                icon: img24,
                            },
                            {
                                title: "Full-Service Support",
                                desc: "From technical audits to content optimization—we handle every aspect of your SEO.",
                                icon: img25,
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl shadow-md hover:shadow-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group"
                            >
                                <div className="w-20 h-20 mb-6 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition">
                                    <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-600">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* CTA Section */}
                <section className="bg-indigo-900 text-white text-center py-24 px-6 relative overflow-hidden">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight flex flex-wrap justify-center items-center gap-3">
                        Let's talk about your project

                    </h2>

                    <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
                        Ready to grow your business? Let’s work together on an SEO strategy made just for you—one that boosts your website traffic, brings in more leads, and helps your brand get noticed online.  </p>

                    <a href="tel:+919354883100" className="inline-block">
                        <button className="bg-pink-500 hover:bg-pink-600 active:scale-95 transition transform px-8 py-3 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl">
                            ☕ Start Growing with SEO
                        </button>
                    </a>

                    {/* Optional decorative element */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-indigo-900 to-transparent"></div>
                </section>


                <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center">
                    <h2 className="text-4xl font-extrabold mb-12 text-gray-800">
                        Frequently Asked <span className="text-indigo-600">Questions</span>
                    </h2>

                    <div className="max-w-4xl mx-auto text-left space-y-6 px-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg p-6 transition-all duration-300 cursor-pointer group"
                                onClick={() => toggleFAQ(idx)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                                        {faq.question}
                                    </h3>
                                    <span className="text-2xl text-indigo-500 transition-transform duration-300">
                                        {openIndex === idx ? "−" : "+"}
                                    </span>
                                </div>

                                <div
                                    ref={(el) => (contentRefs.current[idx] = el)}
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight:
                                            openIndex === idx
                                                ? contentRefs.current[idx]?.scrollHeight + "px"
                                                : "0px",
                                    }}
                                >
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-indigo-900 text-white text-center py-24 px-6 relative overflow-hidden">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Ready to <span className="text-pink-400">Dominate</span> Search Results?
                    </h2>

                    <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
                        Supercharge your online presence — rank higher, drive organic traffic, and watch your business grow with our powerful, proven SEO strategies.
                    </p>

                    <a href="tel:+919354883100" className="inline-block">
                        <button className="bg-pink-500 hover:bg-pink-600 active:scale-95 transition transform px-8 py-3 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl">
                            Claim Your Free Strategy Call
                        </button>
                    </a>

                    {/* Optional background flare */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                            <circle cx="400" cy="200" r="300" fill="#ffffff22" />
                        </svg>
                    </div>
                </section>




                <div className="bg-gray-50 py-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">EXCELLENT</h2>
                        <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, idx) => (
                                <FaStar key={idx} className="text-yellow-400 text-xl" />
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm">
                            Based on {testimonials.length} reviews
                        </p>
                        <div className="flex justify-center items-center mt-2">
                            <img src={google} alt="Google" className="w-24 h-8" />

                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-4">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop
                            spaceBetween={30}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="font-semibold">{testimonial.name}</h3>
                                                <p className="text-xs text-gray-500">{testimonial.role}</p>
                                            </div>
                                            <FaGoogle className="text-red-500 text-xl" />
                                        </div>
                                        <div className="flex items-center mb-3">
                                            {[...Array(5)].map((_, idx) => (
                                                <FaStar key={idx} className="text-yellow-400 text-sm" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-sm mb-4">{testimonial.text}</p>
                                        <div>
                                            <button className="text-blue-500 text-sm font-medium">
                                                Read more
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <section className="w-full py-16 bg-gray-50">
                    <div className="text-center mb-12 px-4">
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">Case Studies</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Discover how we've helped brands grow and succeed
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                        {[epicyatra, setsincity, beeta, brm].map((image, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-2xl shadow-md border border-black group hover:shadow-2xl transition-all duration-500 bg-white"
                            >
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Case Study ${index + 1}`}
                                        className="w-full h-auto sm:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>



                <section className="bg-indigo-900 text-white text-center py-24 px-6 relative overflow-hidden">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Ready to <span className="text-pink-400">Elevate</span> Your Brand?
                    </h2>

                    <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-200">
                        Let’s bring your vision to life. From bold ideas to stunning digital experiences — we’re here to make your brand unforgettable.
                    </p>

                    <a href="tel:+919354883100" className="inline-block">
                        <button className="bg-pink-500 hover:bg-pink-600 active:scale-95 transition transform px-8 py-3 rounded-full font-semibold text-white shadow-xl hover:shadow-2xl">
                            ✨ Unlock My SEO Plan
                        </button>
                    </a>

                    {/* Decorative background swirl (optional) */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                </section>


                {/* Footer */}
                <footer class="text-center text-sm py-4">© 2015–2025 DigitalXperts. All Rights Reserved.</footer>

            </div>


        </>
    )
}

export default Home
