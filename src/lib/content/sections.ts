// SA Film Academy Strategy Content
// This file contains all extracted verbatim copy from safa-strategy.html
// Generated automatically - Rule A compliance (100% text integrity)
// British English preserved throughout (Rule F)

export interface StrategySection {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  content: string;
}

export const HERO = {
  title: "SA Film Academy",
  subtitle: "360° Marketing Strategy 2026–2027",
  lead: "An integrated agentic marketing blueprint. Implementation from 1 June 2026.",
  exec: `For twenty years, SA Film Academy has quietly built the talent pipeline that has carried South African film onto the global stage. Established in 2006 as a MICT SETA-accredited Non-Profit Company, the Academy has invested in excess of R60 million in skills development and in-service training, placed over 3,000 trainees and interns on more than 500 local and international productions, holds a 96% black student base with 58% black female students, and has facilitated 124 free driving licences through the FILMGRO Driving Academy. This document is not an incremental marketing plan. It is the deliberate moment at which SA Film Academy stops being an institution known only to insiders – and becomes the defining brand of the South African film talent pipeline, recognised by production accountants, by international studios, by every aspiring trainee in the country, and by every funder who matters.`,
} as const;

export const SECTION_ORG: StrategySection = {
  id: 'org',
  num: '02',
  title: "Who we are, what we actually do, and the perception we have already begun to shift.",
  subtitle: "SA Film Academy is not a college and it is not an agency. It is something more useful — and, until now, less well understood.",
  content: `02 ·
The Organisation
Who we are, what we actually do, and the perception we have already begun to shift.
SA Film Academy is not a college and it is not an agency. It is something more useful — and, until now, less well understood.
SA Film Academy is a MICT SETA-accredited Non-Profit Company that facilitates the Work Skills Programme on behalf of the South African film and digital media industries. The Academy applies annually to the SETA for intern placements; the SETA approves a cohort and pays trainee stipends; the Academy then deploys those interns into a roster of production-company clients including
Blue Ice Africa, Film Afrika, Home Brew Films, Mannequin Films, Moonlighting Films, Spier Films, Atlantic Studios
and an evolving list of others. These production houses are described internally as the Academy's
fringe clients
— they request a defined number of trainees per production, and SAFA fulfils the placement.
The trainee pathway is best understood as two clear tiers. In the first year, an intern is placed on a production for twelve months under a SETA-funded stipend; if the placement company puts them on an active production beyond that internship, an additional production fee applies. After that internship year, the trainee progresses onto SAFA's database and becomes available for future productions, paid by the production company in accordance with the Academy's tiered remuneration policy. Around this two-tier system, the Academy carries the full administrative weight: the Service Level Agreement, the Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the assessment, the moderation and the certification — every compliance instrument the SETA requires — is prepared and submitted by SAFA's Skills Development Facilitator on the client's behalf.
There has historically been a twin perception challenge in the market. The first is that the Academy was led by Cape Town-based white production companies; the second is that trainees were allowed to remain trainees for too long — the
perpetual trainee
problem, named accurately and uncomfortably by the Academy's own leadership. Both perceptions are now demonstrably softening. Over the past year, more than
500 new professional connection requests
have landed in the Chief Executive's channels alone, and the industry's tone toward SAFA has perceptibly shifted. The strategy in these pages is the active antidote to both legacy perceptions — a tiered career-progression model that ensures no one is a trainee for ever, and a marketing posture that puts authentic, transformed leadership at the front of the brand. As of this month, the live example is the Road Home production, currently being facilitated by Blue Ice Africa, with a SAFA placement request already in motion.
Ecosystem · Map
Investment
R
0
m+
In skills development and in-service training, since 2006.
Trainees & Interns
0
+
Placed across more than 500 local and international productions.
Black Student Base
0
%
With 58% black female representation across the trainee body.
Driving Licences
0
Granted free through FILMGRO Driving Academy, sponsored by Suzuki.
03 ·
The Brand Ecosystem
Five entities, one architecture. Until now, they have read as five strangers.
A branded house — SAFA at the apex, four programmes radiating outward, each carrying a visible relationship to the master brand.
Architecture · Site Plan
01
Core Entity
SA Film Academy
The MICT SETA-accredited Non-Profit Company that anchors everything — twenty years of placement, compliance and pathway-building, with the SLA, the Workplace Skills Plan and the Annual Training Report carried entirely on behalf of production-company clients. The current digital gap is also the current commercial opportunity: the website does not yet communicate the depth of the ecosystem or the commercial value proposition to production companies and SPVs. The remainder of this strategy is the work that closes that gap.
02
Alumni Advancement
Academy of Creative Excellence (ACE)
The alumni advancement programme for trainees who have completed two to three years and are ready to move into crew positions, Head-of-Department roles, or independent producer paths. The recent short film
Ini
is an ACE success story, and NFVF funding assistance forms part of the value proposition. The honest gap is well understood internally — the programme
lags
, with alumni self-selecting out as soon as they become employable. The strategy in these pages is the mechanism to make ACE a prestigious destination, not a transitional waiting room.
03
CSI Initiative
FILMGRO Driving Academy
The ten-year, Suzuki-sponsored CSI initiative providing free professional driving lessons to trainees and interns, dramatically enhancing their employability on production sets where mobility is a non-negotiable. The immediate strategic opportunity is geographic: a FILMGRO expansion into Gauteng, conditional on securing a vehicle commitment from Suzuki and identifying a local driving-training partner. This expansion is positioned as a first-quarter campaign activation in the calendar that follows.
04
Subsidiary
GreenSet —
greenset.org
The sustainability subsidiary — a separate entity with its own website and brand identity, contracted regularly by Netflix and other international productions for sustainable set management, Eco-Steward training and GREEN PA placement. The critical and chronically under-marketed gap is that GreenSet's connection to SA Film Academy is almost invisible across both websites and across every social channel. This is one of the most significant untapped marketing assets in the entire ecosystem — particularly given that Netflix, UK and US productions now actively require sustainability compliance partners. A first-quarter GreenSet co-brand integration campaign is non-negotiable.
05
Digital Platform
Cineterns —
cineterns.vercel.app
The new digital portal that replaces the entirely manual placement process — the one in which Cindy, on the Academy's small team, manually emails CVs, elevator pitches and trainee profiles to production companies upon request. Cineterns automates that entire workflow. It is the technological centrepiece of the ecosystem. It serves two audiences simultaneously: trainees registering their profiles, productions, availability and portfolios on one side; production companies registering their briefs, role requirements and timelines on the other. The agentic matching layer scores, shortlists and drafts introductions without human intervention. Cineterns is what transforms SAFA from a manually operated placement agency into a scalable, technology-enabled talent platform — and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
04 ·
Digital Infrastructure
What has already been built — and why it matters before anything else is scaled.
This strategy is not aspirational. The two pieces of infrastructure that underpin everything else are already live, deployed and demonstrable. What follows is scaling what is already running, not building from scratch.
Stack · Circuit Topology
Live System
Cineterns — the placement portal
The frontend runs on
Next.js 14
with the App Router and React Server Components, delivering fast, SEO-friendly server-rendered pages.
Tailwind CSS
handles utility-first responsive styling. Deployment is via
Vercel
on edge functions, giving globally distributed sub-100ms response times — which means a Netflix production executive opening the portal from London experiences the same speed as one in Johannesburg.
The data layer is
Supabase
— a Postgres-based backend handling trainee profile storage, production-company accounts, placement records, real-time availability statuses, and role-based access control.
Supabase Auth
provides secure user authentication. Supabase real-time means a production manager sees a trainee's availability change the moment it happens, with no refresh required.
Sitting in front of all of this is
Cloudflare
— DNS management, CDN caching, bot protection and a Web Application Firewall — which places the Academy's data infrastructure at enterprise security standards appropriate for handling personal trainee data under POPIA.
The agentic AI layer is provisioned through the
Anthropic Claude API
(with OpenAI as a redundant fallback) — enabling automated trainee profile enrichment, production-brief matching and communication drafting. The agent reads a production brief, scores registered trainees against the role requirements, and produces a ranked shortlist with draft introductory messages, all without human intervention. As Cineterns scales to hundreds of trainees and dozens of simultaneous productions, quality placements remain consistent without proportional growth in staff headcount.
Interactive Prototype
The presentation engine
Alongside the placement portal sits an immersive, interactive web-based pitch experience — built to be used when engaging production companies, potential partners and institutional funders. It simulates the look and feel of the full SAFA digital ecosystem, giving stakeholders an
80% functional preview
of what the portal and marketing infrastructure will look like when complete.
The principle is straightforward: when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap. Strategy stops being asked to be imagined — it can be interacted with.
Technically, the prototype uses the identical
Next.js · Vercel · Cloudflare · Supabase
stack as Cineterns. This consistency means zero architectural rework: the transition from prototype to live product is a matter of content population and user onboarding, not rebuilding. The prototype is therefore a marketing asset as much as a technical one.
That construction principle — the prototype that
is
the production system, eight-tenths complete — is the single clearest evidence that this strategy is execution-ready, not a slide deck.
Why the technical choices matter commercially
Choice
Commercial translation
Vercel global edge
The portal loads as fast for an international production executive in London as it does for a placement coordinator in Johannesburg. Speed is now a credibility signal.
Supabase real-time
Trainee availability and placement statuses update instantly across all dashboards, ending the long email chains that currently lose deals.
Cloudflare boundary
Enterprise-grade security and POPIA-appropriate handling of personal data — a precondition for any institutional partner serious about compliance.
Claude API matching
Placements scale without scaling the team. The cost of one placement and the cost of one hundred placements per month becomes roughly equivalent.
Production-grade build discipline
Every digital deliverable produced by this partnership inherits the same architectural rigour applied to live production systems — no prototypes pretending to be products.
05 ·
The 12-Month Marketing Calendar
June 2026 to May 2027 — four quarters, four phases, every milestone visible.
Foundation and unification first. Visibility and commercial traction second. Authority and funding third. Scale and self-sustainability last.
Timeline · 12 Months
Quarter 1 · Jun–Aug 2026
Foundation, Unification & Launch
Architecture, alignment, and the first visible signal that the new chapter has begun.
Strategy formally adopted and the implementation rhythm established with the executive team.
Brand audit across all five entities — SAFA, GreenSet, FilmGro, ACE, Cineterns — to establish a unified visual language and messaging hierarchy.
Launch of the GreenSet co-brand integration campaign across the SAFA website and every social channel.
Formal SEO baseline audit on safilmacademy.org and the Cineterns portal.
Social media account consolidation and profile optimisation across LinkedIn, Instagram and Facebook.
Cineterns open beta with the first cohort of registered trainees and invited production companies.
FILMGRO Gauteng expansion: activate the Suzuki conversation and identify a driving training partner.
First two agentic blog posts published.
The Chief Executive's LinkedIn presence strategy activated as the institutional voice channel.
Quarter 2 · Sep–Nov 2026
Growth, Visibility & Commercial Traction
From quiet authority to commercial signal — the brand starts converting attention into income.
GreenSet–Netflix case study published as a flagship piece of thought-leadership content.
B-BBEE Skills Levy awareness campaign targeting SPV production accountants and legal compliance teams — digital advertisements, LinkedIn outreach, and a free downloadable
Skills Levy Guide for Film Productions
lead magnet.
Cineterns public launch with the first ten confirmed production-company accounts.
FILMGRO Gauteng launch event (conditional on the Suzuki vehicle commitment being secured).
ACE alumni case-study series — profile the NFVF-funded short film
Ini
and other HOD-track graduates.
Paid LinkedIn campaign targeting international production companies serviced from South Africa.
AI training masterclass module announced and pre-registration opened.
Quarter 3 · Dec 2026 – Feb 2027
Authority, Thought Leadership & Funding
The Academy becomes the entity quoted, cited, and approached — not the one applying.
Agentic funding application pipeline operating weekly — NFVF, DTI, DSAC, and private foundations.
Annual impact report published digitally and distributed to all production-company partners and SETA contacts.
One major industry speaking engagement secured for the Academy's Chief Executive.
GreenSet blog series: five posts on sustainable production practices in South Africa, co-authored with GreenSet practitioners.
AI-in-film masterclass content completed and curriculum published.
Second cohort of ACE alumni profiled in the
From Intern to HOD
editorial series.
Quarter 4 · Mar–May 2027
Scale, Self-Sustainability & Renewal
The infrastructure pays for itself. The strategy renews for year two with a stronger position than it started.
Cineterns commercial launch — the full pricing model active for production-company subscriptions.
The self-sustainability case is modelled publicly: SAFA publishes a
Path to Self-Sustainability
article showing how the ecosystem funds itself through Skills Levy administration fees, Cineterns subscriptions, and GreenSet contracts.
All production-company SLAs reviewed and renewed with an upsell to bundled Cineterns access.
The twelve-month strategy review is initiated and a second-year blueprint is drafted.
06 ·
Agentic AI Marketing Engine
Not an aspiration. A set of concrete, running, weekly automated workflows.
Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage.
Agents · Orbital System
The agentic engine is the centrepiece of this strategy because it is the answer to the question every small non-profit eventually has to face:
how do you scale without growing the team?
The five agents described below are concrete, technically grounded, and built on the same Claude API infrastructure already provisioned in Cineterns. None of them is theoretical. All of them are scheduled to run on weekly or daily cycles from the first month of implementation.
The strategic logic is simple. The Academy's team is small. The industry is, in honest assessment,
in a very distressed situation
. The Academy cannot manually do everything that needs to be done — but it can supervise a set of agents that perform the time-intensive groundwork on its behalf, surfacing only the work that requires human judgement. That is the leverage point on which the entire commercial argument rests.
Agent 01 · Weekly
Funding Applications Agent
Every Monday morning, without human initiation, this autonomous pipeline performs a complete cycle. It monitors the NFVF, DTI, DSAC, Creative SA and key private foundation grant calendars via web tool calls. It matches each open funding opportunity against SAFA's pre-loaded eligibility profile — NPC status, MICT SETA accreditation, twenty-year track record, impact statistics. It drafts a tailored funding application narrative drawing from the Academy's stored statistics and programme descriptions. It then delivers a reviewed, ready-to-submit draft to the executive team's inbox for approval.
This directly addresses the industry's financial pressure. The Academy will no longer miss funding opportunities for the simple reason that no one had time to write the application that week. The agent does the application. The executive reviews and submits.
Agent 02 · Twice Weekly
Automated Blog & Thought Leadership Pipeline
An agentic content workflow producing two SEO-optimised long-form articles per week. The agent is briefed on five content pillars: skills development legislation and B-BBEE compliance for the film industry; the AI revolution in post-production (studios are already recruiting for Veo, Kling, Hailuo and other generative AI tools — the shift is no longer theoretical but present-tense); sustainable production and GreenSet services; career-path development stories from ACE alumni; and South African film industry news and commentary.
Each post is optimised for both traditional Google search and AI search engines (Perplexity, ChatGPT Browse, Google AI Overviews). The agent selects the topic, drafts the article, generates meta title and description, suggests internal links, and queues the result for editorial review before publication.
Agent 03 · Daily
Social Media Automation Agent
A scheduling and publishing workflow across four channels with distinct purposes.
LinkedIn
is the primary channel for production companies, B-BBEE procurement decision-makers and industry professionals.
Instagram
is the primary channel for the trainee community, the youth audience and visual storytelling.
Facebook
serves alumni engagement and CSI visibility for FILMGRO and GreenSet.
X (formerly Twitter)
handles real-time industry commentary and news.
The agent repurposes blog content into platform-native posts, generates placement-announcement posts when Cineterns records a successful match, creates FILMGRO milestone posts when a licence is issued, and maintains a consistent cadence of five posts per week per platform — without manual scheduling effort.
Agent 04 · Embedded
Trainee–Production Matching Agent
The core agentic workflow embedded inside the Cineterns portal itself. When a production company submits a brief specifying required roles, dates, location and tier level, the agent scores all registered trainees against the brief using a weighted matching algorithm — experience tier, department, location, availability and portfolio quality. It produces a ranked shortlist of the top five candidates per role, drafts a personalised introductory communication for each, and notifies the production company and the shortlisted trainees simultaneously.
The production company selects, the system records the placement, and the trainee's career tier automatically advances. This replaces the entirely manual
Cindy sends the link
process and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
Agent 05 · Weekly
Perception Management & Reputation Monitoring Agent
A lightweight listening agent that monitors LinkedIn, Google and industry news for mentions of SA Film Academy, GreenSet, the Chief Executive and a curated list of relevant keywords. It surfaces reputation signals on a weekly cadence — new connection requests (the Chief Executive's professional channels have logged more than 500 new requests over the past year as a positive signal), industry commentary, and any negative perception indicators that may need a measured response. It suggests response actions, with the human always retaining final say.
Target funders monitored by Agent 01
Funder
Type
Indicative cycle
SAFA fit
National Film and Video Foundation (NFVF)
Government
Quarterly grant cycles
Direct — alumni production funding, ACE programme alignment
Department of Trade, Industry & Competition (DTIC)
Government
Annual, project-linked
Indirect — Film & TV Production Rebate adjacency
Department of Sport, Arts and Culture (DSAC)
Government
Annual programmes
Direct — skills development and youth empowerment
MICT SETA Discretionary Grants
SETA
Annual
Direct — Skills Programme funding, alignment with accreditation
Creative SA
Industry body
Rolling
Direct — creative sector skills initiatives
Private foundations (Ford, Open Society, etc.)
Private
Variable
Indirect — transformation and youth pipeline funding
International production studio CSI funds
Corporate
Project-linked
Direct — productions filming in South Africa
07 ·
SEO & AI SEO Strategy
Found by search engines today. Found by AI engines tomorrow. Both, deliberately.
Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.
Traditional SEO
The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using
Organization
,
EducationalOrganization
,
Course
,
JobPosting
and
Event
schema types. Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
The keyword strategy targets a defined set of primary terms:
film production internship South Africa
,
MICT SETA accredited film training
,
B-BBEE skills levy film production
,
sustainable film production South Africa
,
film trainee placement Cape Town Johannesburg
,
NFVF funding application support
,
green set sustainability film
. Each of these is a search query someone with budget authority is plausibly typing into Google this week. The Academy needs to be the first answer.
Content cluster strategy: each pillar page targets a primary keyword and is surrounded by supporting blog posts forming a topical cluster — the structural arrangement Google now rewards. Backlink strategy targets industry associations, SETA-linked education directories and production-company partner pages — the inbound links that signal authority within the South African film training space specifically.
Search · Topic Cluster
AI SEO — Generative Engine Optimisation
An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it. The Academy needs to be the entity that appears
inside
those answers — not the entity that ranks tenth on a page no one reads.
SAFA needs to be the body cited when a production accountant in London asks Perplexity
"how do film production companies in South Africa manage B-BBEE compliance?"
— and the body cited when an aspiring trainee asks ChatGPT
"who provides film intern placement in South Africa?"
. The strategy for this involves a deliberate set of moves: structuring all web content with clear factual claims, cited statistics and named authorities (the Academy's Chief Executive appears in machine-readable form as a subject-matter expert on every relevant page); publishing comprehensive FAQ pages that directly mirror the phrasing of conversational queries; ensuring entity disambiguation so that
SA Film Academy
is unambiguously connected to MICT SETA, to GreenSet, to FILMGRO, to Cineterns, and to its institutional leadership in the semantic web; and building Wikipedia-calibre authority through citations, press mentions and structured data over the twelve-month horizon.
The compounding effect of these moves is that within six to nine months, a meaningful share of cold inbound enquiries will originate from AI-generated answers — not from organic search, not from paid advertising. That is the new asymmetry. The institutions that build for it now will be the references for the next decade.
08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_ECOSYSTEM: StrategySection = {
  id: 'ecosystem',
  num: '03',
  title: "Five entities, one architecture. Until now, they have read as five strangers.",
  subtitle: "A branded house — SAFA at the apex, four programmes radiating outward, each carrying a visible relationship to the master brand.",
  content: `03 ·
The Brand Ecosystem
Five entities, one architecture. Until now, they have read as five strangers.
A branded house — SAFA at the apex, four programmes radiating outward, each carrying a visible relationship to the master brand.
Architecture · Site Plan
01
Core Entity
SA Film Academy
The MICT SETA-accredited Non-Profit Company that anchors everything — twenty years of placement, compliance and pathway-building, with the SLA, the Workplace Skills Plan and the Annual Training Report carried entirely on behalf of production-company clients. The current digital gap is also the current commercial opportunity: the website does not yet communicate the depth of the ecosystem or the commercial value proposition to production companies and SPVs. The remainder of this strategy is the work that closes that gap.
02
Alumni Advancement
Academy of Creative Excellence (ACE)
The alumni advancement programme for trainees who have completed two to three years and are ready to move into crew positions, Head-of-Department roles, or independent producer paths. The recent short film
Ini
is an ACE success story, and NFVF funding assistance forms part of the value proposition. The honest gap is well understood internally — the programme
lags
, with alumni self-selecting out as soon as they become employable. The strategy in these pages is the mechanism to make ACE a prestigious destination, not a transitional waiting room.
03
CSI Initiative
FILMGRO Driving Academy
The ten-year, Suzuki-sponsored CSI initiative providing free professional driving lessons to trainees and interns, dramatically enhancing their employability on production sets where mobility is a non-negotiable. The immediate strategic opportunity is geographic: a FILMGRO expansion into Gauteng, conditional on securing a vehicle commitment from Suzuki and identifying a local driving-training partner. This expansion is positioned as a first-quarter campaign activation in the calendar that follows.
04
Subsidiary
GreenSet —
greenset.org
The sustainability subsidiary — a separate entity with its own website and brand identity, contracted regularly by Netflix and other international productions for sustainable set management, Eco-Steward training and GREEN PA placement. The critical and chronically under-marketed gap is that GreenSet's connection to SA Film Academy is almost invisible across both websites and across every social channel. This is one of the most significant untapped marketing assets in the entire ecosystem — particularly given that Netflix, UK and US productions now actively require sustainability compliance partners. A first-quarter GreenSet co-brand integration campaign is non-negotiable.
05
Digital Platform
Cineterns —
cineterns.vercel.app
The new digital portal that replaces the entirely manual placement process — the one in which Cindy, on the Academy's small team, manually emails CVs, elevator pitches and trainee profiles to production companies upon request. Cineterns automates that entire workflow. It is the technological centrepiece of the ecosystem. It serves two audiences simultaneously: trainees registering their profiles, productions, availability and portfolios on one side; production companies registering their briefs, role requirements and timelines on the other. The agentic matching layer scores, shortlists and drafts introductions without human intervention. Cineterns is what transforms SAFA from a manually operated placement agency into a scalable, technology-enabled talent platform — and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
04 ·
Digital Infrastructure
What has already been built — and why it matters before anything else is scaled.
This strategy is not aspirational. The two pieces of infrastructure that underpin everything else are already live, deployed and demonstrable. What follows is scaling what is already running, not building from scratch.
Stack · Circuit Topology
Live System
Cineterns — the placement portal
The frontend runs on
Next.js 14
with the App Router and React Server Components, delivering fast, SEO-friendly server-rendered pages.
Tailwind CSS
handles utility-first responsive styling. Deployment is via
Vercel
on edge functions, giving globally distributed sub-100ms response times — which means a Netflix production executive opening the portal from London experiences the same speed as one in Johannesburg.
The data layer is
Supabase
— a Postgres-based backend handling trainee profile storage, production-company accounts, placement records, real-time availability statuses, and role-based access control.
Supabase Auth
provides secure user authentication. Supabase real-time means a production manager sees a trainee's availability change the moment it happens, with no refresh required.
Sitting in front of all of this is
Cloudflare
— DNS management, CDN caching, bot protection and a Web Application Firewall — which places the Academy's data infrastructure at enterprise security standards appropriate for handling personal trainee data under POPIA.
The agentic AI layer is provisioned through the
Anthropic Claude API
(with OpenAI as a redundant fallback) — enabling automated trainee profile enrichment, production-brief matching and communication drafting. The agent reads a production brief, scores registered trainees against the role requirements, and produces a ranked shortlist with draft introductory messages, all without human intervention. As Cineterns scales to hundreds of trainees and dozens of simultaneous productions, quality placements remain consistent without proportional growth in staff headcount.
Interactive Prototype
The presentation engine
Alongside the placement portal sits an immersive, interactive web-based pitch experience — built to be used when engaging production companies, potential partners and institutional funders. It simulates the look and feel of the full SAFA digital ecosystem, giving stakeholders an
80% functional preview
of what the portal and marketing infrastructure will look like when complete.
The principle is straightforward: when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap. Strategy stops being asked to be imagined — it can be interacted with.
Technically, the prototype uses the identical
Next.js · Vercel · Cloudflare · Supabase
stack as Cineterns. This consistency means zero architectural rework: the transition from prototype to live product is a matter of content population and user onboarding, not rebuilding. The prototype is therefore a marketing asset as much as a technical one.
That construction principle — the prototype that
is
the production system, eight-tenths complete — is the single clearest evidence that this strategy is execution-ready, not a slide deck.
Why the technical choices matter commercially
Choice
Commercial translation
Vercel global edge
The portal loads as fast for an international production executive in London as it does for a placement coordinator in Johannesburg. Speed is now a credibility signal.
Supabase real-time
Trainee availability and placement statuses update instantly across all dashboards, ending the long email chains that currently lose deals.
Cloudflare boundary
Enterprise-grade security and POPIA-appropriate handling of personal data — a precondition for any institutional partner serious about compliance.
Claude API matching
Placements scale without scaling the team. The cost of one placement and the cost of one hundred placements per month becomes roughly equivalent.
Production-grade build discipline
Every digital deliverable produced by this partnership inherits the same architectural rigour applied to live production systems — no prototypes pretending to be products.
05 ·
The 12-Month Marketing Calendar
June 2026 to May 2027 — four quarters, four phases, every milestone visible.
Foundation and unification first. Visibility and commercial traction second. Authority and funding third. Scale and self-sustainability last.
Timeline · 12 Months
Quarter 1 · Jun–Aug 2026
Foundation, Unification & Launch
Architecture, alignment, and the first visible signal that the new chapter has begun.
Strategy formally adopted and the implementation rhythm established with the executive team.
Brand audit across all five entities — SAFA, GreenSet, FilmGro, ACE, Cineterns — to establish a unified visual language and messaging hierarchy.
Launch of the GreenSet co-brand integration campaign across the SAFA website and every social channel.
Formal SEO baseline audit on safilmacademy.org and the Cineterns portal.
Social media account consolidation and profile optimisation across LinkedIn, Instagram and Facebook.
Cineterns open beta with the first cohort of registered trainees and invited production companies.
FILMGRO Gauteng expansion: activate the Suzuki conversation and identify a driving training partner.
First two agentic blog posts published.
The Chief Executive's LinkedIn presence strategy activated as the institutional voice channel.
Quarter 2 · Sep–Nov 2026
Growth, Visibility & Commercial Traction
From quiet authority to commercial signal — the brand starts converting attention into income.
GreenSet–Netflix case study published as a flagship piece of thought-leadership content.
B-BBEE Skills Levy awareness campaign targeting SPV production accountants and legal compliance teams — digital advertisements, LinkedIn outreach, and a free downloadable
Skills Levy Guide for Film Productions
lead magnet.
Cineterns public launch with the first ten confirmed production-company accounts.
FILMGRO Gauteng launch event (conditional on the Suzuki vehicle commitment being secured).
ACE alumni case-study series — profile the NFVF-funded short film
Ini
and other HOD-track graduates.
Paid LinkedIn campaign targeting international production companies serviced from South Africa.
AI training masterclass module announced and pre-registration opened.
Quarter 3 · Dec 2026 – Feb 2027
Authority, Thought Leadership & Funding
The Academy becomes the entity quoted, cited, and approached — not the one applying.
Agentic funding application pipeline operating weekly — NFVF, DTI, DSAC, and private foundations.
Annual impact report published digitally and distributed to all production-company partners and SETA contacts.
One major industry speaking engagement secured for the Academy's Chief Executive.
GreenSet blog series: five posts on sustainable production practices in South Africa, co-authored with GreenSet practitioners.
AI-in-film masterclass content completed and curriculum published.
Second cohort of ACE alumni profiled in the
From Intern to HOD
editorial series.
Quarter 4 · Mar–May 2027
Scale, Self-Sustainability & Renewal
The infrastructure pays for itself. The strategy renews for year two with a stronger position than it started.
Cineterns commercial launch — the full pricing model active for production-company subscriptions.
The self-sustainability case is modelled publicly: SAFA publishes a
Path to Self-Sustainability
article showing how the ecosystem funds itself through Skills Levy administration fees, Cineterns subscriptions, and GreenSet contracts.
All production-company SLAs reviewed and renewed with an upsell to bundled Cineterns access.
The twelve-month strategy review is initiated and a second-year blueprint is drafted.
06 ·
Agentic AI Marketing Engine
Not an aspiration. A set of concrete, running, weekly automated workflows.
Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage.
Agents · Orbital System
The agentic engine is the centrepiece of this strategy because it is the answer to the question every small non-profit eventually has to face:
how do you scale without growing the team?
The five agents described below are concrete, technically grounded, and built on the same Claude API infrastructure already provisioned in Cineterns. None of them is theoretical. All of them are scheduled to run on weekly or daily cycles from the first month of implementation.
The strategic logic is simple. The Academy's team is small. The industry is, in honest assessment,
in a very distressed situation
. The Academy cannot manually do everything that needs to be done — but it can supervise a set of agents that perform the time-intensive groundwork on its behalf, surfacing only the work that requires human judgement. That is the leverage point on which the entire commercial argument rests.
Agent 01 · Weekly
Funding Applications Agent
Every Monday morning, without human initiation, this autonomous pipeline performs a complete cycle. It monitors the NFVF, DTI, DSAC, Creative SA and key private foundation grant calendars via web tool calls. It matches each open funding opportunity against SAFA's pre-loaded eligibility profile — NPC status, MICT SETA accreditation, twenty-year track record, impact statistics. It drafts a tailored funding application narrative drawing from the Academy's stored statistics and programme descriptions. It then delivers a reviewed, ready-to-submit draft to the executive team's inbox for approval.
This directly addresses the industry's financial pressure. The Academy will no longer miss funding opportunities for the simple reason that no one had time to write the application that week. The agent does the application. The executive reviews and submits.
Agent 02 · Twice Weekly
Automated Blog & Thought Leadership Pipeline
An agentic content workflow producing two SEO-optimised long-form articles per week. The agent is briefed on five content pillars: skills development legislation and B-BBEE compliance for the film industry; the AI revolution in post-production (studios are already recruiting for Veo, Kling, Hailuo and other generative AI tools — the shift is no longer theoretical but present-tense); sustainable production and GreenSet services; career-path development stories from ACE alumni; and South African film industry news and commentary.
Each post is optimised for both traditional Google search and AI search engines (Perplexity, ChatGPT Browse, Google AI Overviews). The agent selects the topic, drafts the article, generates meta title and description, suggests internal links, and queues the result for editorial review before publication.
Agent 03 · Daily
Social Media Automation Agent
A scheduling and publishing workflow across four channels with distinct purposes.
LinkedIn
is the primary channel for production companies, B-BBEE procurement decision-makers and industry professionals.
Instagram
is the primary channel for the trainee community, the youth audience and visual storytelling.
Facebook
serves alumni engagement and CSI visibility for FILMGRO and GreenSet.
X (formerly Twitter)
handles real-time industry commentary and news.
The agent repurposes blog content into platform-native posts, generates placement-announcement posts when Cineterns records a successful match, creates FILMGRO milestone posts when a licence is issued, and maintains a consistent cadence of five posts per week per platform — without manual scheduling effort.
Agent 04 · Embedded
Trainee–Production Matching Agent
The core agentic workflow embedded inside the Cineterns portal itself. When a production company submits a brief specifying required roles, dates, location and tier level, the agent scores all registered trainees against the brief using a weighted matching algorithm — experience tier, department, location, availability and portfolio quality. It produces a ranked shortlist of the top five candidates per role, drafts a personalised introductory communication for each, and notifies the production company and the shortlisted trainees simultaneously.
The production company selects, the system records the placement, and the trainee's career tier automatically advances. This replaces the entirely manual
Cindy sends the link
process and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
Agent 05 · Weekly
Perception Management & Reputation Monitoring Agent
A lightweight listening agent that monitors LinkedIn, Google and industry news for mentions of SA Film Academy, GreenSet, the Chief Executive and a curated list of relevant keywords. It surfaces reputation signals on a weekly cadence — new connection requests (the Chief Executive's professional channels have logged more than 500 new requests over the past year as a positive signal), industry commentary, and any negative perception indicators that may need a measured response. It suggests response actions, with the human always retaining final say.
Target funders monitored by Agent 01
Funder
Type
Indicative cycle
SAFA fit
National Film and Video Foundation (NFVF)
Government
Quarterly grant cycles
Direct — alumni production funding, ACE programme alignment
Department of Trade, Industry & Competition (DTIC)
Government
Annual, project-linked
Indirect — Film & TV Production Rebate adjacency
Department of Sport, Arts and Culture (DSAC)
Government
Annual programmes
Direct — skills development and youth empowerment
MICT SETA Discretionary Grants
SETA
Annual
Direct — Skills Programme funding, alignment with accreditation
Creative SA
Industry body
Rolling
Direct — creative sector skills initiatives
Private foundations (Ford, Open Society, etc.)
Private
Variable
Indirect — transformation and youth pipeline funding
International production studio CSI funds
Corporate
Project-linked
Direct — productions filming in South Africa
07 ·
SEO & AI SEO Strategy
Found by search engines today. Found by AI engines tomorrow. Both, deliberately.
Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.
Traditional SEO
The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using
Organization
,
EducationalOrganization
,
Course
,
JobPosting
and
Event
schema types. Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
The keyword strategy targets a defined set of primary terms:
film production internship South Africa
,
MICT SETA accredited film training
,
B-BBEE skills levy film production
,
sustainable film production South Africa
,
film trainee placement Cape Town Johannesburg
,
NFVF funding application support
,
green set sustainability film
. Each of these is a search query someone with budget authority is plausibly typing into Google this week. The Academy needs to be the first answer.
Content cluster strategy: each pillar page targets a primary keyword and is surrounded by supporting blog posts forming a topical cluster — the structural arrangement Google now rewards. Backlink strategy targets industry associations, SETA-linked education directories and production-company partner pages — the inbound links that signal authority within the South African film training space specifically.
Search · Topic Cluster
AI SEO — Generative Engine Optimisation
An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it. The Academy needs to be the entity that appears
inside
those answers — not the entity that ranks tenth on a page no one reads.
SAFA needs to be the body cited when a production accountant in London asks Perplexity
"how do film production companies in South Africa manage B-BBEE compliance?"
— and the body cited when an aspiring trainee asks ChatGPT
"who provides film intern placement in South Africa?"
. The strategy for this involves a deliberate set of moves: structuring all web content with clear factual claims, cited statistics and named authorities (the Academy's Chief Executive appears in machine-readable form as a subject-matter expert on every relevant page); publishing comprehensive FAQ pages that directly mirror the phrasing of conversational queries; ensuring entity disambiguation so that
SA Film Academy
is unambiguously connected to MICT SETA, to GreenSet, to FILMGRO, to Cineterns, and to its institutional leadership in the semantic web; and building Wikipedia-calibre authority through citations, press mentions and structured data over the twelve-month horizon.
The compounding effect of these moves is that within six to nine months, a meaningful share of cold inbound enquiries will originate from AI-generated answers — not from organic search, not from paid advertising. That is the new asymmetry. The institutions that build for it now will be the references for the next decade.
08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_INFRA: StrategySection = {
  id: 'infra',
  num: '04',
  title: "What has already been built — and why it matters before anything else is scaled.",
  subtitle: "This strategy is not aspirational. The two pieces of infrastructure that underpin everything else are already live, deployed and demonstrable. What follows is scaling what is already running, not building from scratch.",
  content: `04 ·
Digital Infrastructure
What has already been built — and why it matters before anything else is scaled.
This strategy is not aspirational. The two pieces of infrastructure that underpin everything else are already live, deployed and demonstrable. What follows is scaling what is already running, not building from scratch.
Stack · Circuit Topology
Live System
Cineterns — the placement portal
The frontend runs on
Next.js 14
with the App Router and React Server Components, delivering fast, SEO-friendly server-rendered pages.
Tailwind CSS
handles utility-first responsive styling. Deployment is via
Vercel
on edge functions, giving globally distributed sub-100ms response times — which means a Netflix production executive opening the portal from London experiences the same speed as one in Johannesburg.
The data layer is
Supabase
— a Postgres-based backend handling trainee profile storage, production-company accounts, placement records, real-time availability statuses, and role-based access control.
Supabase Auth
provides secure user authentication. Supabase real-time means a production manager sees a trainee's availability change the moment it happens, with no refresh required.
Sitting in front of all of this is
Cloudflare
— DNS management, CDN caching, bot protection and a Web Application Firewall — which places the Academy's data infrastructure at enterprise security standards appropriate for handling personal trainee data under POPIA.
The agentic AI layer is provisioned through the
Anthropic Claude API
(with OpenAI as a redundant fallback) — enabling automated trainee profile enrichment, production-brief matching and communication drafting. The agent reads a production brief, scores registered trainees against the role requirements, and produces a ranked shortlist with draft introductory messages, all without human intervention. As Cineterns scales to hundreds of trainees and dozens of simultaneous productions, quality placements remain consistent without proportional growth in staff headcount.
Interactive Prototype
The presentation engine
Alongside the placement portal sits an immersive, interactive web-based pitch experience — built to be used when engaging production companies, potential partners and institutional funders. It simulates the look and feel of the full SAFA digital ecosystem, giving stakeholders an
80% functional preview
of what the portal and marketing infrastructure will look like when complete.
The principle is straightforward: when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap. Strategy stops being asked to be imagined — it can be interacted with.
Technically, the prototype uses the identical
Next.js · Vercel · Cloudflare · Supabase
stack as Cineterns. This consistency means zero architectural rework: the transition from prototype to live product is a matter of content population and user onboarding, not rebuilding. The prototype is therefore a marketing asset as much as a technical one.
That construction principle — the prototype that
is
the production system, eight-tenths complete — is the single clearest evidence that this strategy is execution-ready, not a slide deck.
Why the technical choices matter commercially
Choice
Commercial translation
Vercel global edge
The portal loads as fast for an international production executive in London as it does for a placement coordinator in Johannesburg. Speed is now a credibility signal.
Supabase real-time
Trainee availability and placement statuses update instantly across all dashboards, ending the long email chains that currently lose deals.
Cloudflare boundary
Enterprise-grade security and POPIA-appropriate handling of personal data — a precondition for any institutional partner serious about compliance.
Claude API matching
Placements scale without scaling the team. The cost of one placement and the cost of one hundred placements per month becomes roughly equivalent.
Production-grade build discipline
Every digital deliverable produced by this partnership inherits the same architectural rigour applied to live production systems — no prototypes pretending to be products.
05 ·
The 12-Month Marketing Calendar
June 2026 to May 2027 — four quarters, four phases, every milestone visible.
Foundation and unification first. Visibility and commercial traction second. Authority and funding third. Scale and self-sustainability last.
Timeline · 12 Months
Quarter 1 · Jun–Aug 2026
Foundation, Unification & Launch
Architecture, alignment, and the first visible signal that the new chapter has begun.
Strategy formally adopted and the implementation rhythm established with the executive team.
Brand audit across all five entities — SAFA, GreenSet, FilmGro, ACE, Cineterns — to establish a unified visual language and messaging hierarchy.
Launch of the GreenSet co-brand integration campaign across the SAFA website and every social channel.
Formal SEO baseline audit on safilmacademy.org and the Cineterns portal.
Social media account consolidation and profile optimisation across LinkedIn, Instagram and Facebook.
Cineterns open beta with the first cohort of registered trainees and invited production companies.
FILMGRO Gauteng expansion: activate the Suzuki conversation and identify a driving training partner.
First two agentic blog posts published.
The Chief Executive's LinkedIn presence strategy activated as the institutional voice channel.
Quarter 2 · Sep–Nov 2026
Growth, Visibility & Commercial Traction
From quiet authority to commercial signal — the brand starts converting attention into income.
GreenSet–Netflix case study published as a flagship piece of thought-leadership content.
B-BBEE Skills Levy awareness campaign targeting SPV production accountants and legal compliance teams — digital advertisements, LinkedIn outreach, and a free downloadable
Skills Levy Guide for Film Productions
lead magnet.
Cineterns public launch with the first ten confirmed production-company accounts.
FILMGRO Gauteng launch event (conditional on the Suzuki vehicle commitment being secured).
ACE alumni case-study series — profile the NFVF-funded short film
Ini
and other HOD-track graduates.
Paid LinkedIn campaign targeting international production companies serviced from South Africa.
AI training masterclass module announced and pre-registration opened.
Quarter 3 · Dec 2026 – Feb 2027
Authority, Thought Leadership & Funding
The Academy becomes the entity quoted, cited, and approached — not the one applying.
Agentic funding application pipeline operating weekly — NFVF, DTI, DSAC, and private foundations.
Annual impact report published digitally and distributed to all production-company partners and SETA contacts.
One major industry speaking engagement secured for the Academy's Chief Executive.
GreenSet blog series: five posts on sustainable production practices in South Africa, co-authored with GreenSet practitioners.
AI-in-film masterclass content completed and curriculum published.
Second cohort of ACE alumni profiled in the
From Intern to HOD
editorial series.
Quarter 4 · Mar–May 2027
Scale, Self-Sustainability & Renewal
The infrastructure pays for itself. The strategy renews for year two with a stronger position than it started.
Cineterns commercial launch — the full pricing model active for production-company subscriptions.
The self-sustainability case is modelled publicly: SAFA publishes a
Path to Self-Sustainability
article showing how the ecosystem funds itself through Skills Levy administration fees, Cineterns subscriptions, and GreenSet contracts.
All production-company SLAs reviewed and renewed with an upsell to bundled Cineterns access.
The twelve-month strategy review is initiated and a second-year blueprint is drafted.
06 ·
Agentic AI Marketing Engine
Not an aspiration. A set of concrete, running, weekly automated workflows.
Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage.
Agents · Orbital System
The agentic engine is the centrepiece of this strategy because it is the answer to the question every small non-profit eventually has to face:
how do you scale without growing the team?
The five agents described below are concrete, technically grounded, and built on the same Claude API infrastructure already provisioned in Cineterns. None of them is theoretical. All of them are scheduled to run on weekly or daily cycles from the first month of implementation.
The strategic logic is simple. The Academy's team is small. The industry is, in honest assessment,
in a very distressed situation
. The Academy cannot manually do everything that needs to be done — but it can supervise a set of agents that perform the time-intensive groundwork on its behalf, surfacing only the work that requires human judgement. That is the leverage point on which the entire commercial argument rests.
Agent 01 · Weekly
Funding Applications Agent
Every Monday morning, without human initiation, this autonomous pipeline performs a complete cycle. It monitors the NFVF, DTI, DSAC, Creative SA and key private foundation grant calendars via web tool calls. It matches each open funding opportunity against SAFA's pre-loaded eligibility profile — NPC status, MICT SETA accreditation, twenty-year track record, impact statistics. It drafts a tailored funding application narrative drawing from the Academy's stored statistics and programme descriptions. It then delivers a reviewed, ready-to-submit draft to the executive team's inbox for approval.
This directly addresses the industry's financial pressure. The Academy will no longer miss funding opportunities for the simple reason that no one had time to write the application that week. The agent does the application. The executive reviews and submits.
Agent 02 · Twice Weekly
Automated Blog & Thought Leadership Pipeline
An agentic content workflow producing two SEO-optimised long-form articles per week. The agent is briefed on five content pillars: skills development legislation and B-BBEE compliance for the film industry; the AI revolution in post-production (studios are already recruiting for Veo, Kling, Hailuo and other generative AI tools — the shift is no longer theoretical but present-tense); sustainable production and GreenSet services; career-path development stories from ACE alumni; and South African film industry news and commentary.
Each post is optimised for both traditional Google search and AI search engines (Perplexity, ChatGPT Browse, Google AI Overviews). The agent selects the topic, drafts the article, generates meta title and description, suggests internal links, and queues the result for editorial review before publication.
Agent 03 · Daily
Social Media Automation Agent
A scheduling and publishing workflow across four channels with distinct purposes.
LinkedIn
is the primary channel for production companies, B-BBEE procurement decision-makers and industry professionals.
Instagram
is the primary channel for the trainee community, the youth audience and visual storytelling.
Facebook
serves alumni engagement and CSI visibility for FILMGRO and GreenSet.
X (formerly Twitter)
handles real-time industry commentary and news.
The agent repurposes blog content into platform-native posts, generates placement-announcement posts when Cineterns records a successful match, creates FILMGRO milestone posts when a licence is issued, and maintains a consistent cadence of five posts per week per platform — without manual scheduling effort.
Agent 04 · Embedded
Trainee–Production Matching Agent
The core agentic workflow embedded inside the Cineterns portal itself. When a production company submits a brief specifying required roles, dates, location and tier level, the agent scores all registered trainees against the brief using a weighted matching algorithm — experience tier, department, location, availability and portfolio quality. It produces a ranked shortlist of the top five candidates per role, drafts a personalised introductory communication for each, and notifies the production company and the shortlisted trainees simultaneously.
The production company selects, the system records the placement, and the trainee's career tier automatically advances. This replaces the entirely manual
Cindy sends the link
process and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
Agent 05 · Weekly
Perception Management & Reputation Monitoring Agent
A lightweight listening agent that monitors LinkedIn, Google and industry news for mentions of SA Film Academy, GreenSet, the Chief Executive and a curated list of relevant keywords. It surfaces reputation signals on a weekly cadence — new connection requests (the Chief Executive's professional channels have logged more than 500 new requests over the past year as a positive signal), industry commentary, and any negative perception indicators that may need a measured response. It suggests response actions, with the human always retaining final say.
Target funders monitored by Agent 01
Funder
Type
Indicative cycle
SAFA fit
National Film and Video Foundation (NFVF)
Government
Quarterly grant cycles
Direct — alumni production funding, ACE programme alignment
Department of Trade, Industry & Competition (DTIC)
Government
Annual, project-linked
Indirect — Film & TV Production Rebate adjacency
Department of Sport, Arts and Culture (DSAC)
Government
Annual programmes
Direct — skills development and youth empowerment
MICT SETA Discretionary Grants
SETA
Annual
Direct — Skills Programme funding, alignment with accreditation
Creative SA
Industry body
Rolling
Direct — creative sector skills initiatives
Private foundations (Ford, Open Society, etc.)
Private
Variable
Indirect — transformation and youth pipeline funding
International production studio CSI funds
Corporate
Project-linked
Direct — productions filming in South Africa
07 ·
SEO & AI SEO Strategy
Found by search engines today. Found by AI engines tomorrow. Both, deliberately.
Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.
Traditional SEO
The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using
Organization
,
EducationalOrganization
,
Course
,
JobPosting
and
Event
schema types. Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
The keyword strategy targets a defined set of primary terms:
film production internship South Africa
,
MICT SETA accredited film training
,
B-BBEE skills levy film production
,
sustainable film production South Africa
,
film trainee placement Cape Town Johannesburg
,
NFVF funding application support
,
green set sustainability film
. Each of these is a search query someone with budget authority is plausibly typing into Google this week. The Academy needs to be the first answer.
Content cluster strategy: each pillar page targets a primary keyword and is surrounded by supporting blog posts forming a topical cluster — the structural arrangement Google now rewards. Backlink strategy targets industry associations, SETA-linked education directories and production-company partner pages — the inbound links that signal authority within the South African film training space specifically.
Search · Topic Cluster
AI SEO — Generative Engine Optimisation
An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it. The Academy needs to be the entity that appears
inside
those answers — not the entity that ranks tenth on a page no one reads.
SAFA needs to be the body cited when a production accountant in London asks Perplexity
"how do film production companies in South Africa manage B-BBEE compliance?"
— and the body cited when an aspiring trainee asks ChatGPT
"who provides film intern placement in South Africa?"
. The strategy for this involves a deliberate set of moves: structuring all web content with clear factual claims, cited statistics and named authorities (the Academy's Chief Executive appears in machine-readable form as a subject-matter expert on every relevant page); publishing comprehensive FAQ pages that directly mirror the phrasing of conversational queries; ensuring entity disambiguation so that
SA Film Academy
is unambiguously connected to MICT SETA, to GreenSet, to FILMGRO, to Cineterns, and to its institutional leadership in the semantic web; and building Wikipedia-calibre authority through citations, press mentions and structured data over the twelve-month horizon.
The compounding effect of these moves is that within six to nine months, a meaningful share of cold inbound enquiries will originate from AI-generated answers — not from organic search, not from paid advertising. That is the new asymmetry. The institutions that build for it now will be the references for the next decade.
08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_CALENDAR: StrategySection = {
  id: 'calendar',
  num: '05',
  title: "June 2026 to May 2027 — four quarters, four phases, every milestone visible.",
  subtitle: "Foundation and unification first. Visibility and commercial traction second. Authority and funding third. Scale and self-sustainability last.",
  content: `05 ·
The 12-Month Marketing Calendar
June 2026 to May 2027 — four quarters, four phases, every milestone visible.
Foundation and unification first. Visibility and commercial traction second. Authority and funding third. Scale and self-sustainability last.
Timeline · 12 Months
Quarter 1 · Jun–Aug 2026
Foundation, Unification & Launch
Architecture, alignment, and the first visible signal that the new chapter has begun.
Strategy formally adopted and the implementation rhythm established with the executive team.
Brand audit across all five entities — SAFA, GreenSet, FilmGro, ACE, Cineterns — to establish a unified visual language and messaging hierarchy.
Launch of the GreenSet co-brand integration campaign across the SAFA website and every social channel.
Formal SEO baseline audit on safilmacademy.org and the Cineterns portal.
Social media account consolidation and profile optimisation across LinkedIn, Instagram and Facebook.
Cineterns open beta with the first cohort of registered trainees and invited production companies.
FILMGRO Gauteng expansion: activate the Suzuki conversation and identify a driving training partner.
First two agentic blog posts published.
The Chief Executive's LinkedIn presence strategy activated as the institutional voice channel.
Quarter 2 · Sep–Nov 2026
Growth, Visibility & Commercial Traction
From quiet authority to commercial signal — the brand starts converting attention into income.
GreenSet–Netflix case study published as a flagship piece of thought-leadership content.
B-BBEE Skills Levy awareness campaign targeting SPV production accountants and legal compliance teams — digital advertisements, LinkedIn outreach, and a free downloadable
Skills Levy Guide for Film Productions
lead magnet.
Cineterns public launch with the first ten confirmed production-company accounts.
FILMGRO Gauteng launch event (conditional on the Suzuki vehicle commitment being secured).
ACE alumni case-study series — profile the NFVF-funded short film
Ini
and other HOD-track graduates.
Paid LinkedIn campaign targeting international production companies serviced from South Africa.
AI training masterclass module announced and pre-registration opened.
Quarter 3 · Dec 2026 – Feb 2027
Authority, Thought Leadership & Funding
The Academy becomes the entity quoted, cited, and approached — not the one applying.
Agentic funding application pipeline operating weekly — NFVF, DTI, DSAC, and private foundations.
Annual impact report published digitally and distributed to all production-company partners and SETA contacts.
One major industry speaking engagement secured for the Academy's Chief Executive.
GreenSet blog series: five posts on sustainable production practices in South Africa, co-authored with GreenSet practitioners.
AI-in-film masterclass content completed and curriculum published.
Second cohort of ACE alumni profiled in the
From Intern to HOD
editorial series.
Quarter 4 · Mar–May 2027
Scale, Self-Sustainability & Renewal
The infrastructure pays for itself. The strategy renews for year two with a stronger position than it started.
Cineterns commercial launch — the full pricing model active for production-company subscriptions.
The self-sustainability case is modelled publicly: SAFA publishes a
Path to Self-Sustainability
article showing how the ecosystem funds itself through Skills Levy administration fees, Cineterns subscriptions, and GreenSet contracts.
All production-company SLAs reviewed and renewed with an upsell to bundled Cineterns access.
The twelve-month strategy review is initiated and a second-year blueprint is drafted.
06 ·
Agentic AI Marketing Engine
Not an aspiration. A set of concrete, running, weekly automated workflows.
Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage.
Agents · Orbital System
The agentic engine is the centrepiece of this strategy because it is the answer to the question every small non-profit eventually has to face:
how do you scale without growing the team?
The five agents described below are concrete, technically grounded, and built on the same Claude API infrastructure already provisioned in Cineterns. None of them is theoretical. All of them are scheduled to run on weekly or daily cycles from the first month of implementation.
The strategic logic is simple. The Academy's team is small. The industry is, in honest assessment,
in a very distressed situation
. The Academy cannot manually do everything that needs to be done — but it can supervise a set of agents that perform the time-intensive groundwork on its behalf, surfacing only the work that requires human judgement. That is the leverage point on which the entire commercial argument rests.
Agent 01 · Weekly
Funding Applications Agent
Every Monday morning, without human initiation, this autonomous pipeline performs a complete cycle. It monitors the NFVF, DTI, DSAC, Creative SA and key private foundation grant calendars via web tool calls. It matches each open funding opportunity against SAFA's pre-loaded eligibility profile — NPC status, MICT SETA accreditation, twenty-year track record, impact statistics. It drafts a tailored funding application narrative drawing from the Academy's stored statistics and programme descriptions. It then delivers a reviewed, ready-to-submit draft to the executive team's inbox for approval.
This directly addresses the industry's financial pressure. The Academy will no longer miss funding opportunities for the simple reason that no one had time to write the application that week. The agent does the application. The executive reviews and submits.
Agent 02 · Twice Weekly
Automated Blog & Thought Leadership Pipeline
An agentic content workflow producing two SEO-optimised long-form articles per week. The agent is briefed on five content pillars: skills development legislation and B-BBEE compliance for the film industry; the AI revolution in post-production (studios are already recruiting for Veo, Kling, Hailuo and other generative AI tools — the shift is no longer theoretical but present-tense); sustainable production and GreenSet services; career-path development stories from ACE alumni; and South African film industry news and commentary.
Each post is optimised for both traditional Google search and AI search engines (Perplexity, ChatGPT Browse, Google AI Overviews). The agent selects the topic, drafts the article, generates meta title and description, suggests internal links, and queues the result for editorial review before publication.
Agent 03 · Daily
Social Media Automation Agent
A scheduling and publishing workflow across four channels with distinct purposes.
LinkedIn
is the primary channel for production companies, B-BBEE procurement decision-makers and industry professionals.
Instagram
is the primary channel for the trainee community, the youth audience and visual storytelling.
Facebook
serves alumni engagement and CSI visibility for FILMGRO and GreenSet.
X (formerly Twitter)
handles real-time industry commentary and news.
The agent repurposes blog content into platform-native posts, generates placement-announcement posts when Cineterns records a successful match, creates FILMGRO milestone posts when a licence is issued, and maintains a consistent cadence of five posts per week per platform — without manual scheduling effort.
Agent 04 · Embedded
Trainee–Production Matching Agent
The core agentic workflow embedded inside the Cineterns portal itself. When a production company submits a brief specifying required roles, dates, location and tier level, the agent scores all registered trainees against the brief using a weighted matching algorithm — experience tier, department, location, availability and portfolio quality. It produces a ranked shortlist of the top five candidates per role, drafts a personalised introductory communication for each, and notifies the production company and the shortlisted trainees simultaneously.
The production company selects, the system records the placement, and the trainee's career tier automatically advances. This replaces the entirely manual
Cindy sends the link
process and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
Agent 05 · Weekly
Perception Management & Reputation Monitoring Agent
A lightweight listening agent that monitors LinkedIn, Google and industry news for mentions of SA Film Academy, GreenSet, the Chief Executive and a curated list of relevant keywords. It surfaces reputation signals on a weekly cadence — new connection requests (the Chief Executive's professional channels have logged more than 500 new requests over the past year as a positive signal), industry commentary, and any negative perception indicators that may need a measured response. It suggests response actions, with the human always retaining final say.
Target funders monitored by Agent 01
Funder
Type
Indicative cycle
SAFA fit
National Film and Video Foundation (NFVF)
Government
Quarterly grant cycles
Direct — alumni production funding, ACE programme alignment
Department of Trade, Industry & Competition (DTIC)
Government
Annual, project-linked
Indirect — Film & TV Production Rebate adjacency
Department of Sport, Arts and Culture (DSAC)
Government
Annual programmes
Direct — skills development and youth empowerment
MICT SETA Discretionary Grants
SETA
Annual
Direct — Skills Programme funding, alignment with accreditation
Creative SA
Industry body
Rolling
Direct — creative sector skills initiatives
Private foundations (Ford, Open Society, etc.)
Private
Variable
Indirect — transformation and youth pipeline funding
International production studio CSI funds
Corporate
Project-linked
Direct — productions filming in South Africa
07 ·
SEO & AI SEO Strategy
Found by search engines today. Found by AI engines tomorrow. Both, deliberately.
Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.
Traditional SEO
The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using
Organization
,
EducationalOrganization
,
Course
,
JobPosting
and
Event
schema types. Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
The keyword strategy targets a defined set of primary terms:
film production internship South Africa
,
MICT SETA accredited film training
,
B-BBEE skills levy film production
,
sustainable film production South Africa
,
film trainee placement Cape Town Johannesburg
,
NFVF funding application support
,
green set sustainability film
. Each of these is a search query someone with budget authority is plausibly typing into Google this week. The Academy needs to be the first answer.
Content cluster strategy: each pillar page targets a primary keyword and is surrounded by supporting blog posts forming a topical cluster — the structural arrangement Google now rewards. Backlink strategy targets industry associations, SETA-linked education directories and production-company partner pages — the inbound links that signal authority within the South African film training space specifically.
Search · Topic Cluster
AI SEO — Generative Engine Optimisation
An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it. The Academy needs to be the entity that appears
inside
those answers — not the entity that ranks tenth on a page no one reads.
SAFA needs to be the body cited when a production accountant in London asks Perplexity
"how do film production companies in South Africa manage B-BBEE compliance?"
— and the body cited when an aspiring trainee asks ChatGPT
"who provides film intern placement in South Africa?"
. The strategy for this involves a deliberate set of moves: structuring all web content with clear factual claims, cited statistics and named authorities (the Academy's Chief Executive appears in machine-readable form as a subject-matter expert on every relevant page); publishing comprehensive FAQ pages that directly mirror the phrasing of conversational queries; ensuring entity disambiguation so that
SA Film Academy
is unambiguously connected to MICT SETA, to GreenSet, to FILMGRO, to Cineterns, and to its institutional leadership in the semantic web; and building Wikipedia-calibre authority through citations, press mentions and structured data over the twelve-month horizon.
The compounding effect of these moves is that within six to nine months, a meaningful share of cold inbound enquiries will originate from AI-generated answers — not from organic search, not from paid advertising. That is the new asymmetry. The institutions that build for it now will be the references for the next decade.
08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_AI: StrategySection = {
  id: 'ai',
  num: '06',
  title: "Not an aspiration. A set of concrete, running, weekly automated workflows.",
  subtitle: "Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage.",
  content: `06 ·
Agentic AI Marketing Engine
Not an aspiration. A set of concrete, running, weekly automated workflows.
Five autonomous agents that operate without human initiation — turning the Academy's capacity constraint into its largest competitive advantage.
Agents · Orbital System
The agentic engine is the centrepiece of this strategy because it is the answer to the question every small non-profit eventually has to face:
how do you scale without growing the team?
The five agents described below are concrete, technically grounded, and built on the same Claude API infrastructure already provisioned in Cineterns. None of them is theoretical. All of them are scheduled to run on weekly or daily cycles from the first month of implementation.
The strategic logic is simple. The Academy's team is small. The industry is, in honest assessment,
in a very distressed situation
. The Academy cannot manually do everything that needs to be done — but it can supervise a set of agents that perform the time-intensive groundwork on its behalf, surfacing only the work that requires human judgement. That is the leverage point on which the entire commercial argument rests.
Agent 01 · Weekly
Funding Applications Agent
Every Monday morning, without human initiation, this autonomous pipeline performs a complete cycle. It monitors the NFVF, DTI, DSAC, Creative SA and key private foundation grant calendars via web tool calls. It matches each open funding opportunity against SAFA's pre-loaded eligibility profile — NPC status, MICT SETA accreditation, twenty-year track record, impact statistics. It drafts a tailored funding application narrative drawing from the Academy's stored statistics and programme descriptions. It then delivers a reviewed, ready-to-submit draft to the executive team's inbox for approval.
This directly addresses the industry's financial pressure. The Academy will no longer miss funding opportunities for the simple reason that no one had time to write the application that week. The agent does the application. The executive reviews and submits.
Agent 02 · Twice Weekly
Automated Blog & Thought Leadership Pipeline
An agentic content workflow producing two SEO-optimised long-form articles per week. The agent is briefed on five content pillars: skills development legislation and B-BBEE compliance for the film industry; the AI revolution in post-production (studios are already recruiting for Veo, Kling, Hailuo and other generative AI tools — the shift is no longer theoretical but present-tense); sustainable production and GreenSet services; career-path development stories from ACE alumni; and South African film industry news and commentary.
Each post is optimised for both traditional Google search and AI search engines (Perplexity, ChatGPT Browse, Google AI Overviews). The agent selects the topic, drafts the article, generates meta title and description, suggests internal links, and queues the result for editorial review before publication.
Agent 03 · Daily
Social Media Automation Agent
A scheduling and publishing workflow across four channels with distinct purposes.
LinkedIn
is the primary channel for production companies, B-BBEE procurement decision-makers and industry professionals.
Instagram
is the primary channel for the trainee community, the youth audience and visual storytelling.
Facebook
serves alumni engagement and CSI visibility for FILMGRO and GreenSet.
X (formerly Twitter)
handles real-time industry commentary and news.
The agent repurposes blog content into platform-native posts, generates placement-announcement posts when Cineterns records a successful match, creates FILMGRO milestone posts when a licence is issued, and maintains a consistent cadence of five posts per week per platform — without manual scheduling effort.
Agent 04 · Embedded
Trainee–Production Matching Agent
The core agentic workflow embedded inside the Cineterns portal itself. When a production company submits a brief specifying required roles, dates, location and tier level, the agent scores all registered trainees against the brief using a weighted matching algorithm — experience tier, department, location, availability and portfolio quality. It produces a ranked shortlist of the top five candidates per role, drafts a personalised introductory communication for each, and notifies the production company and the shortlisted trainees simultaneously.
The production company selects, the system records the placement, and the trainee's career tier automatically advances. This replaces the entirely manual
Cindy sends the link
process and is the direct, technical answer to the trainee-tracking gap raised in the meeting.
Agent 05 · Weekly
Perception Management & Reputation Monitoring Agent
A lightweight listening agent that monitors LinkedIn, Google and industry news for mentions of SA Film Academy, GreenSet, the Chief Executive and a curated list of relevant keywords. It surfaces reputation signals on a weekly cadence — new connection requests (the Chief Executive's professional channels have logged more than 500 new requests over the past year as a positive signal), industry commentary, and any negative perception indicators that may need a measured response. It suggests response actions, with the human always retaining final say.
Target funders monitored by Agent 01
Funder
Type
Indicative cycle
SAFA fit
National Film and Video Foundation (NFVF)
Government
Quarterly grant cycles
Direct — alumni production funding, ACE programme alignment
Department of Trade, Industry & Competition (DTIC)
Government
Annual, project-linked
Indirect — Film & TV Production Rebate adjacency
Department of Sport, Arts and Culture (DSAC)
Government
Annual programmes
Direct — skills development and youth empowerment
MICT SETA Discretionary Grants
SETA
Annual
Direct — Skills Programme funding, alignment with accreditation
Creative SA
Industry body
Rolling
Direct — creative sector skills initiatives
Private foundations (Ford, Open Society, etc.)
Private
Variable
Indirect — transformation and youth pipeline funding
International production studio CSI funds
Corporate
Project-linked
Direct — productions filming in South Africa
07 ·
SEO & AI SEO Strategy
Found by search engines today. Found by AI engines tomorrow. Both, deliberately.
Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.
Traditional SEO
The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using
Organization
,
EducationalOrganization
,
Course
,
JobPosting
and
Event
schema types. Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
The keyword strategy targets a defined set of primary terms:
film production internship South Africa
,
MICT SETA accredited film training
,
B-BBEE skills levy film production
,
sustainable film production South Africa
,
film trainee placement Cape Town Johannesburg
,
NFVF funding application support
,
green set sustainability film
. Each of these is a search query someone with budget authority is plausibly typing into Google this week. The Academy needs to be the first answer.
Content cluster strategy: each pillar page targets a primary keyword and is surrounded by supporting blog posts forming a topical cluster — the structural arrangement Google now rewards. Backlink strategy targets industry associations, SETA-linked education directories and production-company partner pages — the inbound links that signal authority within the South African film training space specifically.
Search · Topic Cluster
AI SEO — Generative Engine Optimisation
An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it. The Academy needs to be the entity that appears
inside
those answers — not the entity that ranks tenth on a page no one reads.
SAFA needs to be the body cited when a production accountant in London asks Perplexity
"how do film production companies in South Africa manage B-BBEE compliance?"
— and the body cited when an aspiring trainee asks ChatGPT
"who provides film intern placement in South Africa?"
. The strategy for this involves a deliberate set of moves: structuring all web content with clear factual claims, cited statistics and named authorities (the Academy's Chief Executive appears in machine-readable form as a subject-matter expert on every relevant page); publishing comprehensive FAQ pages that directly mirror the phrasing of conversational queries; ensuring entity disambiguation so that
SA Film Academy
is unambiguously connected to MICT SETA, to GreenSet, to FILMGRO, to Cineterns, and to its institutional leadership in the semantic web; and building Wikipedia-calibre authority through citations, press mentions and structured data over the twelve-month horizon.
The compounding effect of these moves is that within six to nine months, a meaningful share of cold inbound enquiries will originate from AI-generated answers — not from organic search, not from paid advertising. That is the new asymmetry. The institutions that build for it now will be the references for the next decade.
08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_SEO: StrategySection = {
  id: 'seo',
  num: '07',
  title: "Found by search engines today. Found by AI engines tomorrow. Both, deliberately.",
  subtitle: "Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.",
  content: `07 ·
SEO & AI SEO Strategy
Found by search engines today. Found by AI engines tomorrow. Both, deliberately.
Traditional SEO and Generative Engine Optimisation (AI SEO) are no longer alternatives. They are two halves of the same discovery surface.
Traditional SEO
The technical health audit covers Core Web Vitals improvement, canonical tag implementation, sitemap submission, and structured data markup using
Organization
,
EducationalOrganization
,
Course
,
JobPosting
and
Event
schema types. Every page on safilmacademy.org will be re-indexed with the appropriate schema, making the Academy machine-readable to every search engine in a way it currently is not.
The keyword strategy targets a defined set of primary terms:
film production internship South Africa
,
MICT SETA accredited film training
,
B-BBEE skills levy film production
,
sustainable film production South Africa
,
film trainee placement Cape Town Johannesburg
,
NFVF funding application support
,
green set sustainability film
. Each of these is a search query someone with budget authority is plausibly typing into Google this week. The Academy needs to be the first answer.
Content cluster strategy: each pillar page targets a primary keyword and is surrounded by supporting blog posts forming a topical cluster — the structural arrangement Google now rewards. Backlink strategy targets industry associations, SETA-linked education directories and production-company partner pages — the inbound links that signal authority within the South African film training space specifically.
Search · Topic Cluster
AI SEO — Generative Engine Optimisation
An increasing proportion of professional searches now begin not in Google but in tools like Perplexity, ChatGPT and Google's AI Overviews. The user does not click through ten blue links. They read the AI's answer, and they trust it. The Academy needs to be the entity that appears
inside
those answers — not the entity that ranks tenth on a page no one reads.
SAFA needs to be the body cited when a production accountant in London asks Perplexity
"how do film production companies in South Africa manage B-BBEE compliance?"
— and the body cited when an aspiring trainee asks ChatGPT
"who provides film intern placement in South Africa?"
. The strategy for this involves a deliberate set of moves: structuring all web content with clear factual claims, cited statistics and named authorities (the Academy's Chief Executive appears in machine-readable form as a subject-matter expert on every relevant page); publishing comprehensive FAQ pages that directly mirror the phrasing of conversational queries; ensuring entity disambiguation so that
SA Film Academy
is unambiguously connected to MICT SETA, to GreenSet, to FILMGRO, to Cineterns, and to its institutional leadership in the semantic web; and building Wikipedia-calibre authority through citations, press mentions and structured data over the twelve-month horizon.
The compounding effect of these moves is that within six to nine months, a meaningful share of cold inbound enquiries will originate from AI-generated answers — not from organic search, not from paid advertising. That is the new asymmetry. The institutions that build for it now will be the references for the next decade.
08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_BRAND: StrategySection = {
  id: 'brand',
  num: '08',
  title: "Five entities currently read as five strangers. They will read as one family.",
  subtitle: "A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.",
  content: `08 ·
Brand Architecture & Identity
Five entities currently read as five strangers. They will read as one family.
A branded house model — SAFA as the master, the four programmes carrying a visible, deliberate relationship to it across every surface they appear on.
Family · Overlap
The brand fragmentation problem is the central diagnostic. Five entities — SAFA, ACE, FILMGRO, GreenSet, Cineterns — exist independently but do not read as a coherent family. Each lives on its own URL with its own visual approach. A first-time visitor cannot tell what belongs to what, and a sophisticated visitor (a Netflix sustainability lead, an SPV production accountant) cannot quickly see that they are dealing with a single, accredited, twenty-year institution.
The proposed architecture is a
branded house
: SA Film Academy is the master brand, and each subsidiary — ACE, FILMGRO, GreenSet, Cineterns — carries a deliberate visual and verbal relationship to it. That relationship is expressed through a shared typographic system, a shared colour palette anchored on red and gold, a shared editorial voice, and a shared photographic identity. Each entity retains its own personality (GreenSet's environmental signal, FILMGRO's automotive directness, ACE's editorial gravitas, Cineterns' digital precision) — but each is unmistakably a member of the same family.
The brand voice is
authoritative but accessible, proudly South African, industry-insider without being exclusionary, data-driven without being corporate
. The existing tagline —
Where Industry Meets Opportunity
— is strong, but it could be sharpened for the digital era; a tagline evolution will be explored in the Q1 brand audit.
The photographic and visual identity moves away from stock imagery toward authentic documentary-style photography of real SAFA trainees on real productions. The high-profile titles already in the Academy's portfolio —
Devil's Peak
,
Warrior
,
The Woman King
,
One Piece
,
Wheel of Time
,
Average Joe
— are the power-brand leverage at the heart of every conversation: the moment
The Woman King
appears on a slide, the credibility argument is essentially won. That leverage must be built into every piece of marketing collateral, every social asset, every pitch deck, every funder application.
Brand voice principles — applied across every channel
Voice 01
Authoritative but accessible
The Academy speaks as the body that has placed trainees on
The Woman King
— without ever sounding like it is reading from a brochure.
Voice 02
Proudly South African
Local idiom, local context, local production names. International credibility is earned by being unmistakably South African, not generic.
Voice 03
Insider without exclusion
Industry-fluent without speaking only to insiders. Every page is comprehensible to a first-time visitor and useful to a seasoned producer.
Voice 04
Data-driven, not corporate
Statistics earn the right to be quoted. The Academy never lapses into the airless language of an annual report when the lived story is far stronger.
09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_LEADER: StrategySection = {
  id: 'leader',
  num: '09',
  title: "The Chief Executive as the most powerful marketing instrument the Academy has.",
  subtitle: "Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.",
  content: `09 ·
Institutional Voice & Executive Visibility
The Chief Executive as the most powerful marketing instrument the Academy has.
Institutions are not abstract. They have faces, they have voices, and the voice of the person leading the Academy carries weight no logo or campaign ever will. The strategy operationalises that weight deliberately.
The single highest-leverage marketing asset SA Film Academy holds is the public visibility of the institution's Chief Executive. That is not a sentimental observation; it is a structural one. In a transformation-defined industry where credibility, lived experience, and authentic leadership determine which institutions are taken seriously by funders, by partners, and by international productions, the Academy's leadership is itself a brand instrument. The South African film industry is currently seeing SA Film Academy led by a Black female executive with deep credentials and a measurable record of changing the industry's perception of the institution she now runs. That perception shift has already begun. Over the past year, more than
500 new professional connection requests
have arrived through the Chief Executive's channels alone, with industry colleagues remarking — in keeping with the broader signal of the period —
"Oh, are you at SA Film Academy now? Great. Great."
The strategy now leverages that shift, deliberately and at pace.
The LinkedIn content strategy operates on a defined cadence and a defined typology. The cadence is three to four posts per week — a mix of original commentary, repost-with-context, and considered long-form thought pieces once or twice a month. The content types are four:
industry commentary
on news affecting the SETA, B-BBEE legislation, NFVF programmes and the broader production economy;
behind-the-scenes
of SAFA placements (with permission, respecting production confidentiality);
institutional reflections
on transformation, leadership, and the realities of running a non-profit in a financially distressed sector; and
alumni championing
— the Chief Executive as the public voice that celebrates the Heads of Department, the independent producers, and the international placements emerging from SAFA's pipeline.
The speaking engagement pipeline targets a deliberate list: MICT SETA events, NFVF industry days, Creative SA forums, youth-leadership platforms, and selected international screen-industry conferences (the African Film Market, Durban International Film Festival, the Sustainable Production Forum). The media relations strategy targets op-ed placements in
Screen Africa
, the
Mail & Guardian
arts section,
Destiny Business Magazine
for institutional leadership profile work, and selected international trade publications covering African screen industry development.
The framing across every appearance is consistent: a transformed institution under transformed leadership has, in twelve months, measurably shifted the perception of a twenty-year-old Academy and is now scaling its impact through digital infrastructure and an integrated marketing engine. That is the public-facing narrative. It is true, it is current, and it is precisely the kind of story funders, partners and journalists are actively looking for.
Reach · Signal
Executive visibility calendar — first 90 days
Window
Activation
Target signal
Days 1–30
LinkedIn profile optimisation; banner refresh; pinned post launching the strategy; first three weekly commentary posts
Signal of repositioning — visible to the existing 500+ connections
Days 31–60
First long-form essay published; outreach to Screen Africa editor; one industry podcast appearance secured
Press & podcast pickup — extending reach beyond the LinkedIn perimeter
Days 61–90
First speaking engagement confirmed; ACE alumni championing post series live;
Destiny
profile feature submitted
Authority signal — the Academy as the named voice of transformation in South African film training
10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_COMMERCIAL: StrategySection = {
  id: 'commercial',
  num: '10',
  title: "SAFA's single most powerful commercial differentiator, and chronically under-marketed.",
  subtitle: "The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.",
  content: `10 ·
B-BBEE & Skills Levy Commercial Strategy
SAFA's single most powerful commercial differentiator, and chronically under-marketed.
The Skills Levy is a mandatory cost on every payroll above R500,000 a year. SAFA turns it into a strategic B-BBEE asset and a pipeline of skilled local talent. That is a sellable proposition the market is not currently hearing.
Flow · Skills Levy
The core mechanic is established by law and confirmed in the Road Home proposal. Any company with an annual payroll or production budget above
R500,000
is legally required to pay a
1% Skills Levy
to the MICT SETA fund. That same company is then entitled to claim back
20%
of that levy for qualifying skills training — provided the compliance documentation is in order. The documentation is rarely in order, because it is administratively heavy and, as every production accountant working with SPV structures knows,
production companies really don't want to do it.
This is precisely where SAFA's commercial position becomes formidable. SAFA's Skills Development Facilitator prepares and submits all the compliance documentation on the production company's behalf: the
Workplace Skills Plan (WSP)
, the
Annual Training Report (ATR)
, the
Portfolio of Evidence (POE)
, the assessment, the moderation and the certification. The fee for this service is capped at
R350,000
for administration. SAFA additionally recommends that fringe partners set aside
2% from the skills levy fund
to cover both trainee and intern remuneration and the administration fee itself.
The target audience for this proposition is precise and small:
production accountants on SPVs
,
legal and compliance officers at international production service companies
, and
finance directors at broadcasters and studios
. Each of these people is making mandatory levy payments today and is, almost without exception, either failing to claim the rebate or claiming it inefficiently. The campaign aimed at them must speak their language — compliance, audit trail, B-BBEE scorecard, claim cycle, deadline risk — and not the language of training brochures.
The messaging framework positions SAFA as
the compliance partner that turns a mandatory cost into a strategic asset
. The Academy removes the administrative burden, files the documentation, secures the rebate, and simultaneously delivers a pipeline of skilled local trainees who count toward the production's B-BBEE scorecard. The mandatory cost becomes a structured, claimable, scorecard-positive investment. That is the sentence that needs to land in a finance director's inbox.
Audience 01
Production Accountants
Already making the levy payment. Need to be shown the rebate they are currently leaving on the table and the SAFA-administered pathway to claim it.
Audience 02
Legal & Compliance Officers
At international production service companies. The B-BBEE scorecard and DTIC rebate alignment are their concerns. SAFA's documentation discipline is what they are buying.
Audience 03
Finance Directors
At broadcasters and studios. They want the levy converted into a B-BBEE asset and reported clean. SAFA's cap at R350,000 makes the maths obvious.
11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_COMMUNITY: StrategySection = {
  id: 'community',
  num: '11',
  title: "From Perpetual Trainee to Permanent Industry Citizen.",
  subtitle: "The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.",
  content: `11 ·
Community, Alumni & Stakeholder Engagement
From Perpetual Trainee to Permanent Industry Citizen.
The community architecture that dismantles the most damaging perception SAFA has carried for two decades — and replaces it with a tiered, visible, celebrated career pathway.
The most damaging perception SAFA has carried in the industry is a known one, named uncomfortably within the institution itself: that its trainees become
perpetual trainees
— three, four years on placement without ever progressing into recognised crew, Head of Department, or independent producer status. That perception is corrosive. It depresses the value of the SAFA brand to the very production companies who should be its strongest advocates. And it persists, in part, because there has historically been no public, visible structure that tracks what happens to a trainee after their first year.
The community strategy proposed here is the structural answer. It mirrors a four-tier progression modelled on the NFVF category system. Year one is the intern phase, with the SETA-funded stipend and on-the-job placement. Year two is the production trainee phase, with the trainee on the SAFA database and paid by the production company above the stipend. Year three is the senior trainee phase, with elevated responsibility and pay. After year three, the trainee transitions formally into the Academy of Creative Excellence as an alumnus, or into the industry as fully-fledged crew, an HOD-track practitioner, an industry entrepreneur, or a supplier. There is no fourth-year trainee. The tier itself is the marketing.
Around this tiered structure sits the community architecture. A monitored WhatsApp community is segmented by tier so that interns receive intern-relevant messaging and ACE alumni receive alumni-relevant opportunities — preventing the chaotic, single-channel noise that kills engagement. An alumni ambassador programme actively recruits ACE graduates who are now working as Heads of Department or established crew to become public advocates for SAFA — their LinkedIn posts, podcast appearances, and on-set commentary become the most credible marketing the Academy has. Cineterns hosts a mentorship matching system that algorithmically pairs senior alumni with new interns based on department, location and discipline, so that the ladder is not abstract but personal. And once a year, both virtually and physically, the SAFA Showcase event celebrates placement achievements, alumni career milestones, and FilmGro licence graduates as a single connected story.
The short film
"Ini"
— referenced explicitly in the meeting as a recent ACE success — is the prototype for the kind of story this community should amplify at every opportunity. An ACE alumnus, NFVF-supported, producing their own work, returning to the SAFA ecosystem not as a beneficiary but as a contributor. That story, told well and told often, retires the "perpetual trainee" perception permanently.
11.1
Tiered WhatsApp Community
Four segmented groups corresponding to the four tiers. Monitored, not chaotic. Tier-relevant opportunities, tier-relevant news, tier-relevant peer support. Single source of truth for the Academy's community voice.
11.2
Alumni Ambassador Programme
ACE graduates now working as HODs or crew formally appointed as SAFA ambassadors. Quarterly stipend, content quota, speaking obligations. Their credibility becomes SAFA's strongest commercial asset.
11.3
Cineterns Mentorship Matching
Algorithmic pairing of senior alumni with new interns by department, discipline and location. Mentor and mentee both visible inside the portal. The ladder is no longer abstract — it is a name and a face.
11.4
Annual SAFA Showcase
Virtual and physical event each year celebrating placements, alumni HOD milestones, FilmGro licences, and Academy of Creative Excellence productions. The story of the tiered system told annually, in person, on the record.
11.5
"Ini" as Flagship Narrative
The NFVF-funded ACE short film is the recurring example in every alumni story. From intern to producer with funded resources assisted by the Academy. Amplified across every channel, repeatedly.
11.6
Public Tier Status
Each registered trainee carries a visible tier badge inside Cineterns. The badge changes annually based on performance and placement record. The visibility itself is the antidote to the perpetual-trainee perception.
12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_CONTENT: StrategySection = {
  id: 'content',
  num: '12',
  title: "The Editorial Engine of a Twenty-Year-Old Institution.",
  subtitle: "A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.",
  content: `12 ·
Content Marketing & Storytelling Strategy
The Editorial Engine of a Twenty-Year-Old Institution.
A multi-format publication strategy that treats SAFA not as a training provider but as the industry's most authoritative source on skills, sustainability, transformation and the South African screen sector.
SAFA does not need more press releases. It needs an editorial position. A twenty-year-old institution that has placed over three thousand trainees on more than five hundred productions has the source material to publish a body of work no generalist agency could ever assemble. The content strategy proposed here treats SAFA as a publication — with weekly long-form articles, a monthly editorial, a documentary mini-series, a podcast, and a tightly-disciplined social cadence — all coordinated under a single editorial calendar and powered by the agentic content workflow described in Section 06.
The written stream produces two long-form SEO-optimised blog posts every week, written through the agentic pipeline and reviewed by the Chief Executive or a delegated editor before publication. In addition, every month a single deep-dive
"State of the Industry"
editorial is produced — longer, more considered, less optimised for search and more weighted toward authority — and distributed by email directly to every production company contact in the SAFA address book, every MICT SETA contact, every NFVF programme officer, and every relevant minister's office. This single distribution motion, repeated monthly, builds the kind of inbox presence that converts the Academy from a vendor into a voice.
The video stream is anchored by a six-part documentary mini-series profiling the trainee journey from first day on a production through to Head of Department. The series is shot in the visual language of the productions SAFA supports — cinematic, observational, restrained — not in the visual language of corporate training videos. Production-grade colour, production-grade sound, production-grade pacing. The series functions as both content and proof of capability simultaneously.
The social stream runs three named recurring series.
Alumni Spotlight
publishes one ACE alumnus story per week across all platforms — the practitioner, their department, the production they are currently working on, and a single quote on their pathway from intern to where they are now.
Production Diary
follows a live SAFA-supported production in real time, with permission, releasing short documentary-style updates from set as the production proceeds.
Skills Levy Explained in 60 Seconds
is the educational reel series targeted at production company decision-makers — short, sharp explanations of the 1% mechanism, the 20% claim, the WSP submission, the R350,000 cap, and the B-BBEE scorecard impact. Built for LinkedIn, repurposed for Instagram, distributed direct to finance teams.
The podcast — provisionally titled
"On Set & On the Record"
— places the Chief Executive in conversation with South African film industry leaders, alumni who have made it, and the international sustainability practitioners connected through GreenSet. Monthly cadence. Released on every podcast platform. Excerpted into vertical video for social. The podcast does for the Academy's institutional voice and its public authority what no quantity of advertising could buy: it produces the receipts.
Pillar 01
Skills & B-BBEE Legislation
The compliance, levy, and scorecard mechanics that production companies need explained well — and which SAFA is uniquely positioned to author with authority.
Pillar 02
AI in Post Production
Veo, Kling, Hailuo, and the hiring shift that is already underway in South African post houses. Commentary, case studies, and curriculum signals.
Pillar 03
Sustainable Production
GreenSet's services, Eco-Steward training, and the international procurement standards now demanded by Netflix and other global production partners.
Pillar 04
Career-Path Stories
From the intern's first day to the alumni's first HOD credit. "Ini" as the recurring proof point. The tiered pathway told as biography.
Pillar 05
SA Film Industry Commentary
The Academy's voice on industry developments, distressed conditions, transformation, the DTIC rebate, and the future of the screen sector in South Africa.
Format
Cinematic, Not Corporate
Every piece of video content shot to production standard. No training-video aesthetic. No stock libraries. The medium is part of the message.
13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_PARTNERS: StrategySection = {
  id: 'partners',
  num: '13',
  title: "Building the Relationships that Earn the Headlines.",
  subtitle: "A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.",
  content: `13 ·
Partnerships, PR & Media Relations
Building the Relationships that Earn the Headlines.
A formalised partnership architecture and disciplined media relations plan — converting existing goodwill into named co-brands, recurring press placements, and an institutional reputation that travels in front of the Academy rather than behind it.
The partnerships SAFA already has are largely informal, under-publicised, and tactically rather than strategically managed. The strategy formalises each of them and creates a public, repeated, named association — turning relationships into recognisable co-brands and recognisable co-brands into earned media. Six relationships are prioritised in the first ninety days of implementation.
Suzuki
is the existing FilmGro sponsor — ten years and one hundred and twenty-four licences deep — and the relationship is currently treated as a quiet CSI line item rather than as the named co-brand it should be. The strategy formalises Suzuki as
FilmGro Driving Academy, in partnership with Suzuki
in every reference, creates a co-branded landing page on safilmacademy.org, and pairs it with the Gauteng expansion campaign already on the first-quarter calendar.
Netflix and the international productions that use GreenSet
become the basis of a formal social impact case-study series — published with GreenSet, distributed by SAFA, leveraging the Netflix sustainability requirement narrative that is already industry-validated.
NFVF
and the
Department of Trade, Industry and Competition
are positioned as the government legitimacy and funding-access anchors — formalised through dedicated points of contact, named programme references, and a quarterly stakeholder briefing.
MICT SETA
— the accreditation anchor that gives SAFA its commercial right to operate — is given far more visibility in marketing materials than it currently has. It is not enough that the logo appears on the cover slide. The SETA accreditation needs to lead every conversation with a production accountant.
Ikasi Media
is identified explicitly in the Road Home proposal as a rural-outreach partner, but the relationship is not currently formalised. The strategy formalises it: Ikasi Media as the named rural outreach partner, a quarterly recruitment cycle for trainees from rural areas, and a co-branded recruitment campaign on Cineterns. And the
incubation hub
already being discussed within the Academy — a film incubator for independent ACE alumni productions — is positioned as the next-generation funding narrative around which to build a major partnership and grant cycle in Quarter Three of the calendar.
The PR plan that sits alongside the partnership architecture is narrow, named, and disciplined.
Screen Africa
is the priority trade publication — monthly contributed columns and quarterly cover-feature pitches. The
Mail & Guardian arts section
covers transformation, NPC governance, and the broader screen-sector story.
Destiny Business Magazine
is the home for institutional leadership profile pieces — a Black female-led institution rebuilding a twenty-year-old Academy is exactly the editorial proposition Destiny is built around. International trade publications covering African screen industry development —
Screen International, Variety's international desk, The Hollywood Reporter
— are pitched on the GreenSet–Netflix angle and the AI curriculum differentiation. A single contracted PR lead manages the placement pipeline; the agentic pipeline produces the source content.
13.1
Suzuki Formalisation
Named co-brand on FilmGro. Co-branded landing page. Gauteng expansion campaign with vehicle and named partner. Quarterly licence-graduate announcements.
13.2
Netflix & GreenSet Case Studies
Flagship social impact case studies co-published with GreenSet. The Netflix sustainability requirement narrative leveraged in every iteration.
13.3
NFVF · DTIC · MICT SETA
Government legitimacy and accreditation made prominent. Named programme references and quarterly stakeholder briefings.
13.4
Ikasi Media Rural Partnership
Formalised. Quarterly rural recruitment cycle. Co-branded campaign on Cineterns. Specifically referenced in the Road Home proposal.
13.5
Incubation Hub Narrative
The film incubator for independent ACE alumni productions positioned as the headline funding ask of Quarter Three.
13.6
Press Pipeline
Screen Africa, Mail & Guardian, Destiny Business, and international trade. Monthly contributed columns. Quarterly cover pitches. Single contracted PR lead.
14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_POSITION: StrategySection = {
  id: 'position',
  num: '14',
  title: "Six dimensions on which SAFA wins the room.",
  subtitle: "The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.",
  content: `14 ·
Competitive Positioning & Differentiation
Six dimensions on which SAFA wins the room.
The strategy's positioning argument runs on six specific capabilities — each one a category where the typical South African film training competitor cannot match SAFA's contextual depth or operating model. Together they define why the Academy occupies a category of one.
The strategy's positioning argument rests on six dimensions of differentiation. Each is a capability where the typical South African film training provider competes weakly, and where SAFA — by virtue of its accreditation, its history, and the integrated operating model laid out in the preceding sections — competes from a position of measurable depth. The dimensions are not aspirational. They are observable today, and they are what make the Academy difficult to substitute in any conversation a funder, a production company, or a government partner is having about the country's film training landscape.
The first dimension is
SETA compliance fluency
. The Workplace Skills Plan, the Annual Training Report, the Portfolio of Evidence, the moderation cycle, the Category B and Category C learning programme matrix — these are native vocabulary inside the Academy, not a research project. Production companies engaging SAFA do not have to explain the regulatory environment back to their training partner. The second dimension is
B-BBEE scorecard mechanics
: how skills development spend flows through the scorecard, what the 20% rebate cycle looks like in practice, and how production-company finance teams report on the result. SAFA's offer is built around the scorecard outcome, not adjacent to it. The third dimension is
production company commercial context
: knowing why Blue Ice Africa, Film Afrika, Home Brew, Mannequin, Moonlighting, Spier and Atlantic operate as SPV-driven fringe clients, and what their procurement teams actually need from a training partner. This is twenty years of accumulated context, not a discovery exercise.
The fourth dimension is
trainee career pathway knowledge
— the difference between an intern, a year-two trainee, a senior trainee, and an ACE alumnus, and the ability to communicate that tiered pathway in a way that retires the perpetual-trainee perception once and for all. The fifth is
live digital infrastructure
: the Cineterns portal and the interactive presentation prototype are already built, already deployed, and already demonstrable. The strategy is not asking for permission to begin; it is asking for permission to scale what is already running. The sixth is
agentic AI execution
: five named, defined, weekly running workflows producing funding applications, content, social, matching, and reputation monitoring without proportional staff growth. Each of these is a distinct competitive moat, and the strategy depends on all six operating together.
Against these six dimensions the typical sector competitor competes poorly across the contextual ones and impossibly across the technical ones. The positioning is therefore not
"SAFA produces better design"
. It is
"SAFA is built around the operating model of the South African film economy, and the infrastructure to execute is already shipped"
. That is the institutional argument. It is the argument the strategy makes on every page, and the argument the radar chart above renders visually in a single image.
One further note on positioning posture. The proof-of-concept principle underlying the digital infrastructure — when the Academy speaks of a portal, audiences see a portal; when the Academy speaks of a Johannesburg launch, audiences see a clear roadmap — is itself the central positioning move. The interactive prototype that looks like the real thing is not a style preference. It is a strategic demonstration that this is execution, not pitching. Nobody in the South African film training sector can match that without first doing the work the Academy has already done.
Dimension
Sector Baseline
SA Film Academy Position
SETA Compliance Fluency
Research dependency
Native vocabulary; WSP, ATR, POE, Category B/C
B-BBEE Scorecard Mechanics
External advisor needed
Built into the proposition
Production Co. Commercial Context
Briefed by client
Already lived; the fringe-client model understood
Trainee Career Pathway Knowledge
Generic learner narrative
The tiered system communicated as native idiom
Live Digital Infrastructure
Proposal-stage promises
Cineterns and interactive prototype deployed today
Agentic AI Execution
Buzzword
Five named workflows, weekly cadence
15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_CURRICULUM: StrategySection = {
  id: 'curriculum',
  num: '15',
  title: "The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.",
  subtitle: "A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.",
  content: `15 ·
Agentic AI in the Training Curriculum
The Only Film Academy in South Africa Training for the Post-Production Hiring Cycle of 2026.
A masterclass module on generative AI tools — Veo, Kling, Hailuo, and equivalent platforms — positioned simultaneously as a marketing differentiator, a curriculum differentiator, and a commercial differentiator.
The directive on this is unambiguous: AI and agentic production techniques must be urgently incorporated into SAFA's training curriculum as a masterclass module. The evidence is first-hand and immediate — a T Studios LinkedIn advertisement actively recruiting for someone who uses Veo and equivalent tools to produce short films that are one hundred per cent AI-generated, and post-production WhatsApp groups openly discussing that the shift is no longer theoretical. The phrasing captures it precisely:
it is happening as the industry speaks of it.
Generative AI tools — Veo, Kling, Hailuo, Runway and equivalent platforms — are already being used to produce commercial content, short films, and full advertising campaigns. Production companies and post-production houses are actively recruiting for these skills. The training institutions that do not respond to this shift will, within twenty-four months, be training people for a labour market that no longer exists. The training institutions that respond first will define the South African pipeline for the next decade.
The strategic position this opens for SAFA is clean and singular: it becomes
the only South African film training institution that combines traditional on-set, hands-on placement training with cutting-edge AI production literacy
. That is simultaneously a marketing differentiator, a curriculum differentiator, and a commercial differentiator — three different competitive advantages compressed into a single curriculum decision.
The masterclass module itself is structured around three layers, as the neural diagram above suggests. The first layer is
core craft
— cinematography, editing, sound design, colour grading — taught as it always has been, because the underlying judgement does not change. The second layer is
AI tooling
— practical literacy in Veo, Kling, Hailuo and Runway, with structured exercises in prompt construction, shot specification, iteration cycles, and output review. The third layer is
agentic workflow
— the orchestration discipline of briefing, iterating, reviewing, and integrating AI outputs into a production pipeline. The output is a trainee or alumnus who can walk into a post-production house in 2026 and answer the only question that matters:
can you operate the tools we are now hiring for?
The module is initially offered to existing trainees, ACE alumni, and a small admissions intake of independent creatives — the third stream is important because it creates a new revenue line for SAFA and a new community of practitioners around the Academy. Pre-registration opens in Quarter Two of the calendar. The module is delivered both in-person (Cape Town and Johannesburg) and asynchronously via a hosted learning portal connected to the Cineterns infrastructure.
15.1
What the Module Covers
Generative video tooling (Veo, Kling, Hailuo, Runway), prompt and shot specification, iteration workflow, integration with traditional NLE pipelines, ethics and provenance of AI-generated content.
15.2
Who It Targets
Existing SAFA trainees as part of curriculum upgrade; ACE alumni as continuing-education credentialing; a third intake of paying independent creatives, opening a new revenue line.
15.3
Why It Positions SAFA
The only institution combining placement-based on-set training with current generative-AI literacy. Marketing, curriculum and commercial differentiator simultaneously.
15.4
Delivery Model
In-person blocks in Cape Town and Johannesburg, with asynchronous self-paced content hosted on the Cineterns infrastructure. Same authentication, same identity, single user dashboard.
15.5
Industry Signal
T Studios is already advertising for AI-generated short film producers. Post-production WhatsApp groups are openly tracking the shift. This is not a forecast; it is a present-tense hiring reality.
15.6
Commercial Outcome
New revenue from the independent-creative stream. Defensible licence-fee positioning to production houses procuring AI-literate trainees. A pricing argument that does not exist for any competitor.
16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_KPIS: StrategySection = {
  id: 'kpis',
  num: '16',
  title: "The numbers reported every quarter.",
  subtitle: "A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.",
  content: `16 ·
Key Performance Indicators & Measurement Dashboard
The numbers reported every quarter.
A measurable, twelve-month KPI architecture with named baselines and named targets — designed to be reported quarterly to the Academy's executive and stakeholders, and to make trade-offs visible rather than hidden.
The KPI architecture below is designed to be reported quarterly. Each indicator has a clear baseline as of the implementation start date of 1 June 2026 and a clear twelve-month target by May 2027. The architecture deliberately separates leading indicators (registrations, traffic, applications submitted) from lagging indicators (successful placements, funding awarded, client revenue) so that the institution can see the marketing engine working before the commercial results crystallise.
Cineterns registrations are tracked as two distinct streams — trainees and production companies — because they answer different strategic questions. Trainee registration measures the Academy's pull within the talent pipeline. Production company registration measures its commercial relevance to the demand side.
Successful placement events
logged through the portal become the single most important indicator: every placement is a paid trainee, a B-BBEE point for a production company, and an administration fee for SAFA simultaneously.
The Chief Executive's professional LinkedIn connection growth is reported separately and explicitly. The baseline is the more than five hundred new connection requests logged over the past year — itself a measurable indicator of perception shift. The twelve-month target is two thousand by May 2027. This is not vanity reporting. The connection base is the distribution channel for every editorial, every podcast episode, every announcement, and every funding-application thought-leadership piece.
The full quarterly dashboard appears below. Each indicator has a named owner, a baseline, a target, and a reporting cadence. Variance against target is reported in writing, not in colour codes — because the conversations the Academy needs to have around its performance are qualitative, not chromatic.
Indicator
Baseline (Jun 2026)
12-Month Target (May 2027)
Owner
Cineterns trainee registrations
0 (open beta)
800 verified trainee profiles
Academy admin · Digital
Cineterns production company accounts
0
40 active production company accounts
Business development
Successful placement events logged
Manual baseline
250+ placements via portal
Academy admin
Blog organic traffic (sessions / month)
Low baseline
15,000 organic sessions / month
Content team
Domain authority (DA / DR)
To be audited
+15 points
SEO team
Social followers — LinkedIn (SAFA page)
Current page baseline
+8,000 followers
Social team
Social followers — Instagram
Current baseline
+12,000 followers
Social team
Social followers — Facebook
Current baseline
+6,000 followers
Social team
Executive LinkedIn connections
500+ recent
2,000 by May 2027
Executive office
Funding applications submitted
Ad-hoc
40 submitted (NFVF · DTI · DSAC · private)
Agentic pipeline · Executive review
Funding awarded (rand value)
—
R3.5m+ secured
Executive office
Skills Levy client acquisition
Current fringe client base
+8 new SPV / production company clients
Business development
GreenSet inbound enquiries
Existing flow
+50 inbound (Netflix · international)
GreenSet team
ACE alumni programme enrolments
Lagging baseline
+25 active ACE participants
ACE programme lead
FilmGro Gauteng licence grants
0 (programme not yet live in JHB)
20 licences issued in Gauteng
FilmGro lead · Partner
AI masterclass pre-registrations
0
120 pre-registrations
Curriculum team
17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_BUDGET: StrategySection = {
  id: 'budget',
  num: '17',
  title: "A Monthly Subscription, Not a Project Quote.",
  subtitle: "A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.",
  content: `17 ·
Budget Framework
A Monthly Subscription, Not a Project Quote.
A transparent, line-itemised monthly framework that converts marketing strategy from a series of unpredictable project bills into a single, defensible operating-expense line on SAFA's books.
The commercial structure proposed for this engagement is deliberately a monthly subscription rather than a project quote. This choice is not cosmetic. A monthly subscription converts marketing from an unpredictable, debate-prone capital request into a single defensible operating-expense line — predictable for the Academy's finance officer to budget, predictable for the executive to approve, and predictable for the delivery team to staff and execute. It also disciplines the relationship: a subscription holds both parties to a recurring deliverable rhythm rather than an episodic, opportunistic one.
The framework below separates three cost categories. The first is
infrastructure
— the platform stack that the strategy literally cannot exist without: Vercel for hosting the Cineterns and EmpowerYouth applications, Supabase for the authenticated database and storage, Cloudflare for security, caching and DNS, the Anthropic API that powers every agentic workflow described in Section 06, plus the social scheduling tool that publishes the content cadence and the SEO platform that monitors topic-cluster authority and ranking. The infrastructure layer is a fixed monthly cost; it does not vary with how busy any given month is.
The second category is
execution
— content production fees for the editorial and social streams, photo and video retainer for the cinematic-grade visual capture the strategy demands, paid amplification reserved for high-value posts (the Chief Executive's longer thought-leadership essays, the documentary mini-series episodes, and key Skills Levy decision-maker reels), and the contracted PR lead managing the press placement pipeline outlined in Section 13. Execution costs are largely fixed at this level of commitment, with the paid-amplification line carrying the only material monthly variance.
The third category is
management
— the strategic management fee covering all of the agentic-workflow design, oversight, weekly editorial direction, monthly reporting, quarterly strategy reviews, and the day-to-day delivery relationship. The proposed starting range is
R8,000 to R12,500 per month
. The lower end is appropriate for the first three months of implementation, during which the existing infrastructure (Cineterns, the interactive prototype) is integrated, the team rhythm is established, and the first deliverables are produced. The upper end becomes appropriate once the agentic pipeline is producing the full content cadence, the funding-application machine is in continuous operation, and the dashboard is reporting monthly to the Academy. Both endpoints are subscription pricing, not consulting day-rate pricing, and both reflect the fact that the digital infrastructure being deployed — the portals, the workflows, the dashboards — is already built. The institution is not paying for the construction of those assets a second time.
The total monthly subscription envelope at the starting range therefore sits in the order of
R32,000 to R36,500 per month, inclusive of all infrastructure and all execution costs and the management fee
. The exact monthly figure within that envelope is finalised at the contract stage. What is adopted in principle through this strategy is the framework, not the line-by-line procurement. The framework is what enables the work to start on 1 June 2026 without a parallel month of cost-reconciliation negotiation that would push the engagement out into the back half of the year.
Category
Line Item
Indicative Monthly
Notes
Infrastructure
Vercel Pro hosting
R380
Cineterns + EmpowerYouth + SAFA web
Supabase Pro database
R450
Authenticated users, storage, edge functions
Cloudflare Pro
R380
WAF, caching, DNS, image optimisation
Anthropic API (Claude)
R3,800
Powers all five agentic workflows
Social scheduling tool
R900
Multi-platform cadence + analytics
SEO platform
R1,800
Topic-cluster authority + rank tracking
Execution
Content production
R6,500
Editorial, blog, podcast post-production
Photo & video capture
R4,200
Cinematic-grade visual retainer
Paid amplification
R3,500
High-value LinkedIn / Meta boosts only
Contracted PR lead
R2,800
Screen Africa, M&G, Destiny placement
Management
Marketing partner management fee
R8,000 – R12,500
Agentic oversight, weekly direction, monthly reporting
Indicative monthly subscription envelope
R32,710 – R37,210
17.1
Why a Subscription
Converts unpredictable project bills into a single recurring operating-expense line. Predictable for finance, defensible for the executive, and disciplines a recurring deliverable rhythm.
17.2
Already-Built Assets
Cineterns and the interactive prototype are deployed today. The Academy is not paying for their construction a second time. The subscription pays for the operation of an existing system.
17.3
Starting Range
R8,000 to R12,500 per month management fee. Lower end for months one to three. Upper end once the full agentic cadence is in continuous operation.
17.4
What Is Inside the Envelope
Infrastructure (six SaaS / API lines). Execution (content, photo, video, paid, PR). Management (the strategic partner fee). Single monthly invoice, billed in advance.
17.5
What Is Outside
Once-off creative production over R20,000 per deliverable, major event production, paid talent fees, and out-of-pocket travel are quoted separately and pre-approved item by item.
17.6
Cancellation & Review
Thirty-day written cancellation notice on either side. Quarterly review of envelope against KPI performance. Annual renewal cycle aligned to SAFA's financial year-end.
18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const SECTION_RESOLUTION: StrategySection = {
  id: 'resolution',
  num: '18',
  title: "Three tracks. Thirty days. Tangible, reportable results.",
  subtitle: "Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.",
  content: `18 ·
Implementation Commencement
Three tracks. Thirty days. Tangible, reportable results.
Not an aspiration — a schedule. Three simultaneous activation tracks begin on 1 June 2026 and close the month with deliverables that can be counted, shown, and built upon in quarter two.
Implementation begins on 1 June 2026. Three activation tracks run simultaneously from day one. Each has a named output by day thirty. None depends on the others completing first — they are parallel, not sequential, because the Academy cannot afford to wait for one track to close before the next opens.
Track one
migrates the Academy's existing trainee roster onto the Cineterns platform. Fifty verified profiles — complete with department, region, availability, and training record — are live on the portal within the first two weeks. Five production company accounts are registered as employers by day twenty-two, with each account actively able to browse the verified talent pool and post placement opportunities at no cost. By day thirty, the first placement event is logged through the portal — a SAFA trainee matched to a production company request, with the paperwork generated, the B-BBEE points documented, and the SAFA administration fee recorded. That single event is the proof of model: the digital infrastructure working as designed.
Track two
activates the content pipeline at full cadence from week one. Four blog posts go live in June — each targeting a specific search query that a production accountant, an aspiring trainee, or a funding officer is likely to type into Google or ask an AI assistant. The first "State of the Industry" editorial is written, reviewed, and distributed by email to every production company contact, every MICT SETA programme officer, and every NFVF contact in the Academy's address book by day twenty-eight. Social cadence — three posts per week across LinkedIn, Instagram and Facebook — is live from day three. The first podcast episode is in production by day fifteen, recording completed by day thirty. These are not aspirational targets. They are a content calendar with dates and names against every deliverable, visible to the full team from day one.
Track three
converts the existing Suzuki relationship from a quiet CSI arrangement into a publicly named co-brand by written confirmation from Suzuki's marketing team within the first two weeks. The first GreenSet sustainability case study — a named production, a named sustainability outcome, a named Netflix supply-chain requirement met — is drafted and confirmed by day twenty-two. Stakeholder briefings with NFVF and DTIC are scheduled before day thirty — scheduled, not aspirational. The Ikasi Media service-level agreement is drafted and in review by day thirty. Each of these is a relationship that SAFA already has. What the implementation calendar does is convert each one from informal into documented, from acknowledged into co-branded, and from occasional into recurring.
Cineterns: the live conversion engine.
Every channel described in this strategy — every blog post, every LinkedIn thought-leadership piece, every Skills Levy reel, every podcast episode, every GreenSet case study, every speaking engagement — ends at the same destination:
cineterns.vercel.app
. That destination is already live. It is not a wireframe or a promise. It is a working platform with verified trainee profiles, active employer accounts, and a job-listing engine that production companies can use today, entirely free.
Understanding how Cineterns works in practice is essential to understanding where the strategy converts. On the trainee side, any SAFA-verified graduate or current trainee registers on the platform and creates a profile — their department (Direction & AD, Production Accounting, Post-Production & Editing, Colour Grading, Sound Design, Cinematography, and so on), their location, their training record, and their availability. Once a profile is submitted and verified by the Academy, the trainee carries a
SAFA VERIFIED
badge on their listing — a public, machine-readable credential that immediately distinguishes them from any self-registered portfolio site on the internet. Over two hundred and fifty verified profiles are live on the platform today.
On the employer side, a production company, studio, broadcaster, or post-production facility creates an employer account at no cost, browses the verified talent pool filtered by department and region, and posts a placement opportunity in under ten minutes. Every candidate who applies through the platform has been trained, assessed, and verified by the Academy. There is no screening effort required on the production side — the SAFA verification does that work before the employer ever opens the listing. Production companies can also visit the
For Employers
section of the platform, which explains the Skills Levy B-BBEE mechanism in plain language and lays out the administration process: SAFA handles the compliance paperwork in exchange for an administration fee capped at R350,000, freeing the production company's finance team from the burden entirely.
The marketing funnel is therefore concrete and linear. Awareness is built through the content and social channels described in Section 12. Consideration is built through the Skills Levy explainer series and the B-BBEE scorecard argument made in Section 10. Conversion happens when a production company visits cineterns.vercel.app, creates an employer account, and posts its first placement opportunity — or when a trainee registers, is verified, and is matched to a production. Every placement event logged in the portal generates three simultaneous outcomes: a paid trainee, a B-BBEE scorecard entry for the production company, and an administration fee recorded for SAFA. That is the commercial model. Cineterns is where it executes.
For Trainees
Register & Get Discovered
Create a verified SAFA profile on Cineterns. The SAFA VERIFIED badge distinguishes your credentials from any self-registered portfolio. Browse active job listings and apply directly — or be approached by productions browsing the pool. Entirely free.
REGISTER NOW →
For Production Companies
Post a Placement Opportunity
Every candidate on Cineterns is SAFA-trained and verified. Post your next placement opportunity — it costs nothing, takes under ten minutes, and removes all screening overhead from your production team. The Skills Levy administration runs automatically through SAFA.
FOR EMPLOYERS →
Browse Now
250+ Verified Profiles. Live Today.
Direction & AD, Production Accounting & Finance, Post-Production & Editing, Colour Grading, Sound Design & Mixing, Cinematography. Filterable by department and region. The verified talent pool is available to browse without registration.
BROWSE INTERNS →
The SAFA Presentation Standard: cinematic, web-based, URL-delivered.
Every SAFA staff member who presents to an external party — a production company, a funder, a government body, a potential partner — should be presenting using the same format as
empoweryouth.vercel.app
. Not a version of it. That format itself.
The distinction between a PowerPoint and a web-based cinematic presentation is not cosmetic. It is strategic. A PowerPoint file can be forwarded, compressed, garbled, or opened in a version of software that breaks the fonts. A web-based presentation at a URL is always current — it can be updated after it has been sent, it opens identically on any device from any browser anywhere in the world, and it carries the visual authority of a production rather than the institutional anonymity of a slide template. When a production company finance director receives a URL from SAFA and opens a full-screen, cinematically designed interactive experience instead of a PDF attachment, the perception of the institution changes before a single word is read.
The recommendation is specific and operational. Every SAFA presentation type — the Skills Levy explainer for production company finance teams, the B-BBEE scorecard pitch for commercial clients, the GreenSet sustainability deck for international studios, the FilmGro Gauteng expansion proposal for the Suzuki account team, the NFVF funding application narrative, the ACE alumni programme pitch for potential corporate sponsors — is built once as a cinematic web experience, hosted at a SAFA-branded URL, and sent as a link rather than an attachment. When the content needs updating, the URL is updated. The audience always has the current version. No version control, no email chains, no "please find the latest deck attached."
The EmpowerYouth presentation at empoweryouth.vercel.app is the reference implementation. It demonstrates the visual language, the scroll-based navigation, the cinematic dark aesthetic, and the interaction model. It sets the bar for what a SAFA external presentation looks and feels like. Every subsequent presentation built for the Academy should clear that bar or exceed it.
18.1
Skills Levy Explainer
Built for production company finance directors and production accountants. Explains the 1% mechanism, the 20% WSP claim, the SAFA administration model capped at R350,000, and the B-BBEE scorecard impact in one cinematic scroll. Sent as a URL. Updated live. No PDF.
18.2
GreenSet Sustainability Deck
Built for international production companies and studios subject to Netflix and international co-production sustainability requirements. Presents GreenSet's Eco-Steward training, carbon reporting, and crew certification in the cinematic format. Sent to procurement teams globally as a URL.
18.3
FilmGro Gauteng Proposal
Built for the Suzuki account team and the Gauteng partner driving school. Makes the case for the Gauteng expansion — market size, trainee pipeline, existing 124-licence track record in the Western Cape — in a format that can be shared internally by the recipient without distortion.
18.4
ACE Corporate Sponsor Pitch
Built for potential corporate sponsors of the Academy of Creative Excellence incubation programme. Presents the short film "Ini" as the proof of concept, the incubation model as the investment proposition, and SAFA's twenty-year track record as the risk mitigation. URL-delivered to the boardroom before the meeting, not after.
18.5
NFVF Funding Narrative
Built for submission through the agentic pipeline as a companion to every formal application. A visually compelling case statement — impact statistics, transformation record, programme reach — that the NFVF officer can share internally in support of the written application. URL, not attachment.
18.6
Cineterns Employer Onboarding
Built for production managers being introduced to the Cineterns platform for the first time. A five-minute scroll showing exactly what the portal does, how the SAFA verification works, how to post a placement, and how the Skills Levy administration is handled end-to-end. Sent before the first onboarding call.
01
June 2026 · Three tracks live simultaneously
30
June 2026 · First placement event logged on Cineterns
08
Blog posts published in month one
05
Employer accounts registered by day 30
SA FILM ACADEMY · DIGITAL PRESENCE
Web ·
safilmacademy.org
·
GreenSet ·
greenset.org
·
Talent Portal ·
cineterns.vercel.app
Facebook ·
TheSAFilmAcademy
·   Instagram ·
@safilmacademy
Where Industry Meets Opportunity.
SA FILM ACADEMY · 360° MARKETING STRATEGY · 2026–2027`,
};

export const ALL_SECTIONS: StrategySection[] = [
  SECTION_ORG,
  SECTION_ECOSYSTEM,
  SECTION_INFRA,
  SECTION_CALENDAR,
  SECTION_AI,
  SECTION_SEO,
  SECTION_BRAND,
  SECTION_LEADER,
  SECTION_COMMERCIAL,
  SECTION_COMMUNITY,
  SECTION_CONTENT,
  SECTION_PARTNERS,
  SECTION_POSITION,
  SECTION_CURRICULUM,
  SECTION_KPIS,
  SECTION_BUDGET,
  SECTION_RESOLUTION,
];

export const sectionIndex: Record<string, StrategySection> = {
  org: SECTION_ORG,
  ecosystem: SECTION_ECOSYSTEM,
  infra: SECTION_INFRA,
  calendar: SECTION_CALENDAR,
  ai: SECTION_AI,
  seo: SECTION_SEO,
  brand: SECTION_BRAND,
  leader: SECTION_LEADER,
  commercial: SECTION_COMMERCIAL,
  community: SECTION_COMMUNITY,
  content: SECTION_CONTENT,
  partners: SECTION_PARTNERS,
  position: SECTION_POSITION,
  curriculum: SECTION_CURRICULUM,
  kpis: SECTION_KPIS,
  budget: SECTION_BUDGET,
  resolution: SECTION_RESOLUTION,
};

// Map nav.ts route slugs to sectionIndex keys
export const slugToId: Record<string, string> = {
  organisation: 'org',
  ecosystem: 'ecosystem',
  infrastructure: 'infra',
  calendar: 'calendar',
  'agentic-ai': 'ai',
  seo: 'seo',
  brand: 'brand',
  leadership: 'leader',
  commercial: 'commercial',
  community: 'community',
  content: 'content',
  partnerships: 'partners',
  positioning: 'position',
  curriculum: 'curriculum',
  kpis: 'kpis',
  budget: 'budget',
  implementation: 'resolution',
};
