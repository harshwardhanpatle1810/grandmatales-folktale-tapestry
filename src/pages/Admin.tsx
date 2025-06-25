
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Home, Users, Trophy, History, RefreshCw, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [refreshing, setRefreshing] = useState(false);

  // Mock data for demonstration
  const stats = {
    totalEntries: 74,
    totalSales: 518, // 74 * $7
    currentPrize: "iPad Pro 12.9\" + Apple Pencil",
    nextDraw: "June 30, 2025",
    winnerSelected: false,
    entriesNeeded: 26 // 100 - 74
  };

  const recentEntries = [
    { id: 'TKT-2025-074', timestamp: '2025-06-25 14:30:22', amount: '$7.00', bundle: 'African Tales Bundle' },
    { id: 'TKT-2025-073', timestamp: '2025-06-25 14:15:18', amount: '$7.00', bundle: 'Nordic Legends Bundle' },
    { id: 'TKT-2025-072', timestamp: '2025-06-25 13:45:12', amount: '$7.00', bundle: 'Asian Folklore Bundle' },
    { id: 'TKT-2025-071', timestamp: '2025-06-25 13:22:08', amount: '$7.00', bundle: 'Celtic Myths Bundle' },
    { id: 'TKT-2025-070', timestamp: '2025-06-25 12:58:44', amount: '$7.00', bundle: 'Native American Bundle' }
  ];

  const previousWinners = [
    { month: 'May 2025', winner: 'Sarah M.', prize: 'Kindle Oasis + Case', entries: 100, drawn: '2025-05-31' },
    { month: 'April 2025', winner: 'Michael R.', prize: 'Apple Watch Series 9', entries: 100, drawn: '2025-04-30' },
    { month: 'March 2025', winner: 'Emma L.', prize: 'iPad Air + Apple Pencil', entries: 100, drawn: '2025-03-31' },
    { month: 'February 2025', winner: 'David K.', prize: 'MacBook Air M2', entries: 100, drawn: '2025-02-28' }
  ];

  const systemLogs = [
    { timestamp: '2025-06-25 14:30:22', type: 'PURCHASE', message: 'New raffle entry generated for ticket TKT-2025-074' },
    { timestamp: '2025-06-25 14:15:18', type: 'PURCHASE', message: 'Payment processed successfully for $7.00' },
    { timestamp: '2025-06-25 13:45:12', type: 'SYSTEM', message: 'Raffle system health check completed' },
    { timestamp: '2025-06-25 12:00:00', type: 'SYSTEM', message: 'Daily backup completed successfully' },
    { timestamp: '2025-06-25 10:30:15', type: 'EMAIL', message: 'Weekly update sent to 245 subscribers' }
  ];

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleExport = () => {
    // Simulate export functionality
    alert('Export feature would download CSV with all raffle data');
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-deep-plum/10 bg-cream/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-dm-serif font-bold text-deep-plum">
              grandmatales admin
            </h1>
            <div className="flex gap-2">
              <Button
                onClick={handleRefresh}
                variant="outline"
                disabled={refreshing}
                className="border-deep-plum/20 text-deep-plum hover:bg-deep-plum/5"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                onClick={handleExport}
                variant="outline"
                className="border-deep-plum/20 text-deep-plum hover:bg-deep-plum/5"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                className="border-deep-plum/20 text-deep-plum hover:bg-deep-plum/5"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Site
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-deep-plum/70 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Total Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-deep-plum">{stats.totalEntries}</div>
              <p className="text-xs text-deep-plum/60">
                {stats.entriesNeeded} more needed for draw
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-deep-plum/70">
                Total Sales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-deep-plum">${stats.totalSales}</div>
              <p className="text-xs text-deep-plum/60">
                This month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-deep-plum/70 flex items-center">
                <Trophy className="w-4 h-4 mr-2" />
                Current Prize
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm font-bold text-deep-plum">{stats.currentPrize}</div>
              <p className="text-xs text-deep-plum/60">
                Draw: {stats.nextDraw}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-deep-plum/70">
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={stats.winnerSelected ? "default" : "secondary"} className="mb-2">
                {stats.winnerSelected ? "Winner Selected" : "Collecting Entries"}
              </Badge>
              <p className="text-xs text-deep-plum/60">
                {((stats.totalEntries / 100) * 100).toFixed(0)}% to draw
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Entries */}
        <Card className="mb-8 animate-fade-in-up animate-delay-200">
          <CardHeader>
            <CardTitle className="text-deep-plum flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Recent Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Bundle Purchased</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium font-mono text-sm">
                      {entry.id}
                    </TableCell>
                    <TableCell className="text-sm">
                      {entry.timestamp}
                    </TableCell>
                    <TableCell className="text-sm font-medium">
                      {entry.amount}
                    </TableCell>
                    <TableCell className="text-sm">
                      {entry.bundle}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* System Logs */}
        <Card className="mb-8 animate-fade-in-up animate-delay-300">
          <CardHeader>
            <CardTitle className="text-deep-plum flex items-center">
              <History className="w-5 h-5 mr-2" />
              System Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-sm font-mono">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={log.type === 'PURCHASE' ? 'default' : log.type === 'SYSTEM' ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {log.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {log.message}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Previous Winners History */}
        <Card className="animate-fade-in-up animate-delay-400">
          <CardHeader>
            <CardTitle className="text-deep-plum flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Previous Winners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Winner</TableHead>
                  <TableHead>Prize</TableHead>
                  <TableHead>Entries</TableHead>
                  <TableHead>Draw Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {previousWinners.map((winner, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {winner.month}
                    </TableCell>
                    <TableCell className="text-sm">
                      {winner.winner}
                    </TableCell>
                    <TableCell className="text-sm">
                      {winner.prize}
                    </TableCell>
                    <TableCell className="text-sm text-center">
                      {winner.entries}
                    </TableCell>
                    <TableCell className="text-sm">
                      {winner.drawn}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
