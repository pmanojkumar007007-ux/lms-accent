import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Users,
  GraduationCap,
  BarChart3,
  Plus,
  Search,
  Bell,
  LogOut,
  Award,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AccentLogo from "@/components/AccentLogo";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Students", value: "2,847", icon: Users, change: "+12.5%" },
    { title: "Active Courses", value: "156", icon: BookOpen, change: "+8.2%" },
    { title: "Instructors", value: "89", icon: GraduationCap, change: "+3.1%" },
    { title: "Completion Rate", value: "94.8%", icon: Award, change: "+2.4%" },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      students: 245,
      instructor: "Sarah Johnson",
      status: "Active",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      students: 189,
      instructor: "Michael Chen",
      status: "Active",
    },
    {
      id: 3,
      title: "UX/UI Design Principles",
      students: 167,
      instructor: "Emily Davis",
      status: "Draft",
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      students: 203,
      instructor: "David Wilson",
      status: "Active",
    },
  ];

  const recentActivities = [
    {
      action: "New student enrolled",
      course: "Advanced React Development",
      time: "2 minutes ago",
    },
    {
      action: "Course completed",
      course: "JavaScript Fundamentals",
      time: "15 minutes ago",
    },
    {
      action: "New instructor added",
      course: "Python for Beginners",
      time: "1 hour ago",
    },
    {
      action: "Assignment submitted",
      course: "Data Science Fundamentals",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <AccentLogo />
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses, students..."
                  className="pl-10 w-64"
                />
              </div>

              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>

              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">
                    Admin User
                  </p>
                  <p className="text-xs text-gray-600">admin@lms.com</p>
                </div>
              </div>

              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 mt-2">
            Monitor your learning management system performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full lg:w-auto grid-cols-4 lg:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Courses */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Courses</CardTitle>
                    <CardDescription>Latest course activities</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Course
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCourses.map((course) => (
                      <div
                        key={course.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">
                            {course.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            by {course.instructor}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {course.students} students enrolled
                          </p>
                        </div>
                        <Badge
                          variant={
                            course.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {course.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>System activity timeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 border rounded-lg"
                      >
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.action}
                          </p>
                          <p className="text-xs text-gray-600">
                            {activity.course}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Course Management</CardTitle>
                <CardDescription>
                  Manage all courses in your LMS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Course Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This section will contain course management features
                  </p>
                  <Button>Add New Course</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>
                  Manage all students in your LMS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Student Management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This section will contain student management features
                  </p>
                  <Button>Add New Student</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics & Reports</CardTitle>
                <CardDescription>
                  View detailed analytics and reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600 mb-4">
                    This section will contain detailed analytics and reporting
                    features
                  </p>
                  <Button>View Reports</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
