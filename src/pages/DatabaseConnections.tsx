import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Database, 
  Plus, 
  Settings, 
  TestTube, 
  Shield, 
  AlertCircle,
  CheckCircle,
  Clock,
  Trash2,
  Edit,
  RefreshCw,
  Key,
  Server,
  Eye,
  EyeOff
} from "lucide-react";
import { toast } from "sonner";

const DatabaseConnections = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedConnection, setSelectedConnection] = useState<string | null>(null);

  const connections = [
    {
      id: "1",
      name: "Main Sales Database",
      type: "PostgreSQL",
      host: "db.company.com",
      database: "sales_prod",
      status: "connected",
      lastSync: "2 minutes ago",
      tables: 45,
      size: "2.3 GB"
    },
    {
      id: "2", 
      name: "Analytics Warehouse",
      type: "MySQL",
      host: "analytics.company.com",
      database: "analytics",
      status: "connected",
      lastSync: "5 minutes ago",
      tables: 128,
      size: "15.7 GB"
    },
    {
      id: "3",
      name: "CRM Database",
      type: "PostgreSQL", 
      host: "crm.company.com",
      database: "crm_prod",
      status: "disconnected",
      lastSync: "2 hours ago",
      tables: 32,
      size: "890 MB"
    }
  ];

  const handleTestConnection = async () => {
    setIsConnecting(true);
    // Simulate connection test
    setTimeout(() => {
      setIsConnecting(false);
      toast.success("Connection test successful!");
    }, 2000);
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      toast.success("Database connected successfully!");
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "connecting":
        return <RefreshCw className="w-4 h-4 text-warning animate-spin" />;
      case "disconnected":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "default";
      case "connecting":
        return "secondary";
      case "disconnected":
        return "destructive";
      default:
        return "outline";
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
                <Database className="w-6 h-6 text-primary" />
                Database Connections
              </h1>
              <p className="text-muted-foreground">Manage your database connections and data sources</p>
            </div>
            <Button variant="hero" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Connection
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="connections" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="connections">Active Connections</TabsTrigger>
              <TabsTrigger value="new">Add New Database</TabsTrigger>
              <TabsTrigger value="settings">Connection Settings</TabsTrigger>
            </TabsList>

            {/* Active Connections */}
            <TabsContent value="connections" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connections.map((connection) => (
                  <Card 
                    key={connection.id} 
                    className={`bg-background/50 backdrop-blur-sm hover:shadow-card transition-all cursor-pointer ${
                      selectedConnection === connection.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedConnection(connection.id)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Server className="w-5 h-5 text-primary" />
                          {connection.name}
                        </CardTitle>
                        {getStatusIcon(connection.status)}
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {connection.type}
                        </Badge>
                        <Badge variant={getStatusColor(connection.status) as any} className="text-xs">
                          {connection.status}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <div className="text-muted-foreground">Host:</div>
                          <div className="font-mono text-xs">{connection.host}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-muted-foreground">Database:</div>
                          <div className="font-mono text-xs">{connection.database}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Tables:</div>
                            <div className="font-semibold">{connection.tables}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Size:</div>
                            <div className="font-semibold">{connection.size}</div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Last sync: {connection.lastSync}
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Settings className="w-3 h-3 mr-1" />
                            Config
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <TestTube className="w-3 h-3 mr-1" />
                            Test
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Connection Details */}
              {selectedConnection && (
                <Card className="bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Connection Details</CardTitle>
                    <CardDescription>
                      Detailed information and management options for the selected database
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">Connection Information</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Status:</span>
                            <Badge variant="default">Connected</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Connection Pool:</span>
                            <span>5/10 active</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">SSL Enabled:</span>
                            <CheckCircle className="w-4 h-4 text-success" />
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Query Timeout:</span>
                            <span>30s</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-semibold">Actions</h3>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Refresh Connection
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <TestTube className="w-4 h-4 mr-2" />
                            Test Connection
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Configuration
                          </Button>
                          <Button variant="destructive" size="sm" className="w-full justify-start">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remove Connection
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Add New Database */}
            <TabsContent value="new" className="space-y-6">
              <Card className="bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Add New Database Connection</CardTitle>
                  <CardDescription>
                    Connect to your PostgreSQL or MySQL database to start analyzing your data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="db-type">Database Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select database type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="postgresql">PostgreSQL</SelectItem>
                            <SelectItem value="mysql">MySQL</SelectItem>
                            <SelectItem value="mariadb">MariaDB</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="connection-name">Connection Name</Label>
                        <Input id="connection-name" placeholder="e.g., Main Sales Database" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="host">Host</Label>
                        <Input id="host" placeholder="localhost or your-db-host.com" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="port">Port</Label>
                          <Input id="port" placeholder="5432" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="database">Database</Label>
                          <Input id="database" placeholder="database_name" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="database_user" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input 
                            id="password" 
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••" 
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="ssl" />
                          <Label htmlFor="ssl">Enable SSL</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="readonly" />
                          <Label htmlFor="readonly">Read-only access</Label>
                        </div>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-primary mt-0.5" />
                          <div className="text-sm">
                            <div className="font-medium">Security Notice</div>
                            <div className="text-muted-foreground">
                              All connections are encrypted and credentials are stored securely.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      onClick={handleTestConnection}
                      disabled={isConnecting}
                    >
                      {isConnecting ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <TestTube className="w-4 h-4 mr-2" />
                      )}
                      Test Connection
                    </Button>
                    <Button 
                      variant="hero" 
                      onClick={handleConnect}
                      disabled={isConnecting}
                    >
                      {isConnecting ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4 mr-2" />
                      )}
                      Connect Database
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Connection Settings */}
            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Connection Pool Settings</CardTitle>
                    <CardDescription>
                      Configure how connections are managed and pooled
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="max-connections">Max Connections</Label>
                      <Input id="max-connections" type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idle-timeout">Idle Timeout (seconds)</Label>
                      <Input id="idle-timeout" type="number" placeholder="300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="query-timeout">Query Timeout (seconds)</Label>
                      <Input id="query-timeout" type="number" placeholder="30" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Configure security and access control options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="encrypt-credentials" defaultChecked />
                      <Label htmlFor="encrypt-credentials">Encrypt stored credentials</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="audit-queries" defaultChecked />
                      <Label htmlFor="audit-queries">Audit all queries</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="require-ssl" />
                      <Label htmlFor="require-ssl">Require SSL for all connections</Label>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Key className="w-4 h-4 mr-2" />
                      Rotate Encryption Keys
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DatabaseConnections;