"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, ExternalLink, BookOpen, Target, Users, Award } from "lucide-react";

interface CareerRoadmapProps {
  career: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    paths: number;
    resources: number;
  };
}

export function CareerRoadmapDetails({ career }: CareerRoadmapProps) {
  const [activeResourceTab, setActiveResourceTab] = useState("overview");

  const roadmapData = {
    "Medical Coder ": {
      description: "A Medical Coder converts doctors’ notes, diagnoses, and procedures into standard medical codes used for billing and insurance. This role ensures accurate healthcare documentation and smooth claim processing. It’s a fast-growing career in India with high demand from US-based healthcare companies.",
      overview: {
        salaryRange: "₹2.5 Lakh – ₹5 Lakh per year",
        jobOutlook: "Growing faster than average (6-8%)",
        keySkills: ["Experimental Design", "Data Analysis", "Scientific Writing", "Laboratory Techniques", "Critical Thinking"],
        education: "PhD in relevant field typically required"
      },
      flowchart: [
        { stage: "Bachelor's Degree", duration: "4 years", description: "Major in Biology, Chemistry, or related field" },
        { stage: "Research Experience", duration: "1-2 years", description: "Undergraduate research or lab technician position" },
        { stage: "Graduate School", duration: "5-7 years", description: "PhD program with research focus" },
        { stage: "Postdoctoral Research", duration: "2-5 years", description: "Advanced research training" },
        { stage: "Research Scientist", duration: "Career", description: "Independent research position" }
      ],
      pdfs: [
        { title: "Research Scientist Career Guide", size: "2.4 MB", downloads: 1542 },
        { title: "Laboratory Safety Manual", size: "1.8 MB", downloads: 892 },
        { title: "Grant Writing for Scientists", size: "3.1 MB", downloads: 654 },
        { title: "Data Analysis Best Practices", size: "2.7 MB", downloads: 423 }
      ],
      resources: [
        { title: "Nature Careers - Research Scientist", type: "Article", url: "#" },
        { title: "ResearchGate Community", type: "Platform", url: "#" },
        { title: "NIH Research Training", type: "Program", url: "#" },
        { title: "American Association for the Advancement of Science", type: "Organization", url: "#" }
      ]
    },
    "Clinical Research": {
      description: "Clinical research professionals conduct studies to test new treatments, drugs, and medical devices on human subjects to ensure safety and effectiveness.",
      overview: {
        salaryRange: "$55,000 - $110,000",
        jobOutlook: "Much faster than average (10-12%)",
        keySkills: ["Clinical Trial Management", "Regulatory Compliance", "Patient Coordination", "Data Management", "Medical Ethics"],
        education: "Bachelor's degree required, Master's or certification preferred"
      },
      flowchart: [
        { stage: "Bachelor's Degree", duration: "4 years", description: "Life sciences, nursing, or related field" },
        { stage: "Clinical Research Certification", duration: "6-12 months", description: "CCRP or similar certification" },
        { stage: "Entry-level Position", duration: "1-2 years", description: "Clinical Research Coordinator" },
        { stage: "Senior Roles", duration: "3-5 years", description: "Clinical Research Manager or Specialist" },
        { stage: "Leadership", duration: "5+ years", description: "Clinical Research Director" }
      ],
      pdfs: [
        { title: "Good Clinical Practice Guidelines", size: "4.2 MB", downloads: 2341 },
        { title: "Clinical Trial Design Handbook", size: "3.8 MB", downloads: 1876 },
        { title: "Regulatory Compliance Guide", size: "2.9 MB", downloads: 1243 },
        { title: "Patient Recruitment Strategies", size: "1.6 MB", downloads: 987 }
      ],
      resources: [
        { title: "Association of Clinical Research Professionals", type: "Organization", url: "#" },
        { title: "ClinicalTrials.gov", type: "Database", url: "#" },
        { title: "FDA Clinical Research Resources", type: "Government", url: "#" },
        { title: "SOCRA - Society of Clinical Research Associates", type: "Organization", url: "#" }
      ]
    },
    "Biotechnology": {
      description: "Biotechnology professionals apply biological principles to develop products and technologies that improve human health and the environment.",
      overview: {
        salaryRange: "$65,000 - $130,000",
        jobOutlook: "Much faster than average (10-15%)",
        keySkills: ["Molecular Biology", "Bioprocessing", "Quality Control", "Product Development", "Regulatory Affairs"],
        education: "Bachelor's or Master's degree in biotechnology or related field"
      },
      flowchart: [
        { stage: "Bachelor's Degree", duration: "4 years", description: "Biotechnology, Biology, or Bioengineering" },
        { stage: "Internship/Co-op", duration: "6-12 months", description: "Industry experience" },
        { stage: "Entry-level Position", duration: "1-3 years", description: "Research Associate or Technician" },
        { stage: "Specialization", duration: "2-4 years", description: "Focus on specific area (R&D, Manufacturing, QA)" },
        { stage: "Senior/Management", duration: "5+ years", description: "Senior Scientist or Manager" }
      ],
      pdfs: [
        { title: "Biotechnology Industry Overview", size: "5.1 MB", downloads: 3124 },
        { title: "Bioprocessing Techniques", size: "4.3 MB", downloads: 2156 },
        { title: "Quality Assurance in Biotech", size: "3.7 MB", downloads: 1876 },
        { title: "Intellectual Property Guide", size: "2.8 MB", downloads: 1432 }
      ],
      resources: [
        { title: "Biotechnology Innovation Organization", type: "Organization", url: "#" },
        { title: "GEN - Genetic Engineering & Biotechnology News", type: "Publication", url: "#" },
        { title: "Biotech Careers Portal", type: "Platform", url: "#" },
        { title: "FDA Biotechnology Guidance", type: "Government", url: "#" }
      ]
    }
  };

  const currentCareer = roadmapData[career.title as keyof typeof roadmapData] || roadmapData["Research Scientist"];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <career.icon className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">{career.title} Career Path</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentCareer.description}</p>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{currentCareer.overview.salaryRange}</div>
            <div className="text-sm text-gray-600">Salary Range</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{currentCareer.overview.jobOutlook}</div>
            <div className="text-sm text-gray-600">Job Outlook</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">{currentCareer.overview.keySkills.length}</div>
            <div className="text-sm text-gray-600">Key Skills</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-sm text-gray-600">{currentCareer.overview.education}</div>
          </CardContent>
        </Card>
      </div>

      {/* Resource Tabs */}
      <Tabs value={activeResourceTab} onValueChange={setActiveResourceTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="flowchart">Career Path</TabsTrigger>
          <TabsTrigger value="pdfs">Resources</TabsTrigger>
          <TabsTrigger value="links">External Links</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Skills Required</CardTitle>
              <CardDescription>Essential skills for success in this career path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentCareer.overview.keySkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="p-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education Requirements</CardTitle>
              <CardDescription>Typical educational path for this career</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Minimum Education</h4>
                    <p className="text-gray-600">{currentCareer.overview.education}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Recommended Fields</h4>
                    <p className="text-gray-600">Biology, Chemistry, Biochemistry, or related life sciences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Additional Certifications</h4>
                    <p className="text-gray-600">Field-specific certifications may be required or beneficial</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flowchart" className="space-y-6">
          <div className="space-y-4">
            {currentCareer.flowchart.map((stage, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{stage.stage}</CardTitle>
                    <Badge variant="outline">{stage.duration}</Badge>
                  </div>
                  <CardDescription>{stage.description}</CardDescription>
                </CardHeader>
                {index < currentCareer.flowchart.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pdfs" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {currentCareer.pdfs.map((pdf, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-6 w-6 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{pdf.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">{pdf.size}</p>
                        <p className="text-xs text-gray-400">{pdf.downloads} downloads</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="links" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {currentCareer.resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{resource.title}</h4>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {resource.type}
                      </Badge>
                    </div>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function Page() {
  const defaultCareer = {
    title: "Research Scientist",
    description: "Conduct research to advance scientific knowledge.",
    icon: FileText,
    paths: 5,
    resources: 10
  };

  return <CareerRoadmapDetails career={defaultCareer} />;
}