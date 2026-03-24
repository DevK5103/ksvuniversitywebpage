import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function SdgGrid() {
  const [activeTab, setActiveTab] = useState('SDG');
  const [focusedGoalId, setFocusedGoalId] = useState(1);
  const [hasGoalInteraction, setHasGoalInteraction] = useState(false);

  const sidebarLinks = ['SDG', 'Policies', 'Collaboration'];

  const sdgGoals = useMemo(
    () => [
      {
        id: 1,
        code: 'SDG 1',
        title: 'No Poverty',
        description:
          'Advance inclusive growth by supporting scholarships, fee support, and community upliftment programs for economically vulnerable learners.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg',
        alt: 'SDG 1 No Poverty',
        link: 'https://sdgs.un.org/goals/goal1',
      },
      {
        id: 2,
        code: 'SDG 2',
        title: 'Zero Hunger',
        description:
          'Strengthen nutrition, food awareness, and outreach initiatives through student drives and social impact projects.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg',
        alt: 'SDG 2 Zero Hunger',
        link: 'https://sdgs.un.org/goals/goal2',
      },
      {
        id: 3,
        code: 'SDG 3',
        title: 'Good Health and Well-Being',
        description:
          'Promote physical and mental wellness via medical camps, counseling support, sports participation, and preventive healthcare awareness.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg',
        alt: 'SDG 3 Good Health and Well-Being',
        link: 'https://sdgs.un.org/goals/goal3',
      },
      {
        id: 4,
        code: 'SDG 4',
        title: 'Quality Education',
        description:
          'Deliver equitable and quality higher education with strong pedagogy, digital learning, and multidisciplinary opportunities.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg',
        alt: 'SDG 4 Quality Education',
        link: 'https://sdgs.un.org/goals/goal4',
      },
      {
        id: 5,
        code: 'SDG 5',
        title: 'Gender Equality',
        description:
          'Enable equal access, leadership opportunities, and safe campus systems that empower women and all genders.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg',
        alt: 'SDG 5 Gender Equality',
        link: 'https://sdgs.un.org/goals/goal5',
      },
      {
        id: 6,
        code: 'SDG 6',
        title: 'Clean Water and Sanitation',
        description:
          'Improve water stewardship through conservation projects, sanitation awareness, and efficient campus resource management.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg',
        alt: 'SDG 6 Clean Water and Sanitation',
        link: 'https://sdgs.un.org/goals/goal6',
      },
      {
        id: 7,
        code: 'SDG 7',
        title: 'Affordable and Clean Energy',
        description:
          'Encourage renewable energy adoption, energy-efficient infrastructure, and student innovation in clean technology.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg',
        alt: 'SDG 7 Affordable and Clean Energy',
        link: 'https://sdgs.un.org/goals/goal7',
      },
      {
        id: 8,
        code: 'SDG 8',
        title: 'Decent Work and Economic Growth',
        description:
          'Boost employability through industry-linked curricula, internships, placement support, and entrepreneurship development.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg',
        alt: 'SDG 8 Decent Work and Economic Growth',
        link: 'https://sdgs.un.org/goals/goal8',
      },
      {
        id: 9,
        code: 'SDG 9',
        title: 'Industry, Innovation and Infrastructure',
        description:
          'Build robust research ecosystems, innovation labs, and startup pathways to transform ideas into practical impact.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg',
        alt: 'SDG 9 Industry, Innovation and Infrastructure',
        link: 'https://sdgs.un.org/goals/goal9',
      },
      {
        id: 10,
        code: 'SDG 10',
        title: 'Reduced Inequalities',
        description:
          'Create inclusive opportunities for underrepresented groups with financial aid, mentoring, and equitable access to learning.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg',
        alt: 'SDG 10 Reduced Inequalities',
        link: 'https://sdgs.un.org/goals/goal10',
      },
      {
        id: 11,
        code: 'SDG 11',
        title: 'Sustainable Cities and Communities',
        description:
          'Drive civic engagement and urban sustainability through design thinking, social innovation, and local partnerships.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg',
        alt: 'SDG 11 Sustainable Cities and Communities',
        link: 'https://sdgs.un.org/goals/goal11',
      },
      {
        id: 12,
        code: 'SDG 12',
        title: 'Responsible Consumption and Production',
        description:
          'Advance responsible habits through waste reduction campaigns, circular practices, and environmentally conscious operations.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg',
        alt: 'SDG 12 Responsible Consumption and Production',
        link: 'https://sdgs.un.org/goals/goal12',
      },
      {
        id: 13,
        code: 'SDG 13',
        title: 'Climate Action',
        description:
          'Embed climate literacy and action-based research, with campus-led initiatives to reduce emissions and improve resilience.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg',
        alt: 'SDG 13 Climate Action',
        link: 'https://sdgs.un.org/goals/goal13',
      },
      {
        id: 14,
        code: 'SDG 14',
        title: 'Life Below Water',
        description:
          'Promote marine ecosystem awareness and water-resource responsibility through interdisciplinary outreach and education.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg',
        alt: 'SDG 14 Life Below Water',
        link: 'https://sdgs.un.org/goals/goal14',
      },
      {
        id: 15,
        code: 'SDG 15',
        title: 'Life on Land',
        description:
          'Support biodiversity, tree plantation, and habitat conservation through student participation and community drives.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg',
        alt: 'SDG 15 Life on Land',
        link: 'https://sdgs.un.org/goals/goal15',
      },
      {
        id: 16,
        code: 'SDG 16',
        title: 'Peace, Justice and Strong Institutions',
        description:
          'Nurture ethical leadership, legal awareness, and transparent governance values in academics and administration.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg',
        alt: 'SDG 16 Peace, Justice and Strong Institutions',
        link: 'https://sdgs.un.org/goals/goal16',
      },
      {
        id: 17,
        code: 'SDG 17',
        title: 'Partnerships for the Goals',
        description:
          'Expand impact through collaborations with academia, industry, government, and civil society for shared SDG outcomes.',
        imageUrl: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg',
        alt: 'SDG 17 Partnerships for the Goals',
        link: 'https://sdgs.un.org/goals/goal17',
      },
    ],
    []
  );

  const focusedGoal = useMemo(
    () => sdgGoals.find((goal) => goal.id === focusedGoalId) || sdgGoals[0],
    [focusedGoalId, sdgGoals]
  );

  const policyItems = [
    {
      title: 'Green Campus Policy',
      desc: 'Promotes energy efficiency, responsible water use, and low-waste operations across all university facilities.',
      sdgs: 'SDG 6, SDG 7, SDG 12, SDG 13',
    },
    {
      title: 'Inclusive Education Policy',
      desc: 'Strengthens access to quality learning through equity-focused admissions support and student development initiatives.',
      sdgs: 'SDG 4, SDG 5, SDG 10',
    },
    {
      title: 'Responsible Procurement Policy',
      desc: 'Encourages ethical, sustainable, and locally aligned procurement practices for campus operations.',
      sdgs: 'SDG 8, SDG 9, SDG 12',
    },
    {
      title: 'Community Outreach Policy',
      desc: 'Aligns institutional outreach, health camps, and social initiatives with measurable SDG outcomes.',
      sdgs: 'SDG 3, SDG 11, SDG 17',
    },
  ];

  const collaborationItems = [
    {
      title: 'Academic Partnerships',
      desc: 'Collaborate with universities and institutes for SDG-focused curriculum, research, and faculty exchange programs.',
      sdgs: 'SDG 4, SDG 9, SDG 17',
    },
    {
      title: 'Industry Engagement',
      desc: 'Work with industry to launch innovation challenges, internships, and problem-solving initiatives linked to SDG priorities.',
      sdgs: 'SDG 8, SDG 9, SDG 12',
    },
    {
      title: 'Government & Civic Bodies',
      desc: 'Partner with public institutions and local authorities for implementation-driven development projects.',
      sdgs: 'SDG 11, SDG 13, SDG 16, SDG 17',
    },
    {
      title: 'NGO & Social Sector Alliances',
      desc: 'Co-create awareness drives and field interventions with NGOs for impact on health, equity, and environment goals.',
      sdgs: 'SDG 1, SDG 3, SDG 5, SDG 10, SDG 17',
    },
  ];

  const sdgFullForm = 'Sustainable Development Goals';

  return (
    <section className="pt-28 pb-12 lg:pt-40 bg-[#F8F9FA] min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Breadcrumb Header */}
        <div className="flex justify-between items-center bg-[#F8F9FA] pb-6 mb-8 border-b border-ksv-border/40">
          <h1 className="text-3xl font-display font-medium text-ksv-dark">{sdgFullForm}</h1>
          <div className="text-xs font-body font-bold text-ksv-dark/50 uppercase tracking-widest">
            HOME
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 bg-ksv-white shadow-sm p-4 md:p-8 rounded-sm">
          
          {/* Left Sidebar Menu */}
          <div className="w-full md:w-64 shrink-0 flex flex-col pt-2 border-r border-[#E0E0E0]/60 pr-4">
            {sidebarLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(link)}
                className={`text-left py-4 px-4 text-sm font-body transition-colors border-b border-[#E0E0E0] last:border-0 ${
                  activeTab === link 
                    ? 'bg-[#F2F2F2] font-semibold text-ksv-dark border-l-4 border-l-[#009EDB]' 
                    : 'text-ksv-dark/70 hover:bg-[#F9F9F9]'
                }`}
              >
                {activeTab === link && link === 'SDG' && (
                  <span className="inline-block w-4 h-4 mr-2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/1b/Sustainable_Development_Goals_color_wheel.png')] bg-cover bg-center rounded-full align-middle"></span>
                )}
                {link === 'SDG' ? sdgFullForm : link}
              </button>
            ))}
          </div>

          {/* Right Content Grid */}
          <div className="flex-1">
            {activeTab === 'SDG' ? (
              <>
              <motion.div
                key={hasGoalInteraction ? focusedGoal.id : 'default-un-view'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-4 border border-ksv-border rounded-radius-md overflow-hidden bg-ksv-white"
              >
                {hasGoalInteraction ? (
                  <a
                    href={focusedGoal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full hover:bg-ksv-light/20 transition-colors"
                  >
                    <div className="h-full flex flex-col sm:flex-row">
                      <div className="sm:w-[190px] sm:min-w-[190px] h-[180px] sm:h-auto bg-ksv-white border-b sm:border-b-0 sm:border-r border-ksv-border">
                        <img src={focusedGoal.imageUrl} alt={focusedGoal.alt} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 md:p-5 flex-1 bg-ksv-white min-h-[180px]">
                        <p className="text-xs font-heading font-bold tracking-wider text-ksv-secondary uppercase mb-1">{focusedGoal.code}</p>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-ksv-primary mb-2">{focusedGoal.title}</h3>
                        <p className="font-body text-sm md:text-base text-ksv-dark/75 leading-relaxed">{focusedGoal.description}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="h-full flex flex-col sm:flex-row">
                    <div className="sm:w-[190px] sm:min-w-[190px] h-[180px] sm:h-auto bg-ksv-white border-b sm:border-b-0 sm:border-r border-ksv-border flex items-center justify-center p-5">
                      <img
                        src="/icons/sdg/sdg.png"
                        alt="United Nations Sustainable Development Goals logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 md:p-5 flex-1 bg-ksv-white min-h-[180px]">
                      <p className="text-xs font-heading font-bold tracking-wider text-ksv-secondary uppercase mb-1">UN / UNESCO</p>
                      <h3 className="text-lg md:text-xl font-heading font-bold text-ksv-primary mb-2">Sustainable Development Goals</h3>
                      <p className="font-body text-sm md:text-base text-ksv-dark/75 leading-relaxed">
                        Hover or click any SDG tile to view its detailed summary. Click the elaborated card after selecting a goal to open the official United Nations SDG page.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
              >
                {sdgGoals.map((goal) => (
                  <motion.a
                    key={goal.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: goal.id * 0.03 }}
                    onMouseEnter={() => {
                      setFocusedGoalId(goal.id);
                      setHasGoalInteraction(true);
                    }}
                    onClick={() => {
                      setFocusedGoalId(goal.id);
                      setHasGoalInteraction(true);
                    }}
                    href={goal.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`aspect-square bg-ksv-light border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      focusedGoalId === goal.id ? 'border-ksv-secondary ring-2 ring-ksv-secondary/40' : 'border-ksv-border'
                    }`}
                  >
                    <div className="relative h-full">
                      <img src={goal.imageUrl} alt={goal.alt} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent text-white px-2.5 py-2">
                        <p className="text-[11px] font-heading font-semibold leading-tight">{goal.code}</p>
                        <p className="text-[10px] font-body/4 line-clamp-1">{goal.title}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              </>
            ) : activeTab === 'Policies' ? (
              <div className="bg-[#F8F9FA] rounded border border-ksv-border p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-ksv-primary mb-2">Policies</h3>
                <p className="font-body text-ksv-dark/70 mb-6">
                  Key policy directions supporting Sustainable Development Goals across academics, operations, and outreach.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {policyItems.map((item) => (
                    <article key={item.title} className="bg-ksv-white border border-ksv-border rounded-radius-md p-4">
                      <h4 className="font-heading font-bold text-ksv-dark mb-1">{item.title}</h4>
                      <p className="font-body text-sm text-ksv-dark/70 leading-relaxed">{item.desc}</p>
                      <p className="mt-2 text-xs font-heading font-semibold tracking-wide text-ksv-secondary">Aligned Goals: {item.sdgs}</p>
                    </article>
                  ))}
                </div>
                <a href="/contact" className="inline-flex items-center text-sm font-heading font-bold text-ksv-primary hover:text-ksv-secondary transition-colors">
                  Request policy documents from SDG Cell
                </a>
              </div>
            ) : activeTab === 'Collaboration' ? (
              <div className="bg-[#F8F9FA] rounded border border-ksv-border p-6 md:p-8">
                <h3 className="text-2xl font-display font-bold text-ksv-primary mb-2">Collaboration</h3>
                <p className="font-body text-ksv-dark/70 mb-6">
                  Partnership channels for institutions, organizations, and communities to co-create SDG impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {collaborationItems.map((item) => (
                    <article key={item.title} className="bg-ksv-white border border-ksv-border rounded-radius-md p-4">
                      <h4 className="font-heading font-bold text-ksv-dark mb-1">{item.title}</h4>
                      <p className="font-body text-sm text-ksv-dark/70 leading-relaxed">{item.desc}</p>
                      <p className="mt-2 text-xs font-heading font-semibold tracking-wide text-ksv-secondary">Aligned Goals: {item.sdgs}</p>
                    </article>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="/research" className="px-4 py-2 rounded-radius-pill bg-ksv-primary text-ksv-white text-sm font-heading font-semibold hover:bg-ksv-dark transition-colors">
                    Explore Research Partnerships
                  </a>
                  <a href="/contact" className="px-4 py-2 rounded-radius-pill border border-ksv-primary text-ksv-primary text-sm font-heading font-semibold hover:bg-ksv-primary hover:text-ksv-white transition-colors">
                    Contact Collaboration Desk
                  </a>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex items-center justify-center bg-[#F8F9FA] rounded border border-ksv-border border-dashed">
                <p className="text-ksv-dark/50 font-body text-lg">
                  Content for <strong>{activeTab}</strong> will be displayed here.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
