
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Ticket, Gift, Home, Book } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const [ticketId, setTicketId] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const ticket = urlParams.get('ticket');
    if (ticket) {
      setTicketId(ticket);
    } else {
      // If no ticket ID, redirect to home
      navigate('/');
    }
  }, [location, navigate]);

  const currentPrize = {
    name: "iPad Pro 12.9\" + Apple Pencil",
    description: "Perfect for digital reading and creative storytelling",
    drawDate: "June 30, 2025",
    currentEntries: 74,
    maxEntries: 100
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-deep-plum/10 bg-cream/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-dm-serif font-bold text-deep-plum">
              grandmatales
            </h1>
            <Button
              onClick={() => navigate('/')}
              variant="outline"
              className="border-deep-plum/20 text-deep-plum hover:bg-deep-plum/5"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Library
            </Button>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-dm-serif font-bold text-deep-plum mb-6 animate-fade-in-up">
            Purchase Successful!
          </h1>

          <p className="text-lg text-deep-plum/70 mb-8 animate-fade-in-up animate-delay-200">
            Thank you for your purchase! Your folktale bundle is ready to read, and you've been entered into this month's raffle.
          </p>

          {/* Raffle Ticket Card */}
          <Card className="mb-8 bg-gradient-to-br from-warm-gold/10 to-warm-gold/20 border-warm-gold/30 animate-fade-in-up animate-delay-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Ticket className="w-8 h-8 text-warm-gold mr-3" />
                <h2 className="text-2xl font-dm-serif font-bold text-deep-plum">
                  Your Raffle Ticket
                </h2>
              </div>
              
              <div className="bg-white/50 rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-deep-plum mb-2 font-mono tracking-wider">
                  {ticketId}
                </div>
                <p className="text-sm text-deep-plum/60">
                  Keep this ID safe - it's your entry into this month's raffle!
                </p>
              </div>

              <Badge variant="secondary" className="bg-warm-gold/20 text-deep-plum border-warm-gold/30">
                Entry #{currentPrize.currentEntries} of {currentPrize.maxEntries}
              </Badge>
            </CardContent>
          </Card>

          {/* Current Prize Info */}
          <Card className="mb-8 animate-fade-in-up animate-delay-400">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-warm-gold mr-3" />
                <h3 className="text-2xl font-dm-serif font-bold text-deep-plum">
                  This Month's Prize
                </h3>
              </div>
              
              {/* Prize Image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="iPad Pro Prize"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-xl font-bold text-deep-plum mb-2">
                {currentPrize.name}
              </h4>
              
              <p className="text-deep-plum/70 mb-4 animate-fade-in-up animate-delay-500">
                {currentPrize.description}
              </p>
              
              <div className="bg-deep-plum/5 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-deep-plum/60">Current entries:</span>
                  <span className="font-bold text-deep-plum">{currentPrize.currentEntries} / {currentPrize.maxEntries}</span>
                </div>
                <div className="w-full bg-deep-plum/20 rounded-full h-2 mt-2">
                  <div 
                    className="bg-warm-gold h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentPrize.currentEntries / currentPrize.maxEntries) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-sm text-deep-plum/60">
                <strong>Winner announced:</strong> {currentPrize.drawDate}
              </p>
              
              {currentPrize.currentEntries >= currentPrize.maxEntries && (
                <Badge variant="default" className="mt-4 bg-green-600 hover:bg-green-700">
                  🎉 Ready for draw!
                </Badge>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <Button
              onClick={() => navigate('/')}
              className="bg-warm-gold hover:bg-warm-gold/90 text-deep-plum font-medium rounded-lg px-8 py-3"
            >
              <Book className="w-4 h-4 mr-2" />
              Browse More Stories
            </Button>
            
            <Button
              variant="outline"
              className="border-deep-plum/20 text-deep-plum hover:bg-deep-plum/5 px-8 py-3"
              onClick={() => {
                navigator.clipboard.writeText(ticketId);
                alert('Ticket ID copied to clipboard!');
              }}
            >
              <Ticket className="w-4 h-4 mr-2" />
              Copy Ticket ID
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-deep-plum/5 rounded-lg animate-fade-in-up animate-delay-600">
            <h4 className="font-dm-serif font-bold text-lg text-deep-plum mb-3">
              What happens next?
            </h4>
            <div className="text-left space-y-2 text-sm text-deep-plum/70 animate-fade-in-up animate-delay-700">
              <p>• Your folktale bundle has been added to your digital library</p>
              <p>• You'll receive an email confirmation with your ticket details</p>
              <p>• Winner will be announced on {currentPrize.drawDate}</p>
              <p>• If you win, we'll contact you via email within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
