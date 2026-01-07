"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Calendar, Star, MessageSquare, Award, Briefcase, GraduationCap, Users, Target } from "lucide-react";

interface MentorProfileProps {
  mentor: {
    name: string;
    title: string;
    company: string;
    bio: string;
    expertise: string[];
    experience: string;
    rating: number;
    availability: string;
    sessions: number;
    responseTime: string;
  };
}

export function MentorProfile({ mentor }: MentorProfileProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
          {mentor.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h1 className="text-4xl font-bold mb-2">{mentor.name}</h1>
        <p className="text-xl text-gray-600 mb-2">{mentor.title}</p>
        <p className="text-lg text-gray-500 mb-4">{mentor.company}</p>
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="font-semibold">{mentor.rating}</span>
          </div>
          <Badge variant="outline">{mentor.availability}</Badge>
          <Badge variant="secondary">{mentor.sessions}+ sessions</Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{mentor.rating}</div>
            <div className="text-sm text-gray-600">Rating</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{mentor.sessions}+</div>
            <div className="text-sm text-gray-600">Mentoring Sessions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">{mentor.responseTime}</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">{mentor.expertise.length}</div>
            <div className="text-sm text-gray-600">Areas of Expertise</div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="expertise">Expertise</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About {mentor.name}</CardTitle>
              <CardDescription>Learn more about your mentor's background and approach</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mentoring Approach</CardTitle>
              <CardDescription>How I work with my mentees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Open Communication</h4>
                    <p className="text-gray-600">I believe in creating a safe space for open dialogue and honest feedback.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Goal-Oriented</h4>
                    <p className="text-gray-600">We'll work together to set clear, achievable goals for your career development.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Personalized Guidance</h4>
                    <p className="text-gray-600">Every mentee is unique, and I tailor my approach to your specific needs and goals.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expertise" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Areas of Expertise</CardTitle>
              <CardDescription>Specialized knowledge and skills I can help you develop</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {mentor.expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="p-3 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Topics I Can Help With</CardTitle>
              <CardDescription>Specific areas where I provide guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Career Development</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Resume and CV optimization</li>
                    <li>• Interview preparation</li>
                    <li>• Career path planning</li>
                    <li>• Networking strategies</li>
                    <li>• Salary negotiation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technical Skills</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Research methodology</li>
                    <li>• Data analysis</li>
                    <li>• Laboratory techniques</li>
                    <li>• Scientific writing</li>
                    <li>• Project management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
              <CardDescription>My career journey and key achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Briefcase className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">{mentor.title}</h4>
                    <p className="text-gray-600">{mentor.company}</p>
                    <p className="text-sm text-gray-500">{mentor.experience}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Key Achievements</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Led multiple successful research projects</li>
                      <li>• Published in peer-reviewed journals</li>
                      <li>• Mentored 50+ students and professionals</li>
                      <li>• Received industry recognition awards</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-gray-600">PhD in relevant field with honors</p>
                    <p className="text-sm text-gray-500">Additional certifications and specialized training</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="space-y-4">
            {[
              {
                name: "Sarah Johnson",
                role: "Graduate Student",
                rating: 5,
                date: "2 weeks ago",
                comment: "Dr. Chen has been an incredible mentor! Her guidance helped me secure a research position and navigate the complexities of academic career paths."
              },
              {
                name: "Michael Park",
                role: "Research Associate",
                rating: 5,
                date: "1 month ago",
                comment: "The insights and advice I received were invaluable. Professor Rodriguez has a unique ability to break down complex concepts and provide practical guidance."
              },
              {
                name: "Emily Davis",
                role: "Recent Graduate",
                rating: 4,
                date: "2 months ago",
                comment: "Dr. Watson helped me transition from academia to industry. Her real-world experience and network were incredibly helpful."
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role} • {review.date}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          <MessageSquare className="h-5 w-5 mr-2" />
          Send Message
        </Button>
        <Button size="lg" variant="outline">
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Session
        </Button>
        <Button size="lg" variant="outline">
          <Mail className="h-5 w-5 mr-2" />
          Send Email
        </Button>
      </div>
    </div>
  );
}