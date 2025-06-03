import Image from "../components/Image";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About Byte Wisdom</h1>
                <p className="text-gray-600 text-lg">A personal space for sharing tech insights and knowledge</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Byte Wisdom is my personal project where I share my thoughts, experiences, and knowledge about technology. 
                        I created this platform to document my learning journey and share valuable insights with others who are 
                        passionate about tech. Whether you're a fellow developer, tech enthusiast, or just curious about technology, 
                        you're welcome to join and share your own experiences.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="bytewisdomLogo2.png" 
                        alt="Byte Wisdom Logo" 
                        w={200} 
                        h={200}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Personal Insights</h3>
                    <p className="text-gray-600">
                        Sharing my personal experiences, challenges, and solutions in the tech world, 
                        from development to design and everything in between.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Open Platform</h3>
                    <p className="text-gray-600">
                        While this is my personal project, I welcome contributions and discussions 
                        from anyone interested in sharing their tech knowledge.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                    <p className="text-gray-600">
                        A space where I document my learning journey and share the latest tech trends 
                        and developments I discover.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-6">Join the Journey</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                    Whether you want to read about tech, share your own experiences, or just explore the content,
                    you're welcome to be part of this journey. Let's learn and grow together in the world of technology.
                </p>
                <Link to="/posts">
                    <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition-colors">
                        Start Reading
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutPage;