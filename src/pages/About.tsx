import { 
  ArrowRight, Users, GraduationCap, Heart, Handshake, 
  Leaf, Brain, BookOpen, UtensilsCrossed, HeartPulse, 
  Users2, BookOpen as Workshop, Sprout 
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sanjay Joshi",
      role: "Founder & President",
      image: "/placeholder.svg",
      bio: "An IT professional with over 20 years of experience, Sanjay is driven by his vision of serving humanity through innovative solutions.",
    },
    {
      name: "Prachi Gupta",
      role: "Program Director",
      image: "/placeholder.svg",
      bio: "With expertise in social work and community development, Prachi leads our initiatives with passion and dedication.",
    },
    {
      name: "Amit Kumar",
      role: "Education Head",
      image: "/placeholder.svg",
      bio: "A seasoned educator committed to blending traditional values with modern learning approaches.",
    },
    {
      name: "Dr. Meera Patel",
      role: "Health Programs Lead",
      image: "/placeholder.svg",
      bio: "A medical professional bringing healthcare expertise to our wellness initiatives.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation Established",
      description: "Started with a vision to create a service-oriented movement based on Vedic values"
    },
    {
      year: "2021",
      title: "Education Programs Launch",
      description: "Initiated value-based education programs in multiple communities"
    },
    {
      year: "2022",
      title: "Food Security Initiative",
      description: "Launched sustainable food distribution and nutrition programs"
    },
    {
      year: "2023",
      title: "Wellness Program Expansion",
      description: "Extended holistic wellness programs to serve more communities"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-[#0A0F1A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Prachetas Foundation is a <span className="text-[#FFD700]">dedicated team of professionals</span> united by a shared vision of service. Our name draws inspiration from the ancient sage Prachetas, known for his deep meditation and service to humanity. We believe in the power of combining <span className="text-[#FFD700]">modern solutions with timeless Vedic wisdom</span> to create meaningful change in society.
            </p>
            <div className="mt-4 mb-8">
              <p className="text-xl text-gray-200 italic">
                "Service to humanity is service to divinity."
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <Button asChild className="bg-[#FFD700] text-black hover:bg-[#E5C100] transition-colors">
                <Link to="/donate">Support Our Cause</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black">
                <Link to="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">Our Mission: Why We Exist</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We believe the true measure of progress is how we uplift those in need — not just with money or materials, but with the tools to live better, think clearer, and serve others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">To Eliminate Hunger</h3>
                    <p className="text-gray-200 leading-relaxed">
                      By providing sanctified, nourishing meals to the underprivileged, slum communities, patients, and the homeless.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">To Empower Youth</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Through seminars, courses, and mentorships that blend science, spirituality, and life skills — protecting them from addiction, stress, low self-worth, and destructive habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <Leaf className="h-8 w-8 text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">To Promote Wellness</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Offering free yoga, naturopathy, mindfulness, and sustainable living workshops that heal the body and mind without dependency on medicines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-8 w-8 text-[#FFD700] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-[#FFD700] mb-2">To Uplift Society Spiritually</h3>
                    <p className="text-gray-200 leading-relaxed">
                      Instilling inner strength, discipline, and purpose-driven living through Vedic-inspired, secular programs for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-200 leading-relaxed">
              Our goal is not short-term charity, but long-term transformation — to create a society where compassion becomes culture, and every person is empowered to live a fulfilling, value-based life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-[#0A0F1A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">Our Approach</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We take a holistic and grassroots approach to social change — combining inner transformation with practical support. Our work is driven by service, guided by wisdom, and powered by community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Character Education */}
            <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <Brain className="h-8 w-8 text-[#FFD700] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">Character Education</h3>
                  <p className="text-gray-200">
                    Guide youth toward clarity, self-control, and moral strength through structured programs and mentorship.
                  </p>
                </div>
              </div>
            </div>

            {/* Food Distribution */}
            <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <UtensilsCrossed className="h-8 w-8 text-[#FFD700] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">Food Distribution</h3>
                  <p className="text-gray-200">
                    Run daily meal drives for underserved communities, ensuring nutrition and dignity for all.
                  </p>
                </div>
              </div>
            </div>

            {/* Wellness Programs */}
            <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <HeartPulse className="h-8 w-8 text-[#FFD700] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">Free Wellness Programs</h3>
                  <p className="text-gray-200">
                    Promote medicine-free, sattvik lifestyles for all through yoga and natural healing practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Engagement */}
            <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <Users2 className="h-8 w-8 text-[#FFD700] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">Community Engagement</h3>
                  <p className="text-gray-200">
                    Mobilize volunteers and partners for grassroots impact and sustainable community development.
                  </p>
                </div>
              </div>
            </div>

            {/* Workshops & Seminars */}
            <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <Workshop className="h-8 w-8 text-[#FFD700] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">Workshops & Seminars</h3>
                  <p className="text-gray-200">
                    Host sessions on smart work, stress relief, and self-mastery for personal growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Sustainable Living */}
            <div className="bg-[#111827] p-6 rounded-xl hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <Sprout className="h-8 w-8 text-[#FFD700] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">Sustainable Living</h3>
                  <p className="text-gray-200">
                    Encourage conscious habits, clean environments, and minimalism for a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-[#0A0F1A] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-[#FFD700] text-black font-bold px-4 py-2 rounded-lg shrink-0">
                    {milestone.year}
                  </div>
                  <div className="bg-[#111827] p-6 rounded-xl flex-grow">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-200">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#111827] rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#FFD700] mb-4">{member.role}</p>
                  <p className="text-gray-200">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-[#0A0F1A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Together, we can create lasting change and build a better future for all.
            Your support makes our work possible.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-[#FFD700] text-black hover:bg-[#E5C100]">
              <Link to="/donate">Make a Donation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black">
              <Link to="/volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
