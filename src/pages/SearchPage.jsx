import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight, FileText, Calendar, Building, GraduationCap } from 'lucide-react';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Dummy search results generator based on query length/content
  const generateResults = (q) => {
    if (!q) return [];
    
    return [
      {
        id: 1,
        title: `Information regarding ${q}`,
        type: 'Page',
        icon: FileText,
        excerpt: `General overview, guidelines, and history related to ${q} within Kadi Sarva Vishwavidyalaya.`,
        link: '/about'
      },
      {
        id: 2,
        title: `${q} - Academic Syllabus 2024-25`,
        type: 'Document',
        icon: GraduationCap,
        excerpt: `Download the complete course structure, credit distribution, and reading materials for ${q}.`,
        link: '/academics'
      },
      {
        id: 3,
        title: `Upcoming Events: ${q} Symposium`,
        type: 'Event',
        icon: Calendar,
        excerpt: `Join us next month at the Gandhinagar campus for a 3-day workshop and conference on ${q}.`,
        link: '/news-events'
      },
      {
        id: 4,
        title: `Department of ${q} Studies`,
        type: 'Institute',
        icon: Building,
        excerpt: `Explore faculty, research facilities, and admission criteria for the ${q} department.`,
        link: '/campuses'
      }
    ];
  };

  const results = generateResults(query);

  return (
    <div className="bg-ksv-light min-h-[70vh] py-16">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-4">
            Search Results
          </h1>
          <div className="w-20 h-1 bg-ksv-secondary rounded-full mb-6"></div>
          
          <div className="bg-ksv-white rounded-radius-md shadow-sm border border-ksv-border p-4 flex items-center gap-3">
            <Search className="text-ksv-dark/40" size={24} />
            <span className="font-body text-lg text-ksv-dark">
              Showing results for: <strong className="text-ksv-primary">"{query}"</strong>
            </span>
          </div>
        </div>

        {query ? (
          <div className="space-y-6">
            <p className="font-body text-ksv-dark/60">Found {results.length} relevant results</p>
            
            {results.map((result) => {
              const Icon = result.icon;
              return (
                <div key={result.id} className="bg-ksv-white rounded-radius-lg p-6 md:p-8 shadow-sm border border-ksv-border/60 hover:shadow-card transition-shadow group">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 rounded-full bg-ksv-accent flex items-center justify-center shrink-0">
                      <Icon className="text-ksv-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-ksv-secondary bg-ksv-secondary/10 px-2 py-1 rounded">
                          {result.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-ksv-primary mb-2 group-hover:text-ksv-secondary transition-colors">
                        {result.title}
                      </h3>
                      <p className="font-body text-ksv-dark/70 mb-4 line-clamp-2 leading-relaxed">
                        {result.excerpt}
                      </p>
                      <Link 
                        to={result.link} 
                        className="inline-flex items-center gap-2 text-sm font-bold text-ksv-primary hover:text-ksv-secondary transition-colors"
                      >
                        Visit Page <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-ksv-white rounded-radius-lg border border-ksv-border">
            <Search className="mx-auto text-ksv-dark/20 mb-4" size={64} />
            <h2 className="text-2xl font-heading font-bold text-ksv-dark mb-2">No search query provided</h2>
            <p className="font-body text-ksv-dark/60">Please use the search bar at the top of the page to find content.</p>
          </div>
        )}

      </div>
    </div>
  );
}
