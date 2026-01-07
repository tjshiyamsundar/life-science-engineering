"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Eye, Heart, MessageCircle, Share2, User } from "lucide-react";

interface BlogArticleProps {
  article: {
    title: string;
    content: string;
    author: {
      name: string;
      title: string;
      company: string;
      avatar?: string;
    };
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    views: number;
    likes: number;
    comments: number;
  };
}

export function BlogArticle({ article }: BlogArticleProps) {
  return (
    <div className="space-y-8">
      {/* Article Header */}
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4">{article.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4" />
            <span>{article.views} views</span>
          </div>
        </div>
      </div>

      {/* Author Info */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={article.author.avatar} />
              <AvatarFallback className="text-lg">
                {article.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{article.author.name}</h3>
              <p className="text-gray-600">{article.author.title}</p>
              <p className="text-sm text-gray-500">{article.author.company}</p>
            </div>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Follow
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Article Content */}
      <Card>
        <CardContent className="p-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag, index) => (
          <Badge key={index} variant="outline" className="text-sm">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Engagement */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>{article.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>{article.comments} Comments</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Career Transitions in Life Sciences",
              excerpt: "How to successfully pivot between different sectors in the life science industry...",
              author: "Dr. James Wilson",
              date: "March 8, 2024"
            },
            {
              title: "Building Your Professional Network",
              excerpt: "Strategies for creating meaningful connections in the scientific community...",
              author: "Sarah Martinez",
              date: "March 5, 2024"
            },
            {
              title: "Work-Life Balance in Research",
              excerpt: "Tips for maintaining mental health while pursuing a demanding research career...",
              author: "Dr. Lisa Chen",
              date: "March 1, 2024"
            }
          ].map((related, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{related.title}</CardTitle>
                <CardDescription>{related.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{related.author}</span>
                  <span>{related.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}