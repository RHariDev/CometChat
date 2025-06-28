import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Zap,
  Award,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative">
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] left-[80%] w-0.5 h-0.5 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-[30%] left-[25%] w-0.5 h-0.5 bg-purple-200 rounded-full opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-yellow-200 rounded-full opacity-50"></div>
        <div className="absolute top-[40%] left-[10%] w-0.5 h-0.5 bg-pink-200 rounded-full opacity-60 animate-pulse delay-700"></div>
        <div className="absolute top-[50%] left-[85%] w-1 h-1 bg-cyan-200 rounded-full opacity-80"></div>
        <div className="absolute top-[60%] left-[40%] w-0.5 h-0.5 bg-white rounded-full opacity-50 animate-pulse delay-300"></div>
        <div className="absolute top-[70%] left-[70%] w-0.5 h-0.5 bg-blue-300 rounded-full opacity-70"></div>
        <div className="absolute top-[80%] left-[20%] w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-pulse delay-1500"></div>
        <div className="absolute top-[25%] left-[45%] w-0.5 h-0.5 bg-yellow-300 rounded-full opacity-80"></div>
        <div className="absolute top-[35%] left-[75%] w-0.5 h-0.5 bg-pink-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute top-[45%] left-[5%] w-1 h-1 bg-cyan-300 rounded-full opacity-70"></div>
        <div className="absolute top-[55%] left-[90%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse delay-800"></div>
        <div className="absolute top-[65%] left-[55%] w-0.5 h-0.5 bg-blue-400 rounded-full opacity-80"></div>
        <div className="absolute top-[75%] left-[30%] w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse delay-1200"></div>
        <div className="absolute top-[85%] left-[65%] w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-70"></div>
        <div className="absolute top-[5%] left-[35%] w-0.5 h-0.5 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute top-[95%] left-[50%] w-1 h-1 bg-cyan-400 rounded-full opacity-80 animate-pulse delay-200"></div>
        {/* Additional tiny stars */}
        <div className="absolute top-[12%] left-[28%] w-0.5 h-0.5 bg-white rounded-full opacity-70 animate-pulse delay-400"></div>
        <div className="absolute top-[22%] left-[52%] w-0.5 h-0.5 bg-blue-300 rounded-full opacity-50"></div>
        <div className="absolute top-[32%] left-[88%] w-0.5 h-0.5 bg-purple-300 rounded-full opacity-60 animate-pulse delay-600"></div>
        <div className="absolute top-[42%] left-[18%] w-0.5 h-0.5 bg-yellow-300 rounded-full opacity-80"></div>
        <div className="absolute top-[52%] left-[72%] w-0.5 h-0.5 bg-pink-300 rounded-full opacity-50 animate-pulse delay-900"></div>
        <div className="absolute top-[62%] left-[8%] w-0.5 h-0.5 bg-cyan-300 rounded-full opacity-70"></div>
        <div className="absolute top-[72%] left-[92%] w-0.5 h-0.5 bg-white rounded-full opacity-60 animate-pulse delay-1100"></div>
        <div className="absolute top-[82%] left-[48%] w-0.5 h-0.5 bg-blue-400 rounded-full opacity-80"></div>
        <div className="absolute top-[18%] left-[38%] w-0.5 h-0.5 bg-purple-400 rounded-full opacity-50 animate-pulse delay-1300"></div>
        <div className="absolute top-[28%] left-[68%] w-0.5 h-0.5 bg-yellow-400 rounded-full opacity-70"></div>
        <div className="absolute top-[38%] left-[78%] w-0.5 h-0.5 bg-pink-400 rounded-full opacity-60"></div>
        <div className="absolute top-[48%] left-[12%] w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-80 animate-pulse delay-1600"></div>
        <div className="absolute top-[58%] left-[82%] w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-[68%] left-[22%] w-0.5 h-0.5 bg-blue-200 rounded-full opacity-70 animate-pulse delay-1800"></div>
        <div className="absolute top-[78%] left-[58%] w-0.5 h-0.5 bg-purple-200 rounded-full opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className="relative bg-black/50 backdrop-blur-sm border-b border-white/5 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-white text-xl">
                comet<span className="font-semibold">chat</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                Log in
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70 transition-all duration-200">
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        {/* Glowing Moon Orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-sm opacity-40 animate-pulse shadow-lg shadow-orange-500/50"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-sm opacity-40 animate-pulse delay-1000 shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full blur-sm opacity-30 animate-pulse delay-500 shadow-md shadow-green-400/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
                Join the CometChat
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  partner universe
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Create value for your clients, leveraging our world-class
                technology. Partner with us and grow your business.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Become a partner
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="pt-6">
                  <Button className="w-2/5 bg-purple-600 hover:bg-purple-700 text-white py-3 shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70 transition-all duration-200">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Sliding Section */}
      <section className="bg-black py-16 overflow-hidden">
        <div className="w-full">
          <div className="flex items-center space-x-24 animate-scroll whitespace-nowrap">
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <span className="font-medium">10x</span>
              <span className="text-xl">GROWTH</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-10 h-10 bg-white/20 rounded"></div>
              <span className="font-medium">Microsoft</span>
            </div>
            <div className="text-3xl font-medium text-white min-w-max">
              NASSCOM
            </div>
            <div className="text-3xl text-white min-w-max">techstars</div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-8 h-8 bg-white/20 rounded"></div>
              <span>funding post</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-9 h-9 bg-white/20 rounded"></div>
              <span>cisco</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-10 h-10 bg-white/20 rounded"></div>
              <span>Oracle</span>
            </div>
            <div className="text-3xl font-medium text-white min-w-max">AWS</div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-9 h-9 bg-white/20 rounded"></div>
              <span>Salesforce</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-8 h-8 bg-white/20 rounded"></div>
              <span>Google</span>
            </div>
            {/* Repeat for continuous scroll */}
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <span className="font-medium">10x</span>
              <span className="text-xl">GROWTH</span>
            </div>
            <div className="flex items-center space-x-4 text-white text-3xl min-w-max">
              <div className="w-10 h-10 bg-white/20 rounded"></div>
              <span className="font-medium">Microsoft</span>
            </div>
            <div className="text-3xl font-medium text-white min-w-max">
              NASSCOM
            </div>
            <div className="text-3xl text-white min-w-max">techstars</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-black">
        {/* Partner Advantages */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-white/10 text-white border-white/20"
              >
                Be a partner
              </Badge>
              <h2 className="text-4xl font-semibold text-white mb-4">
                CometChat partner advantages
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Free access */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Free access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Access enabling partners to scale their business
                    efficiently.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Revenue Share */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Revenue Share
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Earn ongoing recurring revenue when you refer customers.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Implementation support */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Implementation support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Training and onboarding guidance including technical help
                    and expertise.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Technical developer access */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Technical developer access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Get all-in-one account to build unlimited POCs and demos.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Reduced Time */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Reduced Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Deploy your products much faster with our advance support &
                    solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Value addition to your users */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Value addition to your users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    We need a 2-line text here.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Knowledge sessions */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-indigo-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Knowledge sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Access to product and market sessions.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Co-branded support */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-teal-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Co-branded support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    Technical assistance for implementation.
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Significant partner success */}
              <Card className="bg-black border-0 hover:bg-gray-900 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-pink-400" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Significant partner success
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70">
                    We need a 2-line text here.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Programs */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Our programs
              </Badge>
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                Types of partnerships programmes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Affiliate partner program */}
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    Affiliate partner program
                  </CardTitle>
                  <CardDescription>
                    Bring value to your customers with a world-class
                    communication solution embedded into your engagement and
                    community-led User acquisition programmes.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Technology partner program */}
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    Technology partner program
                  </CardTitle>
                  <CardDescription>
                    Complement market oriented technology and joint value
                    creating, establishing long-term relationships that enable
                    using our SDKs and APIs, & complementing platforms, tools,
                    and services.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Start up growth program */}
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    Start up growth program
                  </CardTitle>
                  <CardDescription>
                    Are you facilitating technology, re-creating marketplace for
                    emerging start-ups? This program also enables VCs to
                    accelerate the growth of their portfolio companies.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white text-yellow-400 font-semibold border-0">
                FAQs
              </Badge>
              <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                We want to help you with all your doubts
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-gray-900">
                  This is a frequently asked question?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Tellus velit consequat
                  turpis tellus ipsum eget tristique erat vulputate lorem mattis
                  cursus at massa tellus ligula.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-gray-900">
                  This is a frequently asked question?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  This is a very long frequently asked question about our
                  services with more than four very.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-gray-900">
                  This is a frequently asked question?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-gray-900">
                  This is a question?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-gray-900">
                  This is a question?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <section className="relative bg-gradient-to-br from-black via-gray-950 to-black py-24 overflow-hidden">
        {/* Starry Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-[20%] left-[80%] w-0.5 h-0.5 bg-blue-200 rounded-full opacity-40"></div>
          <div className="absolute top-[30%] left-[25%] w-0.5 h-0.5 bg-purple-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-yellow-200 rounded-full opacity-30"></div>
          <div className="absolute top-[40%] left-[10%] w-0.5 h-0.5 bg-pink-200 rounded-full opacity-40 animate-pulse delay-700"></div>
          <div className="absolute top-[50%] left-[85%] w-1 h-1 bg-cyan-200 rounded-full opacity-60"></div>
          <div className="absolute top-[60%] left-[40%] w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-pulse delay-300"></div>
          <div className="absolute top-[70%] left-[70%] w-0.5 h-0.5 bg-blue-300 rounded-full opacity-50"></div>
          <div className="absolute top-[80%] left-[20%] w-1 h-1 bg-purple-300 rounded-full opacity-40 animate-pulse delay-1500"></div>
          <div className="absolute top-[85%] left-[75%] w-0.5 h-0.5 bg-yellow-300 rounded-full opacity-60"></div>
          <div className="absolute top-[25%] left-[45%] w-0.5 h-0.5 bg-pink-300 rounded-full opacity-50"></div>
          <div className="absolute top-[65%] left-[55%] w-1 h-1 bg-cyan-300 rounded-full opacity-70 animate-pulse delay-800"></div>
        </div>

        {/* Glowing Moon Orbs */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-sm opacity-40 animate-pulse shadow-lg shadow-orange-500/50"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-sm opacity-40 animate-pulse delay-1000 shadow-lg shadow-blue-500/50"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full blur-sm opacity-30 animate-pulse delay-500 shadow-md shadow-green-400/40"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
            Get started for free
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Build and ship tier and chat to your users from the first
            conversation to hypergrowth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white/5 hover:border-white/60"
            >
              Book free trial
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/50 hover:shadow-purple-600/70 transition-all duration-200">
              Schedule a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <div className="text-2xl mb-8">
              comet<span className="font-semibold">chat</span>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4 text-sm text-gray-400">
                <h4 className="font-normal text-purple-400 mb-4 text-base">
                  Chat & Messaging
                </h4>
                <p>SDKs</p>
                <p>REST APIs</p>
                <p>Security & Compliance</p>
                <p>Integrations</p>
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <h4 className="font-normal text-purple-400 mb-4 text-base">
                  Solutions
                </h4>
                <p>For customer support</p>
                <p>For social networking</p>
                <p>CometChat</p>
                <p>UI Kits</p>
                <p>Discussions</p>
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <h4 className="font-medium text-purple-400 mb-4 text-base">
                  Developers
                </h4>
                <p>Documentation and tutorials</p>
                <p>Tutorials</p>
                <p>Sample apps</p>
                <p>API</p>
                <p>SDK Release Notes</p>
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <h4 className="font-medium text-purple-400 mb-4 text-base">
                  Resources
                </h4>
                <p>Customer stories</p>
                <p>Become a partner</p>
                <p>Community forum</p>
                <p>Become a partner</p>
                <p>Partners</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-6">
              <span>© 2024 CometChat</span>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex space-x-2">
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
                <div className="w-5 h-5 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: 200%;
        }
      `}</style>
    </div>
  );
};

export default Index;
