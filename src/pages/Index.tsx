import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Brain, 
  FileText, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  MessageSquare,
  Download,
  Sparkles,
  ArrowRight,
  Check,
  User,
  LogOut
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";

const Index = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  const features = [
    {
      icon: Database,
      title: "Smart Database Integration",
      description: "Connect PostgreSQL, MySQL databases with one-click setup. Secure, encrypted connections.",
      color: "text-primary"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask questions like 'Show sales by month' - our AI converts them to SQL instantly.",
      color: "text-secondary"
    },
    {
      icon: Brain,
      title: "Open-Source AI Models",
      description: "Powered by LLaMA 2, Mixtral, and SQLova. No dependency on OpenAI or Anthropic.",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Intelligent Analytics",
      description: "AI-powered insights and trend analysis from your business data automatically.",
      color: "text-warning"
    },
    {
      icon: FileText,
      title: "Auto Report Generation",
      description: "Generate PowerPoint presentations and PDF reports with graphs and insights.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Get instant answers to complex business questions with lightning-fast processing.",
      color: "text-secondary"
    }
  ];

  const benefits = [
    "100% Open Source AI - No vendor lock-in",
    "Local processing for maximum data privacy",
    "Custom model training on your data",
    "Enterprise-grade security and compliance",
    "Unlimited queries and reports",
    "24/7 dedicated support"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                AnalyticsAI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              {user ? (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{user.email}</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleSignOut} className="flex items-center gap-2">
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => setIsAuthModalOpen(true)}>Sign In</Button>
                  <Button variant="hero" size="sm" onClick={() => setIsAuthModalOpen(true)}>Get Started</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            Powered by Open-Source AI
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Transform Your Data Into
            <span className="bg-gradient-hero bg-clip-text text-transparent block mt-2">
              Intelligent Insights
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ask natural language questions about your business data. Get instant SQL queries, 
            AI-powered analysis, and automated reports using 100% open-source models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/dashboard">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="xl">
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10x</div>
              <div className="text-muted-foreground">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">100%</div>
              <div className="text-muted-foreground">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">24/7</div>
              <div className="text-muted-foreground">AI Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful AI-Driven Analytics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to turn your raw data into actionable business intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From database connection to insights in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Connect Database", desc: "Link your PostgreSQL/MySQL database securely" },
              { step: "02", title: "Ask Questions", desc: "Use natural language to query your data" },
              { step: "03", title: "AI Analysis", desc: "Our models generate insights automatically" },
              { step: "04", title: "Export Reports", desc: "Download PowerPoint or PDF reports" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose Open-Source AI?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Complete control over your data and AI models. No vendor lock-in, 
                maximum privacy, and unlimited customization potential.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Live Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-32 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-primary/50" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary-light rounded-lg">
                      <div className="text-2xl font-bold text-primary">+32%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center p-4 bg-success-light rounded-lg">
                      <div className="text-2xl font-bold text-success">1.2M</div>
                      <div className="text-sm text-muted-foreground">Data Points</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies using AI-powered analytics to make better decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="group">
                  Go to Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <Button variant="hero" size="xl" className="group" onClick={() => setIsAuthModalOpen(true)}>
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AnalyticsAI</span>
            </div>
            <div className="text-muted-foreground">
              © 2024 AnalyticsAI. Powered by open-source AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;