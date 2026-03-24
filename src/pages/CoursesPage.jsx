import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { coursesData } from '../data/courses';

const SCHOOLS = [
  'Engineering & Technology', 'Management', 'Pharmacy', 
  'Computer Science & Applications', 'Commerce', 'Nursing', 
  'Education', 'Social Work', 'Science'
];

const PROGRAMS = [
  { id: 'undergraduate', label: 'Undergraduate' },
  { id: 'postgraduate', label: 'Postgraduate' },
  { id: 'phd', label: 'PhD / Research' },
  { id: 'certificate', label: 'Certificate' },
  { id: 'diploma', label: 'Diploma' }
];

export default function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  
  const [activeSchools, setActiveSchools] = useState([]);
  const [activePrograms, setActivePrograms] = useState([]);

  useEffect(() => {
    const programParam = searchParams.get('program');
    if (programParam) {
      setActivePrograms([programParam.toLowerCase()]);
    }
  }, [searchParams]);

  const toggleSchool = (school) => {
    setActiveSchools(prev => 
      prev.includes(school) ? prev.filter(s => s !== school) : [...prev, school]
    );
  };

  const toggleProgram = (programId) => {
    setActivePrograms(prev => 
      prev.includes(programId) ? prev.filter(p => p !== programId) : [...prev, programId]
    );
  };

  const clearFilters = () => {
    setActiveSchools([]);
    setActivePrograms([]);
    setSearch('');
    setSearchParams({});
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.desc.toLowerCase().includes(search.toLowerCase());
      const matchSchool = activeSchools.length === 0 || activeSchools.includes(c.school);
      const matchProgram = activePrograms.length === 0 || activePrograms.includes(c.program);
      
      return matchSearch && matchSchool && matchProgram;
    });
  }, [search, activeSchools, activePrograms]);

  return (
    <div className="pt-32 pb-24 bg-ksv-light min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-ksv-secondary pb-6">
          <div>
            <div className="text-sm font-body text-ksv-dark/60 mb-2">
              <Link to="/" className="hover:text-ksv-primary">Home</Link> &gt;&gt; Courses
            </div>
            <h1 className="text-4xl">
              <span className="font-display font-bold text-ksv-secondary">KSV</span>
              <span className="font-display font-normal text-ksv-border mx-3">|</span>
              <span className="font-display font-normal text-ksv-dark">Courses</span>
            </h1>
          </div>
          
          <div className="relative mt-6 md:mt-0 w-full md:w-[280px]">
            <input 
              type="text"
              placeholder="Search programmes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-ksv-border rounded-md py-3 pl-10 pr-4 font-body text-sm focus:outline-none focus:border-ksv-secondary transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ksv-dark/40" size={18} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Sidebar Filters */}
          <div className="w-full lg:w-[260px] flex-shrink-0">
            <h3 className="font-heading font-bold text-ksv-dark text-sm uppercase tracking-wider mb-6">
              Filter Courses
            </h3>
            
            <div className="mb-8 border-b border-ksv-border pb-8">
              <h4 className="font-heading font-semibold text-ksv-primary mb-4">Schools</h4>
              <div className="flex flex-col gap-3">
                {SCHOOLS.map(school => (
                  <label key={school} className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-4 h-4 rounded border-ksv-border text-ksv-secondary focus:ring-ksv-secondary cursor-pointer"
                      checked={activeSchools.includes(school)}
                      onChange={() => toggleSchool(school)}
                    />
                    <span className="font-body text-sm text-ksv-dark/80 group-hover:text-ksv-primary transition-colors leading-tight">
                      {school}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-heading font-semibold text-ksv-primary mb-4">Programs</h4>
              <div className="flex flex-col gap-3">
                {PROGRAMS.map(prog => (
                  <label key={prog.id} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-ksv-border text-ksv-secondary focus:ring-ksv-secondary cursor-pointer"
                      checked={activePrograms.includes(prog.id)}
                      onChange={() => toggleProgram(prog.id)}
                    />
                    <span className="font-body text-sm text-ksv-dark/80 group-hover:text-ksv-primary transition-colors">
                      {prog.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {(activeSchools.length > 0 || activePrograms.length > 0 || search) && (
              <button 
                onClick={clearFilters}
                className="font-heading font-semibold text-sm text-ksv-secondary hover:text-ksv-primary transition-colors mb-8"
              >
                Clear Filters
              </button>
            )}

            {/* CTA Card in Sidebar */}
            <div className="bg-ksv-primary p-6 rounded-radius-lg text-white shadow-lg mt-8">
              <h4 className="font-display font-bold text-xl mb-3">Ready to Apply?</h4>
              <p className="font-body text-sm text-white/80 mb-6">KSV Admissions 2025–26 are open.</p>
              <Link to="/academics#admission" className="inline-block bg-ksv-secondary text-white font-heading font-semibold text-sm px-6 py-3 rounded-full hover:bg-white hover:text-ksv-primary transition-colors">
                Apply Now &rarr;
              </Link>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-ksv-secondary">
              <h2 className="font-heading font-bold text-ksv-primary uppercase tracking-wider text-sm">
                Showing Courses
              </h2>
              <span className="font-body font-medium text-ksv-dark/70 text-sm bg-white px-3 py-1 border border-ksv-border rounded-full">
                {filteredCourses.length} results
              </span>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <div 
                    key={course.id} 
                    className="bg-white border border-ksv-border p-6 rounded-radius-md hover:border-ksv-secondary hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                  >
                    <h3 className="font-heading font-bold text-ksv-secondary text-lg mb-3">
                      {course.name}
                    </h3>
                    <p className="font-body text-sm text-ksv-dark/60 mb-6 flex-1">
                      {course.desc}
                    </p>
                    
                    <div className="pt-4 border-t border-ksv-border/50 flex items-center justify-between gap-2 mt-auto">
                      <span className="bg-ksv-accent text-ksv-primary font-body font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap overflow-hidden text-ellipsis">
                        {PROGRAMS.find(p => p.id === course.program)?.label || course.program}
                      </span>
                      <span className="bg-ksv-dark/5 text-ksv-dark font-body font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        {course.institute}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-radius-lg border border-ksv-border">
                <p className="font-body text-lg text-ksv-dark/60 mb-4">No courses matched your filters.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-ksv-primary text-white px-6 py-2 rounded-full font-heading font-medium hover:bg-ksv-secondary transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
