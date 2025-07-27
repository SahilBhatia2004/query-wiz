import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Database, 
  Brain, 
  MessageSquare, 
  BarChart3, 
  FileText, 
  Settings,
  Plus,
  Play,
  Download,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Search,
  Filter,
  Calendar,
  Send
} from "lucide-react";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const databases = [
    { name: "Sales DB", type: "PostgreSQL", status: "Connected", lastSync: "2 min ago" },
    { name: "Analytics DB", type: "MySQL", status: "Connected", lastSync: "5 min ago" },
    { name: "CRM DB", type: "PostgreSQL", status: "Disconnected", lastSync: "2 hours ago" }
  ];

  const recentQueries = [
    { query: "Show me sales by month for Q4", result: "Generated chart with 4 data points", time: "2 min ago" },
    { query: "What are our top performing products?", result: "Identified 5 top products with analysis", time: "15 min ago" },
    { query: "Compare revenue vs last year", result: "Created comparative analysis report", time: "1 hour ago" }
  ];

  const insights = [
    { title: "Revenue Growth", value: "+23.1%", change: "+5.2%", trend: "up" },
    { title: "Active Users", value: "12,847", change: "+12.3%", trend: "up" },
    { title: "Conversion Rate", value: "3.24%", change: "-0.8%", trend: "down" },
    { title: "Avg Order Value", value: "$87.32", change: "+8.1%", trend: "up" }
  ];

  const handleQuery = async () => {
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setQuery("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
              <p className="text-muted-foreground">AI-powered business intelligence</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="hero" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm hover:shadow-card transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {insight.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${
                    insight.trend === 'up' ? 'bg-success-light' : 'bg-destructive/10'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${
                      insight.trend === 'up' ? 'text-success' : 'text-destructive'
                    }`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{insight.value}</div>
                  <p className={`text-xs ${
                    insight.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    {insight.change} from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Query Interface */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI Query Box */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-primary" />
                    Ask Your Data Anything
                  </CardTitle>
                  <CardDescription>
                    Use natural language to query your databases and get instant insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Textarea
                      placeholder="e.g., 'Show me sales trends by region for the last 6 months' or 'Which products have the highest profit margins?'"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="min-h-20 pr-12"
                    />
                    <Button
                      size="sm"
                      variant="hero"
                      className="absolute bottom-2 right-2"
                      onClick={handleQuery}
                      disabled={!query.trim() || isProcessing}
                    >
                      {isProcessing ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  
                  {isProcessing && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Sparkles className="w-4 h-4 animate-pulse text-primary" />
                        AI is analyzing your query...
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        Converting to SQL → Running query → Generating insights
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Sales by region",
                      "Top customers",
                      "Revenue trends",
                      "Product performance"
                    ].map((suggestion) => (
                      <Button
                        key={suggestion}
                        variant="outline"
                        size="sm"
                        onClick={() => setQuery(suggestion)}
                        className="text-xs"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Results Area */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Query Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Results will appear here after running a query</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Queries */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentQueries.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <p className="font-medium">{item.query}</p>
                          <p className="text-sm text-muted-foreground">{item.result}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Database Connections */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Connected Databases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {databases.map((db, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{db.name}</p>
                        <p className="text-xs text-muted-foreground">{db.type}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={db.status === 'Connected' ? 'default' : 'destructive'} className="text-xs">
                          {db.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{db.lastSync}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Database
                  </Button>
                </CardContent>
              </Card>

              {/* AI Models Status */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-secondary" />
                    AI Models
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "SQLova", status: "Active", usage: "85%" },
                    { name: "LLaMA 2", status: "Active", usage: "92%" },
                    { name: "Mixtral", status: "Standby", usage: "12%" }
                  ].map((model, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{model.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {model.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Usage</span>
                          <span>{model.usage}</span>
                        </div>
                        <Progress value={parseInt(model.usage)} className="h-1" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;