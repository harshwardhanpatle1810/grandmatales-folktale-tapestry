
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Gift, Ticket } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const folktales = [
  {
    id: 1,
    title: "The Golden Peacock",
    description: "A beautiful tale from ancient Persia about a princess who could speak to animals",
    origin: "Persian",
    pages: 24,
    age: "5-12",
    image: "photo-1472396961693-142e6e269027"
  },
  {
    id: 2,
    title: "The Singing Forest",
    description: "Japanese story of a young boy who discovers a magical forest filled with musical trees",
    origin: "Japanese",
    pages: 18,
    age: "4-10",
    image: "photo-1500673922987-e212871fec22"
  },
  {
    id: 3,
    title: "The Seven Colored Cat",
    description: "Brazilian folktale about a magical cat that brings good fortune to kind-hearted children",
    origin: "Brazilian",
    pages: 22,
    age: "6-14",
    image: "photo-1535268647677-300dbf3d78d1"
  },
  {
    id: 4,
    title: "The Moon Baker",
    description: "Celtic legend of a baker who makes bread from moonbeams for hungry travelers",
    origin: "Celtic",
    pages: 20,
    age: "5-11",
    image: "photo-1506744038136-46273834b3fb"
  },
  {
    id: 5,
    title: "The Dancing Shadows",
    description: "African tale about shadows that come alive to teach children about friendship",
    origin: "African",
    pages: 26,
    age: "7-13",
    image: "photo-1501854140801-50d01698950b"
  },
  {
    id: 6,
    title: "The Crystal Mountain",
    description: "Nordic saga of brave siblings climbing a mountain made entirely of crystals",
    origin: "Nordic",
    pages: 28,
    age: "8-15",
    image: "photo-1615729947596-a598e5de0ab3"
  },
  {
    id: 7,
    title: "The Laughing River",
    description: "Native American story about a river that grants wishes to those pure of heart",
    origin: "Native American",
    pages: 19,
    age: "5-12",
    image: "photo-1506744038136-46273834b3fb"
  },
  {
    id: 8,
    title: "The Starweaver",
    description: "Chinese legend of a girl who weaves stories into the night sky for all to see",
    origin: "Chinese",
    pages: 25,
    age: "6-14",
    image: "photo-1500673922987-e212871fec22"
  },
  {
    id: 9,
    title: "The Invisible Crown",
    description: "Indian tale about a humble servant who discovers they possess royal wisdom",
    origin: "Indian",
    pages: 23,
    age: "7-13",
    image: "photo-1517022812141-23620dba5c23"
  },
  {
    id: 10,
    title: "The Whispering Shells",
    description: "Polynesian story of shells that carry messages between distant islands",
    origin: "Polynesian",
    pages: 21,
    age: "5-11",
    image: "photo-1518877593221-1f28583780b4"
  },
  {
    id: 11,
    title: "The Time Gardener",
    description: "European fairy tale about a gardener who grows plants from different time periods",
    origin: "European",
    pages: 27,
    age: "8-15",
    image: "photo-1615729947596-a598e5de0ab3"
  },
  {
    id: 12,
    title: "The Dream Merchant",
    description: "Middle Eastern story of a merchant who trades in hopes and dreams",
    origin: "Middle Eastern",
    pages: 24,
    age: "6-14",
    image: "photo-1472396961693-142e6e269027"
  }
];

const Index = () => {
  const [selectedBundle, setSelectedBundle] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async (bundleId: number) => {
    setIsLoading(true);
    setSelectedBundle(bundleId);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a mock raffle ticket ID
      const ticketId = `GT${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 100)}`;
      
      // Show success and redirect to success page
      toast({
        title: "Purchase Successful!",
        description: `Your raffle ticket ID: ${ticketId}`,
      });

      // In a real implementation, this would redirect to Stripe checkout
      // For demo purposes, we'll show the success state
      setTimeout(() => {
        window.location.href = `/success?ticket=${ticketId}`;
      }, 1500);

    } catch (error) {
      toast({
        title: "Purchase Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setSelectedBundle(null);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-deep-plum/10 bg-cream/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-dm-serif font-bold text-deep-plum">
              grandmatales
            </h1>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-warm-gold/20 text-deep-plum border-warm-gold/30">
                <Ticket className="w-3 h-3 mr-1" />
                Current Prize: iPad Pro
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream to-warm-gold/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-dm-serif font-bold text-deep-plum mb-6">
              Read. Dream. Win.
            </h2>
            <p className="text-lg md:text-xl text-deep-plum/80 mb-8 max-w-2xl mx-auto">
              Discover enchanting folktales from around the world. Each purchase enters you into our monthly raffle 
              for amazing prizes while building your family's digital library.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-deep-plum/70">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4" />
                <span>12 Unique Folktale Bundles</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                <span>Monthly Prize Draws</span>
              </div>
              <div className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                <span>Every Purchase = Raffle Entry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Bundles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-dm-serif font-bold text-deep-plum mb-4">
              Choose Your Adventure
            </h3>
            <p className="text-lg text-deep-plum/70 max-w-2xl mx-auto">
              Each bundle contains beautifully illustrated stories passed down through generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {folktales.map((story, index) => (
              <Card 
                key={story.id} 
                className="group hover:shadow-lg transition-all duration-300 border-deep-plum/10 bg-white/80 backdrop-blur-sm animate-fade-in-up hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-[3/4] bg-gradient-to-br from-warm-gold/20 to-deep-plum/20 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${story.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <Badge variant="outline" className="mb-3 text-xs border-warm-gold/30 text-deep-plum">
                    {story.origin}
                  </Badge>
                  
                  <h4 className="font-dm-serif font-bold text-lg text-deep-plum mb-2 group-hover:text-warm-gold transition-colors">
                    {story.title}
                  </h4>
                  
                  <p className="text-sm text-deep-plum/70 mb-4 line-clamp-3">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-deep-plum/60 mb-4">
                    <span>{story.pages} pages</span>
                    <span>Ages {story.age}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-deep-plum">
                      $7.00
                    </div>
                    
                    <Button
                      onClick={() => handlePurchase(story.id)}
                      disabled={isLoading}
                      className="bg-warm-gold hover:bg-warm-gold/90 text-deep-plum font-medium rounded-lg px-4 py-2 transition-all duration-200"
                    >
                      {isLoading && selectedBundle === story.id ? (
                        <div className="w-4 h-4 border-2 border-deep-plum/30 border-t-deep-plum rounded-full animate-spin" />
                      ) : (
                        "Buy Bundle"
                      )}
                    </Button>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-deep-plum/10">
                    <div className="flex items-center gap-1 text-xs text-warm-gold">
                      <Ticket className="w-3 h-3" />
                      <span>Includes raffle entry</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Prize Section */}
      <section className="py-16 bg-gradient-to-r from-deep-plum/5 to-warm-gold/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-dm-serif font-bold text-deep-plum mb-6">
              This Month's Prize
            </h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-warm-gold/20">
              <div className="w-20 h-20 bg-gradient-to-br from-warm-gold to-warm-gold/70 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-dm-serif font-bold text-deep-plum mb-3">
                iPad Pro 12.9" + Apple Pencil
              </h4>
              <p className="text-deep-plum/70 mb-6">
                Perfect for digital reading and creative storytelling. Winner announced on the last day of each month.
              </p>
              <div className="text-sm text-deep-plum/60">
                <strong>73 entries</strong> so far this month • Draw at 100 entries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-deep-plum/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h5 className="font-dm-serif font-bold text-xl text-deep-plum mb-2">
                grandmatales
              </h5>
              <p className="text-sm text-deep-plum/60">
                Preserving stories, creating memories, inspiring dreams.
              </p>
            </div>
            <div className="text-sm text-deep-plum/60">
              © 2025 GrandmaTales. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
