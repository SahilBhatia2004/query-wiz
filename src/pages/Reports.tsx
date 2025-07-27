import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter, 
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  DollarSign,
  Package,
  Clock,
  Play,
  Pause,
  MoreHorizontal,
  Eye,
  Share,
  Trash2,
  RefreshCw,
  Sparkles,
  FileDown,
  Mail,
  Settings
} from "lucide-react";

const Reports = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const reports = [
    {
      id: "1",
      title: "Q4 Sales Performance",
      description: "Comprehensive analysis of Q4 sales data with regional breakdown",
      status: "completed",
      createdAt: "2024-01-15",
      type: "Sales",
      format: "PDF",
      size: "2.3 MB",
      insights: 12,
      charts: 8
    },
    {
      id: "2",
      title: "Customer Segmentation Analysis",
      description: "AI-powered customer segmentation with behavior patterns",
      status: "generating",
      createdAt: "2024-01-14",
      type: "Analytics",
      format: "PowerPoint",
      size: "1.8 MB",
      insights: 8,
      charts: 6
    },
    {
      id: "3",
      title: "Product Performance Dashboard",
      description: "Monthly product performance metrics and recommendations",
      status: "scheduled",
      createdAt: "2024-01-13",
      type: "Product",
      format: "PDF",
      size: "1.2 MB",
      insights: 6,
      charts: 4
    }
  ];

  const templates = [
    {
      name: "Executive Summary",
      description: "High-level business overview with key metrics",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      name: "Sales Report",
      description: "Detailed sales analysis with forecasting",
      icon: DollarSign,
      color: "text-success"
    },
    {
      name: "Customer Analytics",
      description: "Customer behavior and segmentation insights",
      icon: Users,
      color: "text-secondary"
    },
    {
      name: "Product Analysis",
      description: "Product performance and inventory insights",
      icon: Package,
      color: "text-warning"
    }
  ];

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate AI report generation
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "generating":
        return "secondary";
      case "scheduled":
        return "outline";
      default:
        return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <FileText className="w-4 h-4" />;
      case "generating":
        return <RefreshCw className="w-4 h-4 animate-spin" />;
      case "scheduled":
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                AI Reports
              </h1>
              <p className="text-muted-foreground">Generate intelligent reports with automated insights</p>
            </div>
            <Button variant="hero" size="sm" onClick={handleGenerateReport} disabled={isGenerating}>
              {isGenerating ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4 mr-2" />
              )}
              Generate New Report
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="reports" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="reports">My Reports</TabsTrigger>
              <TabsTrigger value="generate">Generate Report</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            {/* My Reports */}
            <TabsContent value="reports" className="space-y-6">
              {/* Report Generation Progress */}
              {isGenerating && (
                <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                      Generating Report...
                    </CardTitle>
                    <CardDescription>
                      AI is analyzing your data and creating insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Progress value={generationProgress} className="h-3" />
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div className={`flex items-center gap-2 ${generationProgress >= 25 ? 'text-primary' : 'text-muted-foreground'}`}>
                          <div className={`w-2 h-2 rounded-full ${generationProgress >= 25 ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          Analyzing Data
                        </div>
                        <div className={`flex items-center gap-2 ${generationProgress >= 50 ? 'text-primary' : 'text-muted-foreground'}`}>
                          <div className={`w-2 h-2 rounded-full ${generationProgress >= 50 ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          Generating Insights
                        </div>
                        <div className={`flex items-center gap-2 ${generationProgress >= 75 ? 'text-primary' : 'text-muted-foreground'}`}>
                          <div className={`w-2 h-2 rounded-full ${generationProgress >= 75 ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          Creating Charts
                        </div>
                        <div className={`flex items-center gap-2 ${generationProgress >= 100 ? 'text-primary' : 'text-muted-foreground'}`}>
                          <div className={`w-2 h-2 rounded-full ${generationProgress >= 100 ? 'bg-primary' : 'bg-muted-foreground'}`} />
                          Finalizing Report
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Reports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => (
                  <Card key={report.id} className="bg-background/50 backdrop-blur-sm hover:shadow-card transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {report.description}
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(report.status) as any} className="text-xs">
                          {getStatusIcon(report.status)}
                          <span className="ml-1 capitalize">{report.status}</span>
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {report.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Format:</div>
                            <div className="font-medium">{report.format}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Size:</div>
                            <div className="font-medium">{report.size}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Insights:</div>
                            <div className="font-medium">{report.insights}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Charts:</div>
                            <div className="font-medium">{report.charts}</div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Created: {new Date(report.createdAt).toLocaleDateString()}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Generate Report */}
            <TabsContent value="generate" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Report Configuration</CardTitle>
                    <CardDescription>
                      Configure your report settings and data sources
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="report-title">Report Title</Label>
                      <Input id="report-title" placeholder="e.g., Q1 Sales Analysis" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="report-type">Report Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive">Executive Summary</SelectItem>
                          <SelectItem value="sales">Sales Report</SelectItem>
                          <SelectItem value="customer">Customer Analytics</SelectItem>
                          <SelectItem value="product">Product Analysis</SelectItem>
                          <SelectItem value="financial">Financial Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="data-source">Data Source</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select database" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sales-db">Main Sales Database</SelectItem>
                          <SelectItem value="analytics-db">Analytics Warehouse</SelectItem>
                          <SelectItem value="crm-db">CRM Database</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date-from">From Date</Label>
                        <Input id="date-from" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date-to">To Date</Label>
                        <Input id="date-to" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="output-format">Output Format</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF Document</SelectItem>
                          <SelectItem value="pptx">PowerPoint Presentation</SelectItem>
                          <SelectItem value="both">Both PDF & PowerPoint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>AI Analysis Options</CardTitle>
                    <CardDescription>
                      Choose what insights and analysis to include
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[
                        { id: "trends", label: "Trend Analysis", desc: "Identify patterns and trends in your data" },
                        { id: "forecasting", label: "Predictive Forecasting", desc: "AI-powered predictions for future performance" },
                        { id: "anomalies", label: "Anomaly Detection", desc: "Highlight unusual patterns or outliers" },
                        { id: "correlations", label: "Correlation Analysis", desc: "Find relationships between different metrics" },
                        { id: "segmentation", label: "Customer Segmentation", desc: "Automated customer grouping and analysis" },
                        { id: "recommendations", label: "AI Recommendations", desc: "Actionable insights and suggestions" }
                      ].map((option) => (
                        <div key={option.id} className="flex items-start space-x-3">
                          <input 
                            type="checkbox" 
                            id={option.id}
                            className="mt-1 h-4 w-4 text-primary rounded border-gray-300"
                            defaultChecked
                          />
                          <div className="space-y-1">
                            <Label htmlFor={option.id} className="text-sm font-medium">
                              {option.label}
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              {option.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <Button variant="hero" size="lg" className="w-full" onClick={handleGenerateReport}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate AI Report
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Estimated generation time: 2-5 minutes
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Templates */}
            <TabsContent value="templates" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates.map((template, index) => (
                  <Card key={index} className="bg-background/50 backdrop-blur-sm hover:shadow-card transition-all cursor-pointer group">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <template.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Custom Template</CardTitle>
                  <CardDescription>
                    Create your own report template with custom sections and AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="hero" size="lg">
                    <Settings className="w-4 h-4 mr-2" />
                    Create Custom Template
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Reports;